window.$ = window.jQuery = require('jquery');



getChannelDir = function (channelID, element) {
    channel = channels[channelID]

    $('.s-ul>li>button.is-selected').removeClass('is-selected');

    $(element).addClass('is-selected')
    $('.channel-title').text(channel.name)
}

