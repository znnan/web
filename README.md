# NovaBridge Consulting - 企业官网

这是一个为 NovaBridge Consulting 商业咨询公司创建的静态企业官网，使用 React + Vite 构建，支持中英文双语切换。

## 技术栈

- **React 18** - 前端框架
- **Vite** - 构建工具
- **React Router** - 路由管理
- **Tailwind CSS** - 样式框架
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
- ✅ 简洁专业的国际化商务风格
- ✅ 静态部署友好（可部署到 Vercel、Netlify 等）

## 项目结构

```
web/
├── src/
│   ├── components/       # 公共组件
│   │   ├── Navbar.jsx    # 导航栏
│   │   └── Footer.jsx    # 页脚
│   ├── contexts/         # React Context
│   │   └── LanguageContext.jsx  # 语言切换上下文
│   ├── pages/            # 页面组件
│   │   ├── Home.jsx      # 首页
│   │   ├── Services.jsx  # 服务页面
│   │   ├── CaseStudies.jsx  # 成功案例
│   │   ├── About.jsx     # 关于我们
│   │   └── Contact.jsx   # 联系方式
│   ├── App.jsx           # 主应用组件
│   ├── main.jsx         # 入口文件
│   ├── index.css        # 全局样式
│   └── i18n.js          # 国际化翻译文件
├── index.html           # HTML 模板
├── package.json         # 项目配置
├── vite.config.js      # Vite 配置
├── tailwind.config.js  # Tailwind 配置
└── postcss.config.js   # PostCSS 配置
```

## 本地开发

### 安装依赖

```bash
npm install
```

### 启动开发服务器

```bash
npm run dev
```

开发服务器将在 `http://localhost:5173` 启动。

### 构建生产版本

```bash
npm run build
```

构建产物将输出到 `dist` 目录。

### 预览生产构建

```bash
npm run preview
```

## 部署说明

### Vercel 部署

1. 将代码推送到 GitHub/GitLab/Bitbucket
2. 在 [Vercel](https://vercel.com) 导入项目
3. Vercel 会自动检测 Vite 项目并配置构建设置
4. 部署完成！

**构建命令**: `npm run build`  
**输出目录**: `dist`

### Netlify 部署

1. 将代码推送到 Git 仓库
2. 在 [Netlify](https://www.netlify.com) 导入项目
3. 配置构建设置：
   - **Build command**: `npm run build`
   - **Publish directory**: `dist`
4. 部署完成！

### 静态服务器部署

1. 运行 `npm run build` 构建项目
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

1. 将图片放入 `public` 目录（如果不存在请创建）
2. 在组件中使用 `/image-name.jpg` 引用图片

## 浏览器支持

- Chrome (最新版本)
- Firefox (最新版本)
- Safari (最新版本)
- Edge (最新版本)

## 许可证

MIT License

## 联系方式

如有问题或建议，请联系：contact@novabridge.com

