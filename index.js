const HighFiveBot = require('node-telegram-bot-api')//импорт пакета 

const token = '5900718432:AAHfhyW_qXEg33D_rdBwJai1lxdU_GaJSUc'

const bot = new  HighFiveBot(token, {polling: true}) //https://www.youtube.com/watch?v=slcqnHIFrj8&t=45s&ab_channel=UlbiTV

//const channelId = -1001879094761
const channelId = 241094083

//KEYBOARD OPTIONS
const startoptions = {
    reply_markup: JSON.stringify({
        inline_keyboard: [
            [{text: 'О боте', callback_data: '/info'}, {text: 'Загрузить домашку', callback_data: '/addhomework'}]
        ]
    })
}
//START
const start = () => {

    bot.on('message', (msg) => {
        const text = msg.text
        const chatId = msg.chat.id

            if (text === '/start') {
                return bot.sendMessage(chatId, 'Привет! Я опубликую твою домашку в канале @HighFive_chn', startoptions)
            }
            return bot.sendMessage(chatId, 'Выбери нужное действие ✍', startoptions);

    })

    bot.on('callback_query', (msg) => {
        const messageData = msg.data
        const chatId = msg.message.chat.id;
        if (messageData === '/info') {
            return bot.sendMessage(chatId, 'Даю инфу как пользоваться')
        }
        if (messageData === '/addhomework') {
            return addhomework(chatId)
        }
        return bot.sendMessage(chatId, 'Ошибка в коллбеке')
    })
}

const addhomework = async (chatId) => {
    await bot.sendMessage(chatId, 'Пришли мне текст задания или его фото в хорошем качестве')

     bot.on('photo', async (msg) => {
        const photo = msg.photo[2].file_id
        await bot.sendPhoto(channelId, photo)
        return bot.sendMessage(chatId, 'Функция в разработке')
    })

}

 start()







//bot.on('message',)


/*
    /*bot.answerInlineQuery(data, async (msg) => {
        bot.sendMessage( chatid, 'Пришли мне текст задания или его фото в хорошем качестве')
    console.log(msg)
    })
});
bot.on( 'message', async (msg) => {

        const textofmessage = msg.text;
        const chatid = msg.chat.id;

        if (textofmessage ==='/start') {
            return bot.sendMessage( chatid, 'Привет! Я опубликую твою домашку в канале @HighFive_chn', startoptions)
        }
        if (textofmessage ==='/info') {
            return bot.sendMessage( chatid, 'Я добавляю домашку в канал. Сейчас в нем мало подписчиков, но тебе наверняка помогут))')
        }
        if (textofmessage ==='/addhomework') {
            return  bot.sendMessage( chatid, 'Скинь мне файл со своей домашкой. Пока что я могу публиковать только картинки или текст, но если подписчиков станет больше, то обещаю научиться публиковать и другие файлы')

        }
        else return  bot.sendMessage( chatid, 'Пока я не умею отвечать на это(');
    }
)

bot.on('callback_query', async (msg) =>{

    let data = msg.data;
    let chatid = msg.message.chat.id;

    await console.log(msg)
    if (data === '/addhomework') {
        await bot.sendMessage( chatid, 'Прикрепи четкое фото или отправь текст своего задания');
        bot.on('message', (msg) =>{

            bot.sendPhoto(-1001879094761, 'AgACAgIAAxkBAAIBAAFjg667hjKFiKFCuSDVLGMnjpi1iQAC-MIxG2WRGEiZq22Of1D9vgEAAwIAA3MAAysE');
        })

    }
    else return console.log('Элсе',msg);
})*/

