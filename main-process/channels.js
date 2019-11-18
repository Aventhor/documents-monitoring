
let channels = []

addChannel = function (channel) {
    channels.push(channel);
    console.log(channels)
}

removeChannel = function (channel) {
    channels.splice(channel, 1)
}

getChannels = function () {
    return channels;
}