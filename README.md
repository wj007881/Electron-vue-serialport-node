# LAAT
> 使用 Vue + Electron + node-serialport 实现的自动化测试管理系统,搭配客户端（https://github.com/wj007881/Remote_client）使用 
  A software for Auto Test implemented using Vue + Electron + node-serialport
## 项目地址
  [GitHub](https://github.com/wj007881/Electron-vue-serialport-node) | [Gitee](https://gitee.com/sise157/electron_laat)
## 功能特性
- [x] 基础串口通信
- [x] CMD命令执行
- [x] 测试预约管理
- [x] 远程Log下载
- [x] 文件传输
- [x] 保存/加载配置信息
- [x] 设备信息获取
- [ ] 版本更新
- [x] 运行时长统计
## 开发指南
> 本项目使用 Electron + Vue + Node-serialport 实现，以下步骤是 windows 操作系统环境配置步骤，1-5 步为安装 node-gyp ,其他操作系统请参考[官方教程](https://github.com/nodejs/node-gyp)
1. 安装 LTS 版 NodeJS
2. 安装 Python 2.7
3. 安装 Visitor Studio 2017 及更高版本(我使用的是 2019)
4. 执行 `npm install node-gyp -g`
5. 执行 `node-gyp list` 查看依赖是否全部安装
6. 执行 `git clone https://github.com/rymcu/nebula-helper.git`
7. 执行 `npm install`
8. 执行 `npm run electron:serve`  
## 项目截图
![image](https://user-images.githubusercontent.com/26053141/156504343-a88b1c27-93c6-415d-a4c0-3d5019092202.png)
## 鸣谢
- [Electron](https://github.com/electron/electron) :electron: Build cross-platform desktop apps with JavaScript, HTML, and CSS
- [Vue](https://github.com/vuejs/vue) 🖖 Vue.js is a progressive, incrementally-adoptable JavaScript framework for building UI on the web.
- [node-serialport](https://github.com/serialport/node-serialport) Access serial ports with JavaScript. Linux, OSX and Windows. Welcome your robotic JavaScript overlords. Better yet, program them!
- [vue-cli-plugin-electron-builder](https://github.com/nklayman/vue-cli-plugin-electron-builder) Easily Build Your Vue.js App For Desktop With Electron
"# nebula-iot-helper" 
- [Element-UI](https://element.eleme.cn/) Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库
- [nebula-helper](https://github.com/rymcu/nebula-helper) 使用 Vue + Electron + node-serialport 实现的现代串行端口调试助手
