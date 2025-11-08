# NovaBridge Consulting - 企业官网

这是一个为 NovaBridge Consulting 商业咨询公司创建的静态企业官网，使用 React + Vite 构建，支持中英文双语切换。

## 技术栈

- **React 18** - 前端框架
- **Vite** - 构建工具
- **React Router** - 路由管理（使用 HashRouter 支持 GitHub Pages）
- **Tailwind CSS** - 样式框架
- **Framer Motion** - 动画库
- **React Icons** - 图标库
- **响应式设计** - 支持移动端和桌面端

## 功能特性

- ✅ 双语支持（中文/英文）
- ✅ 响应式布局
- ✅ 5个主要页面：
  - 首页（Home）
  - 我们的服务（Services）
  - 成功案例（Case Studies）
  - 关于我们（About Us）
  - 联系方式（Contact）
- ✅ 炫酷的视觉效果（滚动视差、玻璃态、动画）
- ✅ 静态部署友好（支持 GitHub Pages、Vercel、Netlify 等）

## 项目结构

```
web/
├── src/
│   ├── components/       # 公共组件
│   │   ├── Navbar.jsx    # 导航栏
│   │   └── Footer.jsx    # 页脚
│   ├── contexts/         # React Context
│   │   └── LanguageContext.jsx  # 语言切换上下文
│   ├── hooks/            # 自定义 Hooks
│   │   └── useScrollAnimation.js  # 滚动动画 Hook
│   ├── pages/            # 页面组件
│   │   ├── Home.jsx      # 首页
│   │   ├── Services.jsx  # 服务页面
│   │   ├── CaseStudies.jsx  # 成功案例
│   │   ├── About.jsx     # 关于我们
│   │   └── Contact.jsx   # 联系方式
│   ├── assets/           # 静态资源
│   │   └── images/      # 图片资源
│   ├── App.jsx           # 主应用组件
│   ├── main.jsx         # 入口文件
│   ├── index.css        # 全局样式
│   └── i18n.js          # 国际化翻译文件
├── .github/
│   └── workflows/
│       └── deploy.yml    # GitHub Actions 部署配置
├── index.html           # HTML 模板
├── package.json         # 项目配置
├── vite.config.js      # Vite 配置（已配置 base: '/yinkun/'）
├── tailwind.config.js  # Tailwind 配置
└── postcss.config.js   # PostCSS 配置
```

## 本地开发

### 前置要求

- Node.js (v18 或更高版本)
- pnpm (推荐使用 pnpm，项目已配置)

安装 pnpm：
```bash
npm install -g pnpm
# 或使用 corepack（Node.js 16.13+）
corepack enable
corepack prepare pnpm@latest --activate
```

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

开发服务器将在 `http://localhost:5173` 启动。

### 构建生产版本

```bash
pnpm build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
pnpm preview
```

## 部署说明

### GitHub Pages 部署（推荐）

本项目已配置为部署到 GitHub Pages，使用 `/yinkun/` 作为基础路径。

⚠️ **重要**：GitHub Pages 免费版仅支持公开仓库。如果仓库是私有的，需要先将其设置为公开。详细步骤请参考 [GITHUB_SETUP.md](./GITHUB_SETUP.md)。

#### 自动部署（GitHub Actions）

1. **将仓库设置为公开（如果尚未设置）**
   - 进入仓库的 Settings → 滚动到底部 → Danger Zone
   - 点击 "Change visibility" → 选择 "Make public"
   - 详细步骤见 [GITHUB_SETUP.md](./GITHUB_SETUP.md)

2. **启用 GitHub Pages**
   - 进入仓库的 Settings → Pages
   - Source 选择 **"GitHub Actions"**（推荐）
   - 如果看到 "Deploy from a branch" 选项，选择 **"Static HTML"** 而不是 Jekyll
   - 详细说明见 [GITHUB_PAGES_SETUP.md](./GITHUB_PAGES_SETUP.md)

2. **推送代码**
   - 将代码推送到 `main` 或 `master` 分支
   - GitHub Actions 会自动构建并部署

3. **访问网站**
   - 部署完成后，访问：`https://[你的用户名].github.io/yinkun/`

#### 手动部署

1. 构建项目：
```bash
pnpm build
```

2. 将 `dist` 目录的内容推送到 `gh-pages` 分支：
```bash
# 安装 gh-pages（如果还没有）
pnpm add -D gh-pages

# 部署（package.json 中已配置 deploy 脚本）
pnpm deploy
```

### Vercel 部署

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 在 [Vercel](https://vercel.com) 导入项目
3. 在项目设置中配置：
   - **Base Directory**: 留空或设置为项目根目录
   - **Build Command**: `pnpm build`
   - **Output Directory**: `dist`
   - **Install Command**: `pnpm install`
4. 如果需要使用 `/yinkun/` 前缀，在 Vercel 设置中添加环境变量或使用重写规则

### Netlify 部署

1. 将代码推送到 Git 仓库
2. 在 [Netlify](https://www.netlify.com) 导入项目
3. 配置构建设置：
   - **Base directory**: 留空
   - **Build command**: `pnpm build`
   - **Publish directory**: `dist`
4. 部署完成！

### 静态服务器部署

1. 运行 `pnpm build` 构建项目
2. 将 `dist` 目录中的所有文件上传到您的静态服务器
3. 配置服务器支持 SPA 路由（所有路由重定向到 `index.html`）

**Nginx 配置示例**:
```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /path/to/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## 重要配置说明

### GitHub Pages 路径配置

- **Base Path**: `/yinkun/`
- **路由模式**: HashRouter（自动处理路径，无需服务器配置）
- **配置文件**: `vite.config.js` 中已设置 `base: '/yinkun/'`

如果需要在其他路径部署，修改 `vite.config.js` 中的 `base` 配置：
```javascript
export default defineConfig({
  base: '/your-path/',  // 修改这里
  // ...
})
```

## 自定义内容

### 修改公司信息

编辑 `src/i18n.js` 文件中的翻译内容，可以修改：
- 公司名称
- 服务描述
- 案例研究
- 联系方式等所有文本内容

### 修改样式

- 全局样式：编辑 `src/index.css`
- Tailwind 配置：编辑 `tailwind.config.js`
- 组件样式：直接在组件中使用 Tailwind 类名

### 添加图片

1. 将图片放入 `src/assets/images/` 目录
2. 在组件中导入并使用：
```javascript
import myImage from '../assets/images/my-image.jpg'
```

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系：contact@novabridge.com
