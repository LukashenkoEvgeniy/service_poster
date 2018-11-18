const config = require("../../config/config");
const TelegramBot = require('node-telegram-bot-api');

class Bot {

    constructor() {
        this.bot = new TelegramBot(config.TELEGRAM_TOKEN, {polling: true});
        console.info("Bot started");
    }


    sendMessage(text) {
        // const opts = {
        //     reply_markup: {
        //         inline_keyboard: [
        //             ['Yes, you are the bot of my life ❤'],
        //             ['No, sorry there is another one...']
        //         ]
        //     })
        // }

        this.bot.sendMessage(config.CHAT_ID, text)
            .then((result) => {console.info(result.message_id)})
            .catch((e) => {console.error(e)});
    }

    sendPhoto(url){
        return this.bot.sendPhoto(config.CHAT_ID, url);
    }

}

module.exports = Bot;