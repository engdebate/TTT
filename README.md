# ChatGPT Canvas to GitHub Pages

這個 repository 已經是可直接部署到 GitHub Pages 的靜態網站（`index.html` + `style.css` + `script.js`）。

## 已完成設定

- 已加入 GitHub Actions workflow：`.github/workflows/deploy-pages.yml`
- push 到 `main` 或 `work` 分支會自動部署到 GitHub Pages

## 使用方式

1. 把這個 repo 推到你的 GitHub（例如 `main` 分支）。
2. 到 GitHub repository → **Settings** → **Pages**。
3. 在 **Build and deployment** 裡選擇 **Source: GitHub Actions**。
4. 再次 push 一次（或手動觸發 Actions），等待 workflow 完成。
5. 網址會是：`https://<你的帳號>.github.io/<repo名稱>/`

## 檔案結構

- `index.html`
- `style.css`
- `script.js`
- `images/`
