
let channels = []

addChannel = function (channel) {
    channels.push(channel);
}

removeChannel = function (channel) {
    channels.splice(channel, 1)
}

getAllChannels = function () {
    return channels;
}

clearChannelsList = function () {
    channels.length = 0;
}