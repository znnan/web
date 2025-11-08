# GitHub Pages 部署指南

本指南将帮助您将网站部署到 GitHub Pages，使用 `/yinkun/` 作为基础路径。

## ⚠️ 重要提示

**GitHub Pages 免费版仅支持公开仓库（Public Repository）**

如果您看到 "Upgrade or make this repository public to enable Pages" 的提示，需要先将仓库设置为公开。详细步骤请参考 [GITHUB_SETUP.md](./GITHUB_SETUP.md)。

## 前置要求

1. 一个 GitHub 账户
2. 已安装 Git
3. 已安装 Node.js (v18 或更高版本)
4. 已安装 pnpm（推荐使用 corepack）
5. **仓库必须设置为 Public（公开）**

安装 pnpm：
```bash
# 使用 corepack（推荐，Node.js 16.13+）
corepack enable
corepack prepare pnpm@latest --activate

# 或使用 npm 全局安装
npm install -g pnpm
```

## 部署步骤

### 方法一：使用 GitHub Actions（推荐）

#### 1. 准备仓库

```bash
# 初始化 Git 仓库（如果还没有）
git init

# 添加所有文件
git add .

# 提交更改
git commit -m "Initial commit"

# 在 GitHub 上创建新仓库，然后添加远程仓库
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送到 GitHub
git push -u origin main
```

#### 2. 启用 GitHub Pages

1. 进入您的 GitHub 仓库
2. 点击 **Settings**（设置）
3. 在左侧菜单中找到 **Pages**
4. 在 **Source** 部分，您会看到几个选项：
   - **GitHub Actions** ⭐（推荐，选择这个）
   - Deploy from a branch（从分支部署）
     - Jekyll（用于 Jekyll 网站）
     - Static HTML（用于静态 HTML 文件）

5. **选择 "GitHub Actions"**（这是推荐选项，因为我们使用 GitHub Actions 自动构建和部署）
6. 保存设置

> **注意**：如果选择 "Deploy from a branch"，需要选择 "Static HTML" 而不是 "Jekyll"，因为我们的项目是使用 Vite 构建的 React 应用，不是 Jekyll 网站。但推荐使用 "GitHub Actions" 选项。

#### 3. 自动部署

- 每次推送到 `main` 或 `master` 分支时，GitHub Actions 会自动：
  1. 安装依赖
  2. 构建项目
  3. 部署到 GitHub Pages

#### 4. 访问网站

部署完成后（通常需要几分钟），访问：
```
https://你的用户名.github.io/yinkun/
```

### 方法二：手动部署（使用 gh-pages）

#### 1. 安装 gh-pages

```bash
pnpm add -D gh-pages
```

#### 2. 构建并部署

```bash
pnpm deploy
```

这个命令会：
1. 构建项目（`pnpm build`）
2. 将 `dist` 目录推送到 `gh-pages` 分支

#### 3. 配置 GitHub Pages

1. 进入仓库的 **Settings** → **Pages**
2. 在 **Source** 中选择 **Deploy from a branch**
3. 选择 **gh-pages** 分支
4. 选择 **/ (root)** 文件夹
5. **重要**：确保选择 **Static HTML** 而不是 Jekyll（如果看到这个选项）
6. 点击 **Save**

> **说明**：如果使用手动部署方法，选择 "Static HTML" 是正确的，因为我们的项目是静态 HTML 文件，不是 Jekyll 网站。项目根目录已有 `.nojekyll` 文件，用于禁用 Jekyll 处理。

#### 4. 访问网站

几分钟后访问：
```
https://你的用户名.github.io/yinkun/
```

## 重要配置说明

### Base Path 配置

项目已配置为使用 `/yinkun/` 作为基础路径。配置文件在 `vite.config.js`：

```javascript
export default defineConfig({
  base: '/yinkun/',
  // ...
})
```

### 路由配置

项目使用 `HashRouter` 而不是 `BrowserRouter`，这样可以：
- 避免 GitHub Pages 的 404 问题
- 无需服务器配置
- URL 格式：`https://你的用户名.github.io/yinkun/#/services`

### 修改基础路径

如果需要修改基础路径：

1. 修改 `vite.config.js`：
```javascript
base: '/你的新路径/',
```

2. 重新构建和部署

## 故障排除

### 问题：页面显示空白

**解决方案**：
1. 检查浏览器控制台是否有错误
2. 确认 `base` 路径配置正确
3. 确认所有资源路径都正确

### 问题：路由不工作

**解决方案**：
- 项目已使用 `HashRouter`，路由应该正常工作
- 如果使用 `BrowserRouter`，需要配置 404 重定向

### 问题：图片不显示

**解决方案**：
1. 确认图片在 `src/assets/images/` 目录中
2. 确认图片已正确导入
3. 检查构建后的 `dist` 目录中是否有图片文件

### 问题：样式不生效

**解决方案**：
1. 确认 Tailwind CSS 配置正确
2. 检查 `dist` 目录中是否有 CSS 文件
3. 清除浏览器缓存

## 更新网站

每次更新代码后：

1. **使用 GitHub Actions**：
   ```bash
   git add .
   git commit -m "Update website"
   git push
   ```
   自动部署，等待几分钟即可

2. **使用手动部署**：
   ```bash
   pnpm deploy
   ```

## 自定义域名（可选）

如果您有自己的域名：

1. 在仓库的 **Settings** → **Pages** 中添加自定义域名
2. 在域名 DNS 设置中添加 CNAME 记录
3. 等待 DNS 传播（可能需要几小时）

## 更多信息

- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [Vite 部署指南](https://vitejs.dev/guide/static-deploy.html)
- [React Router HashRouter](https://reactrouter.com/en/main/router-components/hash-router)

