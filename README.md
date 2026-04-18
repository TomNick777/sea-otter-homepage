# 海獭主页 (Sea Otter Homepage)

一个简约高级的个人导航主页，使用 GitHub Gist 存储数据，支持多端同步。

![Preview](https://img.shields.io/badge/预览-海獭主页-blue)

## ✨ 特性

- 🎨 **简约高级设计** - 深色主题，大量留白，精致的动效
- ⏰ **实时时钟** - 超大数字显示，日期星期
- 🔍 **多引擎搜索** - Google / 百度 / Bing 快速切换
- 📱 **快捷方式管理**
  - 拖拽排序
  - 右键编辑/删除
  - 自动识别网站图标
  - 始终显示新增卡片
- ☁️ **GitHub 云同步** - 数据存储在你的 GitHub Gist，多端登录
- 🔒 **安全可靠** - Token 仅存储在本地，GitHub 原生认证
- 📦 **一键部署** - GitHub Pages 自动部署

## 🚀 快速部署

### 1. Fork 本仓库

点击右上角 **Fork** 按钮复制本仓库。

### 2. 启用 GitHub Pages

1. 进入仓库 **Settings** → **Pages**
2. Source 选择 **Deploy from a branch**
3. Branch 选择 **gh-pages**，目录选择 **/(root)**
4. 点击 Save

### 3. 访问你的主页

```
https://你的用户名.github.io/sea-otter-homepage/
```

## 🔐 配置 GitHub 云同步

### 1. 创建 GitHub Token

1. 访问 [GitHub Settings](https://github.com/settings/tokens)
2. 点击 **Generate new token** (classic)
3. 设置名称（如：`sea-otter-homepage`）
4. 勾选权限：**gist**
5. 点击 **Generate token**
6. **复制 Token**（只显示一次！）

### 2. 在主页配置

1. 打开你的主页
2. 点击右上角 **⚙ 设置** 按钮
3. 粘贴你的 GitHub Token
4. 点击 **保存**

系统会自动创建 Gist 并同步数据。

### 3. 多端登录

在其他设备上打开主页，点击 **⚙ 设置**，粘贴相同的 GitHub Token 即可自动同步数据。

## 📱 使用说明

| 操作 | 桌面端 | 移动端 |
|------|--------|--------|
| 打开链接 | 左键点击卡片 | 点击卡片 |
| 拖拽排序 | 按住卡片拖拽 | 长按后拖拽 |
| 编辑/删除 | 右键卡片 | 长按卡片 |
| 新增 | 点击"+"卡片 | 点击"+"卡片 |
| 同步设置 | 点击 ⚙ 设置 | 点击 ⚙ 设置 |

## 🔄 同步状态

右上角显示实时同步状态：
- 🟢 **已同步** - 云端同步正常
- 🔵 **同步中...** - 正在上传数据
- 🔴 **同步失败** - Token 无效或网络问题
- **本地模式** - 未配置云同步

## 📁 项目结构

```
sea-otter-homepage/
├── index.html          # 主页面（包含所有代码）
├── .github/
│   └── workflows/
│       └── deploy.yml  # 自动部署配置
└── README.md
```

## 🔧 自定义默认快捷方式

编辑 `index.html` 中的 `defaultShortcuts` 数组：

```javascript
const defaultShortcuts = [
    { name: 'GitHub', url: 'https://github.com', icon: 'github', color: '#fff' },
    { name: '哔哩哔哩', url: 'https://bilibili.com', icon: 'bilibili', color: '#fb7299' },
    // 添加更多...
];
```

### 支持的图标

内置图标：github, bilibili, zhihu, youtube, twitter, notion, figma, vercel, link

## 🔒 安全说明

- GitHub Token 仅存储在浏览器 localStorage 中
- Token 权限仅限 Gist，无法访问其他仓库
- 请勿将 Token 提交到代码仓库
- 如 Token 泄露，在 GitHub 设置中撤销即可

## 📄 许可证

MIT License - 欢迎开源和二次开发！

---

Made with ❤️ by Sea Otter
