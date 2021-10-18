import { app, BrowserWindow,Menu, screen  } from 'electron'
import '../renderer/store'
import sudo from 'sudo-prompt';
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')

}

const path = require('path')

const log = require('electron-log')
const fs = require('fs');
const ip = require('ip');
const express = require('express')
const exp = express()
const port = 3000
const si = require('systeminformation');
const usbDetect = require('usb-detection');
usbDetect.startMonitoring();
const usb = require('usb')
const process_path = process.resourcesPath;
console.log = log.log
global.log = log.log;
global.ip = ip;
global.fs = fs;
global.exp = exp;
global.sudo=sudo;
global.process_path=process_path;
global.path=path;


exp.get('/', (req, res) => {
  res.send('Hello World!')
})
exp.get('/screen_info', (req, res) => {
  (si.graphics()
  .then(data => res.send(data))
  .catch(error => res.send(error))
  )
})
exp.get('/screen_info2', (req, res) => {
  const displays = screen.getAllDisplays()
  const externalDisplay = displays.find((display) => {
    return display.bounds.x !== 0 || display.bounds.y !== 0
  })
})
exp.get('/get_battery',(req,res)=>{
  (si.battery()
  .then(data => res.send(data))
  .catch(error => res.send(error))
  )
})
exp.get('/device_info1', (req, res) => {
  si.usb().then(data => {
    res.send(data);
  })
  .catch(error => console.error(error));

})
exp.get('/device_info2', (req, res) => {
  usbDetect.find(function(err, devices) { res.send(devices) });

  })
exp.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

function createWindow () {
  /**
   * Initial window options
   */
  Menu.setApplicationMenu(null)
  BrowserWindow.addDevToolsExtension('node_modules/vue-devtools/vender')
  mainWindow = new BrowserWindow({
    height: 650,
    useContentSize: true,
    width: 500,
    resizable: true,
    webPreferences: {
        // Use pluginOptions.nodeIntegration, leave this alone
        // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
        // nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION
        nodeIntegration: true,
        nodeIntegrationInWorker: true,
        // preload: path.join(__dirname,'./preload.js')
    },
  })
  mainWindow.loadURL(winURL)
  
  mainWindow.on('closed', () => {
    mainWindow = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})

/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
