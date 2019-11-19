const { ipcRenderer } = require('electron');
window.$ = window.jQuery = require('jquery');


channels = []

ipcRenderer.send('channels-load');

ipcRenderer.on('channels-load', (event, channels) => {
    loadChannels(channels)
})


function loadChannels(channels) {

    this.channels = channels
    console.log(channels)

    ul_Element = '.s-ul'

    $(ul_Element).empty();

    Array.from(channels).forEach((item, index) => {

        channel = `<li><button onclick="getChannelDir(${index}, this)">${index + 1}</button></li>`

        $('.s-ul').append(channel)
    })
}