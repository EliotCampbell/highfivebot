const HighFiveBot = require('node-telegram-bot-api')//импорт пакета 

const token = '5900718432:AAHfhyW_qXEg33D_rdBwJai1lxdU_GaJSUc'

const bot = new  HighFiveBot(token, {polling: true}) //https://www.youtube.com/watch?v=slcqnHIFrj8&t=45s&ab_channel=UlbiTV

const startoptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'О боте', callback_data: '1'}, {text: 'Загрузить домашку', callback_data: '/addhomework'}]
        ]
    })
}

bot.setMyCommands([
        {command: '/start', description: 'Введи для запуска бота'},
        {command: '/info', description: 'О боте'},
        {command: '/addhomework', description: 'Добавить домашку в канал'},
    ]
)

bot.on( 'message', async (msg) => {

        const textofmessage = msg.text;
        const chatid = msg.chat.id;

        if (textofmessage ==='/start') {
            return bot.sendMessage( chatid, 'Привет! Я опубликую твою домашку в канале @HighFive_chn', startoptions)
        }
        if (textofmessage ==='/info') {
            await bot.sendMessage( chatid, 'Я добавляю домашку в канал. Сейчас в нем мало подписчиков, но тебе наверняка помогут))')
            return console.log(msg)
        }
        if (textofmessage ==='/addhomework') {
            return  bot.sendMessage( chatid, 'Скинь мне файл со своей домашкой. Пока что я могу публиковать только картинки или текст, но если подписчиков станет больше, то обещаю научиться публиковать и другие файлы')

        }
        else await bot.sendMessage( chatid, 'Пока я не умею отвечать на это(');
    }
)

bot.on('callback_query', async (msg) =>{

    const data = msg.data;
    const chatid = msg.message.chat.id;

    if (data === '/addhomework') {
        await bot.sendMessage( chatid, 'Прикрепи четкое фото или отправь текст своего задания');
        await bot.on('message: photo', (writephoto) => {
            return console.log(msg)
        })

    }
    else return console.log('Элсе',msg);
})

bot.