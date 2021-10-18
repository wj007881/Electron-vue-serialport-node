const electron = require('electron')
var path = require('path');
var exePath = path.dirname(electron.app.getAppPath());
console.log(exePath);