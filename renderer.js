// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

// const remote = require('electron').remote
// const $ = require('dombo')

// let wX;
// let wY;
// let dragging = false;

// $('.titlebar').on('mousedown', e => {
//   dragging = true;
//   wX = e.pageX;
//   wY = e.pageY;
// });

// $(window).on('mousemove', e => {
//   e.stopPropagation();
//   e.preventDefault();
//   if (dragging) {
//       var xLoc = e.screenX - wX;
//       var yLoc = e.screenY - wY;

//       try {
//           remote.BrowserWindow.getFocusedWindow().setPosition(xLoc, yLoc);
//       } catch (err) {
//           console.log(err);
//       }
//   }
// });

// $(window).on('mouseup', () => {
//   dragging = false;
// });

const remote = require('electron').remote;
const { dialog } = remote;
const BrowserWindow = remote.BrowserWindow;

var dialogButton = document.getElementById('popup-dialog');
var winButton = document.getElementById('popup-win');

dialogButton.addEventListener('click', () => {
  dialog.showOpenDialog({properties: ['openFile', 'openDirectory', 'multiSelections']})
});

winButton.addEventListener('click', () => {
  var win = new BrowserWindow({ width: 800, height: 600 });
  win.webContents.on('did-finish-load', ()=>{
    win.show();
    win.focus();
  });
  win.loadURL('https://tr.com');
});