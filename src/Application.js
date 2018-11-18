let Bot = require('./services/telegram/Bot');
let http = require('./services/api/http');

module.exports = class Application {
    constructor() {
        this.init()
    }

    init() {
        this.bot = new Bot();

        setInterval(() => {
            http.getNewFilm().then((document) => {
                this.bot.sendPhoto(document.imgUrl).then(() => {
                    this.bot.sendMessage(this.createPost((document)));
                });
            });
        }, 79999999)
    }

    createPost(document){
        let rating = (100 * document.rating / 85) / 10;
        return document.name + '\n\n' +
            'Жанр - ' + document.genre + '\n\n' +
            'Рейтинг - ' + rating + '/10'+ '\n\n' +
            document.description;
    }
};
