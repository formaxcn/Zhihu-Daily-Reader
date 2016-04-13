# 知乎日报 - 阅读器

知乎日报官方不提供 Web 版（网页版），你妹的，那就做一个吧。
> 离线：自动离线知乎日报（可配置），无法访问 Internet 时也能用啦。

> 快捷键：类似 Google Reader，`j/k/v/o/enter` 当然还有方向键，你懂的。

> 支持：`Firefox/Chrome/IE11`。没测 `Opera`，应该可以。

## 声明

> 本应用使用了知乎日报非正式公开 API，使用与共享之行为或有侵犯知乎权益的嫌疑，因此请自行部署使用，请您暸解相关情况，并遵守知乎协议。

## 介绍

- **后端**：`Node`、`Express`、`Jade`、`Mongodb`
- **前端**：`React`
- **打包**：`Webpack`

## 用法

*注：服务器端口默认**`8888`**，如果发生端口冲突，可在**`./config/default.json`**中自行修改。*

**1.clone from git:**

	$ git clone https://github.com/nonoroazoro/Zhihu-Daily-Reader.git

**2.install dependencies:**

    # 1. install node.js
	# https://nodejs.org

    # 2. install npm packages
	$ cd Zhihu-Daily-Reader && npm install --production

    # 3. install mongodb (可选。不装也没事，会自动关闭数据库相关功能)
    # https://www.mongodb.org/downloads
    # （可选）修改 ./config/default.json 爬虫（Crawler）配置。

**3.start app:**

- for **Windows**:

		# 方法1:
		$ npm start
        # 浏览器访问: http://localhost:8888 或 http://127.0.0.1:8888

		# 方法2:
		$ start.bat

- for **Linux&Mac**:

		$ npm start
        # 浏览器访问: http://localhost:8888 或 http://127.0.0.1:8888

## 更新历史

###<a href="#v1.1.4" id="v1.1.4">1.1.4</a>

2016年4月13日

- 添加键盘快捷键帮助。
- 嵌入的外链视频在 Firefox 中无法正常播放，原因可能是同源策略，待解决。


###<a href="#v1.1.3" id="v1.1.3">1.1.3</a>

2016年4月9日

- 修复正文内容外链出现重复的 bug。
- 修改正文内容外链，默认在新窗口打开。
- 前端全部迁到 ES6 + ES7 Stage-0。
- 更新 webpack 配置。
- 嵌入的外链视频目前还不能正常播放，待解决。


###<a href="#v1.1.2" id="v1.1.2">1.1.2</a>

2015年12月22日

- 修正启动脚本（Windows/Mac/Linux）。
- 修改默认端口为 8888。


###<a href="#v1.1.1" id="v1.1.1">1.1.1</a>

2015年12月15日

- 增加离线功能，无法访问 Internet 时也能用啦（需安装[Mongodb](https://www.mongodb.org/downloads)）。
- 离线功能可选，无需进行特殊设置（全自动）。
- 其他细节优化，不想列出来了。


###<a href="#v1.0" id="v1.0">1.0</a>

2015年8月14日

- 初版，包含知乎日报基本阅读功能。

## 截图

- **主界面**：
![主界面](./screenshots/1.jpg?raw=true "主界面")

- **阅读界面**：
![阅读界面](./screenshots/2.jpg?raw=true "阅读界面")