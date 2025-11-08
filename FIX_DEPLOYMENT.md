# 修复 GitHub Actions 部署问题

## 问题：pnpm-lock.yaml 错误

如果遇到以下错误：
```
ERR_PNPM_NO_LOCKFILE  Cannot install with "frozen-lockfile" because pnpm-lock.yaml is absent
```

## 解决方案

### 方案一：确保 pnpm-lock.yaml 被提交（推荐）

1. **检查 lockfile 是否存在**：
```bash
ls -la pnpm-lock.yaml
```

2. **检查是否被 Git 跟踪**：
```bash
git ls-files | grep pnpm-lock.yaml
```

3. **如果不存在或未跟踪，生成并提交**：
```bash
# 删除旧的 lockfile（如果存在）
rm pnpm-lock.yaml

# 重新安装依赖生成新的 lockfile
pnpm install

# 提交 lockfile
git add pnpm-lock.yaml
git commit -m "Add pnpm-lock.yaml"
git push
```

### 方案二：使用 --no-frozen-lockfile（临时方案）

工作流已更新为使用 `--no-frozen-lockfile`，这样即使没有 lockfile 也能安装依赖。

**注意**：这不是最佳实践，但可以快速解决问题。建议尽快提交 lockfile。

### 方案三：检查 .gitignore

确保 `.gitignore` 中没有忽略 `pnpm-lock.yaml`：

```bash
# 检查是否被忽略
git check-ignore pnpm-lock.yaml

# 如果没有输出，说明没有被忽略（这是正确的）
# 如果有输出，需要从 .gitignore 中移除相关规则
```

## 验证修复

1. **提交更改**：
```bash
git add .github/workflows/deploy.yml
git commit -m "Fix pnpm lockfile issue in CI"
git push
```

2. **检查 GitHub Actions**：
   - 进入仓库的 Actions 标签
   - 查看最新的工作流运行
   - 确认安装步骤成功

3. **验证部署**：
   - 等待部署完成
   - 访问：`https://znnan.github.io/web/`

## 最佳实践

1. **始终提交 lockfile**：
   - `pnpm-lock.yaml` 应该被提交到 Git
   - 这确保所有环境使用相同的依赖版本

2. **使用 frozen-lockfile 在 CI 中**：
   - 一旦 lockfile 被提交，可以改回 `--frozen-lockfile`
   - 这样可以确保 CI 环境与本地环境一致

3. **定期更新依赖**：
```bash
pnpm update
git add pnpm-lock.yaml
git commit -m "Update dependencies"
```

