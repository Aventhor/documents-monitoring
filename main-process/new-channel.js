const { ipcMain, dialog } = require('electron');

ipcMain.on('open-file-dialog', (event, valueEvent) => {
    dialog.showOpenDialog(
        {
            properties: ['openDirectory']
        }
    ).then(
        (dir) => event.sender.send(`selected-${valueEvent}-directory`, dir.filePaths)
    )
})

ipcMain.on('add-channel', (event, channel) => {
    addChannel(channel);
    data = getAllChannels()
    event.sender.send('channels-load', data);
    writeDBFile(data);
})
