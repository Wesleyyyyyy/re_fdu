# RE:FUDAN Landing Page — 实现计划

> 状态：所有关键决策已确认，可进入实现
> 创建：2026-05-17
> 更新：2026-05-17

## 背景

Landing page 对应 PRD P0 页面：身份选择入口，也是整个产品叙事的第一道门。

产品核心定义（来自 MVP 统合稿）：
> RE:FUDAN 是一个面向校园升学与求职路径的 agent-native 前哨社交系统。它不是让 AI 替代人与人相见，而是让你的经验、问题与路径先通过 agent 被理解、被匹配、被解释，并在值得时为你换来一次更高质量的真人相遇。

设计语言：参考 Hermes landing 逆向资产的设计系统架构（语义 token、双主题、排版层级、motion primitives）。不完全锁定"空灵高渺"——PRD 仍在演进，设计保持弹性。

---

## 技术栈

- **Next.js 15** (App Router)
- **Tailwind CSS v4**
- **Framer Motion**
- **next-themes**（主题状态管理，不承担设计系统职责）
- **Google Fonts via next/font**（字体栈待细化，见下）
- CSS variables 管理所有语义 token（完全沿用 Hermes 模式）

---

## 设计 Token 系统

两套主题，对应两张背景图：

```css
/* 深色主题（默认）— 深青色照片 */
[data-theme='dark'] {
  --color-bg: #041C1C;
  --color-fg: #FFFFFF;
  --color-mid: #B8D4D0;
  --color-accent: #7ECDC4;
  --color-border: rgba(184, 212, 208, 0.2);
  --color-surface: rgba(255, 255, 255, 0.04);
  --bg-image: url('/images/bg-dark.png');
  --bg-overlay: rgba(4, 28, 28, 0.55);
}

/* 浅色主题 — 淡蓝素描图 */
[data-theme='light'] {
  --color-bg: #EEF4FF;
  --color-fg: #0A1628;
  --color-mid: #2A4A7F;
  --color-accent: #4A7FC1;
  --color-border: rgba(42, 74, 127, 0.15);
  --color-surface: rgba(10, 22, 40, 0.04);
  --bg-image: url('/images/bg-light.png');
  --bg-overlay: rgba(238, 244, 255, 0.25);
}
```

字体角色（已确认）：
- `font-display` → **Collapse Bold**（Hermes 原版，已下载至 `hermes_landing_reverse/public/fonts/`）
- `font-ui` → **Mondwest Regular**（Hermes 原版，已下载）
- `font-zh` → **方正粗宋简体**（本机已安装，用于"复见"两字）
- `font-mono` → **JetBrains Mono**（本机已安装）

"复见"字形处理：
```css
.logo-zh {
  font-family: '方正粗宋简体';
  font-size: 96px;
  line-height: 0.88;
  transform: scaleX(0.62);
  transform-origin: left center;
  letter-spacing: -0.02em;
}
```
效果：仿照 Hermes "HERMES AGENT" 双行堆叠的极客感，宋体横向压缩至 62% 使字形高挑窄峭。

语言规则：**除"复见"两字外，landing page 全部使用英文。**

---

## 文件结构

```
src/
├── app/
│   ├── page.tsx              # Landing page (P0)
│   ├── layout.tsx            # Root layout + ThemeProvider + fonts
│   └── globals.css           # CSS variables + base reset
├── components/
│   ├── ui/
│   │   ├── ThemeToggle.tsx   # Hermes 风格胶囊切换按钮
│   │   └── SectionLabel.tsx  # 大写框架标签原语
│   └── sections/
│       ├── Header.tsx
│       ├── Hero.tsx          # 全屏 hero + 背景图
│       ├── Manifesto.tsx     # 复见哲学段落
│       ├── HowItWorks.tsx    # 4 步 A2A 流程
│       └── Footer.tsx
└── lib/
    └── theme/
        └── ThemeProvider.tsx
```

字体文件：
- `public/fonts/Collapse-Bold.woff2` ← 从 `hermes_landing_reverse/public/fonts/` 复制
- `public/fonts/Mondwest-Regular.woff2` ← 同上
- `public/fonts/FZCuSong-B09S.ttf` ← 从 `~/Library/Fonts/方正粗宋简体.ttf` 复制
- 背景图：
- `public/images/bg-dark.png` ← 深青色照片
- `public/images/bg-light.png` ← 淡蓝素描图

---

## 页面区块

### Header（固定，透明 → scroll 后 backdrop-blur）
- 左：`RE:FUDAN`（显示字体，大写，字间距）
- 右：ThemeToggle（胶囊形，半透明边框，accent 色调，完全复刻 Hermes 样式）

### Hero（100vh）
- 背景：校园图 + `--bg-overlay` 叠色
- 背景动效：CSS keyframe `scale(1.0 → 1.04)`，20s 缓慢呼吸
- 中心内容（Framer Motion stagger fade-up）：
  1. 小标签：`RE:FUDAN · RECONNECT HACKATHON 2026`（Mondwest，大写，字间距，`--color-mid`）
  2. "复见"（方正粗宋简体 + scaleX(0.62)，双行堆叠，极大字号）
  3. 主标语：`YOUR EXPERIENCE,`（换行）`BEFORE YOU ARRIVE.`（Collapse Bold，~80px，大写，`--color-fg`）
  4. 副标语：`Your agent meets them first. You follow when it matters.`（Mondwest，~16px，`--color-mid`）
  5. 两个 CTA 按钮：
     - `我在寻见 →`（学弟学妹，filled，`--color-accent` bg）
     - `我已先行 →`（学长学姐，outlined，`--color-border`）
- 底部滚动指示器

### Manifesto
- 大引用：`"In RE:FUDAN, you are not matched. You are seen again."`
- 2 句 A2A 概念说明：`Your agent has the first conversation. You arrive when it matters.`
- `--color-border` 分隔线

### How It Works（4 步，全英文）
- `01 BUILD YOUR AGENT` — Upload your resume and knowledge. Your agent learns your path.
- `02 FIND YOUR GUIDE` — Discover mentors who've already walked where you're going.
- `03 AGENT GOES FIRST` — Your agent has the first conversation. You stay focused.
- `04 RECONNECT` — When it matters, the real meeting happens.

### Footer
- `RE:FUDAN · 复见 · 2026`
- `Built for Second Me × Reconnect Hackathon`

---

## 动效原语

| 原语 | 实现 |
|---|---|
| `fade-up` | Framer Motion: `y: 20→0`, `opacity: 0→1`, `duration: 0.7` |
| `stagger-list` | `staggerChildren: 0.12` |
| `bg-breathe` | CSS keyframe: `scale(1→1.04)`, 20s infinite alternate |
| `hover-glow` | CSS box-shadow with `--color-accent` 0.3 alpha |
| `theme-crossfade` | CSS transition 0.4s on `:root` |
| `scroll-reveal` | Framer Motion `whileInView`, `once: true` |

---

## 待细化项

- [x] Hero 主标语 → `YOUR EXPERIENCE, BEFORE YOU ARRIVE.`
- [x] Hero 副标语 → `Your agent meets them first. You follow when it matters.`
- [x] CTA 按钮文字 → `我在寻见 / 我已先行`
- [x] Manifesto 引用句 → `"In RE:FUDAN, you are not matched. You are seen again."`
- [x] 字体栈 → Collapse Bold + Mondwest Regular + 方正粗宋简体 + JetBrains Mono
- [x] 语言规则 → 全英文，仅"复见"保留中文
- [x] "复见"字形 → 方正粗宋简体 + scaleX(0.62) 压缩
- [ ] PRD 叙事方向最终确认（统合稿已完成，待同步进 doc/）
