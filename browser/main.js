const {app, BrowserWindow, Menu} = require('electron');

let mainWindow;

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function() {
    mainWindow = new BrowserWindow({width: 1024, height: 768 });
    mainWindow.loadURL('file://' + __dirname + '/browser.html');
    mainWindow.openDevTools();
    setupMenu();

    setTimeout(function() {
        console.log("registering will-prevent-unload for mainWindow.");
        mainWindow.webContents.addListener('will-prevent-unload', function(e) {
            console.log("mainWindow's will-prevent-unload called with e.preventDefault() working as expected...");
            e.preventDefault();
        });
    }, 2000);
});

function setupMenu() {
    const template = [
        {
          label: 'View',
          submenu: [
            {role: 'reload'},
            {role: 'forcereload'},
            {role: 'toggledevtools'}
          ]
        },
        {
          role: 'window',
          submenu: [
            {role: 'minimize'},
            {role: 'close'}
          ]
        }
    ]

    const menu = Menu.buildFromTemplate(template)
    Menu.setApplicationMenu(menu)
}