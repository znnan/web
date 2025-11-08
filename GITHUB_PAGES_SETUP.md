# GitHub Pages 配置指南

## 选择正确的部署方式

GitHub Pages 提供两种主要的部署方式，根据您的项目类型选择：

### 方式一：GitHub Actions（推荐）⭐

**适用于**：使用构建工具（如 Vite、Webpack）的项目

**配置步骤**：

1. 进入仓库 **Settings** → **Pages**
2. 在 **Source** 部分，选择 **GitHub Actions**
3. 保存设置

**优点**：
- ✅ 自动构建和部署
- ✅ 支持现代构建工具
- ✅ 每次推送代码自动更新
- ✅ 无需手动构建

**本项目已配置**：`.github/workflows/deploy.yml` 文件已设置好自动部署流程。

---

### 方式二：Deploy from a branch（从分支部署）

**适用于**：纯静态 HTML 文件或已构建好的静态文件

**配置步骤**：

1. 进入仓库 **Settings** → **Pages**
2. 在 **Source** 部分，选择 **Deploy from a branch**
3. 选择分支（通常是 `gh-pages` 或 `main`）
4. 选择文件夹（通常是 `/ (root)` 或 `/docs`）

#### 选择 Jekyll 还是 Static HTML？

**选择 Static HTML** ⭐（本项目使用这个）

- ✅ 适用于：React、Vue、Angular 等构建的静态网站
- ✅ 适用于：纯 HTML/CSS/JS 文件
- ✅ 不会对文件进行 Jekyll 处理
- ✅ 项目根目录已有 `.nojekyll` 文件（禁用 Jekyll）

**选择 Jekyll**（本项目不使用）

- ❌ 仅适用于 Jekyll 网站（Ruby 静态网站生成器）
- ❌ 会对文件进行 Jekyll 处理
- ❌ 不适用于 React/Vite 项目

---

## 本项目推荐配置

### ✅ 推荐：GitHub Actions

```
Source: GitHub Actions
```

**为什么选择这个**：
1. 项目使用 Vite 构建，需要先运行 `pnpm build`
2. 已配置自动部署工作流
3. 每次推送代码自动构建和部署
4. 无需手动操作

### 配置步骤

1. **将仓库设置为公开**（如果还没有）
   - Settings → 底部 Danger Zone → Change visibility → Make public

2. **启用 GitHub Pages**
   - Settings → Pages
   - Source: 选择 **GitHub Actions**
   - 保存

3. **推送代码触发部署**
   ```bash
   git push origin main
   ```

4. **查看部署状态**
   - 进入 **Actions** 标签
   - 查看工作流运行状态

5. **访问网站**
   - 部署成功后访问：`https://你的用户名.github.io/yinkun/`

---

## 常见问题

### Q: 我应该选择 Jekyll 还是 Static HTML？

**A**: 选择 **Static HTML**。本项目是使用 Vite 构建的 React 应用，不是 Jekyll 网站。

### Q: 为什么看不到 "GitHub Actions" 选项？

**A**: 可能的原因：
1. 仓库仍然是私有的（需要先设置为公开）
2. 需要先推送代码并创建 GitHub Actions 工作流文件
3. 刷新页面或清除缓存

### Q: 选择 "Deploy from a branch" 后应该选择哪个分支？

**A**: 
- 如果使用手动部署（`pnpm deploy`），选择 `gh-pages` 分支
- 如果直接部署 `main` 分支的 `dist` 文件夹，选择 `main` 分支和 `/dist` 文件夹

### Q: 项目中的 `.nojekyll` 文件是做什么的？

**A**: `.nojekyll` 文件告诉 GitHub Pages 不要使用 Jekyll 处理这个仓库。这对于使用现代构建工具（如 Vite、Webpack）的项目是必需的。

---

## 配置检查清单

- [ ] 仓库已设置为 Public（公开）
- [ ] 已选择正确的 Source（推荐：GitHub Actions）
- [ ] 如果选择 "Deploy from a branch"，已选择 "Static HTML"
- [ ] 代码已推送到 GitHub
- [ ] GitHub Actions 工作流已运行（如果使用 GitHub Actions）
- [ ] 网站可以正常访问

---

## 相关文件

- `.github/workflows/deploy.yml` - GitHub Actions 部署配置
- `.nojekyll` - 禁用 Jekyll 处理
- `vite.config.js` - 构建配置（base: '/yinkun/'）

