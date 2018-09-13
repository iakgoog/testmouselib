// Modules to control application life and create native browser window
const electron = require('electron')
const {app, BrowserWindow, Menu} = electron
const winMouseEvent = require('win-mouse')
// const robot = require('robotjs')
// const Mouse = require('node-mouse');

// const m = new Mouse();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

function createWindow () {
  console.log('createWindow')
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  // mainWindow.webContents.openDevTools()

  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })

  mainWindow.setMenu(null)

  initMouseTracker()
  // sineMouse()
  // initMouse()
  const menu = Menu.getApplicationMenu()
  // console.log('menu = ')
  // console.log(menu)
  Menu.setApplicationMenu(null)
}

function sineMouse() {
  // Speed up the mouse.
  robot.setMouseDelay(1);

  var twoPI = Math.PI * 2.0;
  var screenSize = robot.getScreenSize();
  var height = (screenSize.height / 2) - 10;
  var width = screenSize.width;

  for (var x = 0; x < width; x++) {
    y = height * Math.sin((twoPI * x) / width) + height;
    robot.moveMouse(x, y);
  }
}

function initMouseTracker() {

  winMouseEvent.on('right-down', (x, y) => {
    console.log('right-down')
    // winMouseEvent.removeAllListeners(['right-down']);
    // winMouseEvent.destroy()

    // setTimeout(() => {
    //   winMouseEvent = new WinMouseModule()
    //   initMouseTracker()
    // }, 2000)
  })

  winMouseEvent.on('left-down', (x, y) => {
    console.log('left-down')
  })

  winMouseEvent.on('left-drag', (x, y) => {
    // console.log('left-drag', x, y)
  })

}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) {
    createWindow()
  }
})

// app.on('browser-window-created',function(e, window) {
//   window.setMenu(null);
// });

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
