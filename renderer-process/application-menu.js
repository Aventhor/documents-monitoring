const customTitlebar = require('custom-electron-titlebar');
const { remote } = require('electron');

let titleBar = new customTitlebar.Titlebar({
    backgroundColor: customTitlebar.Color.fromHex('#202020'),
    icon: 'assets/img/icon.png'
});

// 3. Update Titlebar text
titleBar.updateTitle('Documents Monitoring');

const menu = new remote.Menu();

menu.append(new remote.MenuItem({
    label: 'Dev',
    submenu: [
        {
            label: 'Reload',
            click: () => remote.getCurrentWindow().reload(),
            accelerator: "CmdOrCtrl+R"
        },
        {
            label: 'Toggle Developer Tools',
            accelerator: (() => {
                if (process.platform === 'darwin') {
                    return 'Alt+Command+I'
                } else {
                    return 'Ctrl+Shift+I'
                }
            })(),
            click: (item, focusedWindow) => {
                if (focusedWindow) {
                    focusedWindow.toggleDevTools()
                }
            }
        },
    ]
}));

menu.append(new remote.MenuItem({
    label: 'Помощь',
    submenu: [
        {
            label: 'О программе',
            click: () => console.log('Click on subitem 1')
        },
        {
            type: 'separator'
        },
        {
            label: 'Проверить обновления',
            click: () => console.log('Click Cluck')
        }
    ]
}));



titleBar.updateMenu(menu);