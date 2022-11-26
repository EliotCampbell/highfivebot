const HighFiveBot = require('node-telegram-bot-api')//импорт пакета 

const token = '5900718432:AAHfhyW_qXEg33D_rdBwJai1lxdU_GaJSUc'

const bot = new  HighFiveBot(token, {polling: true}) //https://www.youtube.com/watch?v=slcqnHIFrj8&t=45s&ab_channel=UlbiTV

const gameOptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: '1', callback_data: '1'}, {text: '2', callback_data: '2'}, {text: '3', callback_data: '3'}],
            [{text: '4', callback_data: '4'}, {text: '5', callback_data: '5'}, {text: '6', callback_data: '6'}],
            [{text: '7', callback_data: '7'}, {text: '8', callback_data: '8'}, {text: '9', callback_data: '9'}],
            [{text: '0', callback_data: '0'}],
        ]
    })
}

bot.setMyCommands([
        {command: '/start', description: 'Введи для запуска бота'},
        {command: '/info', description: 'О боте'},
        {command: '/addhomework', description: 'Добавить домашку в канал'},
    ]
)
//ggggg
bot.on( 'message', (msg) => {
        const textofmessage = msg.text;
        const chatid = msg.chat.id;

        if (textofmessage ==='/start') {
            bot.sendMessage( chatid, 'Привет! Я опубликую твою домашку в канале @HighFive_chn')
        }
        if (textofmessage ==='/info') {
            bot.sendMessage( chatid, 'Введи /addhomework, чтобы добавить домашку')
        }
        if (textofmessage ==='/addhomework') {
            bot.sendMessage( chatid, 'Введи /addmework, чтобы добавить домашку', gameOptions)
        }
        else bot.sendMessage( chatid, 'Пока я не умею отвечать на это(');
    }
)
