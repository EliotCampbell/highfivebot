const HighFiveBot = require('node-telegram-bot-api')//импорт пакета 

const token = '5900718432:AAHfhyW_qXEg33D_rdBwJai1lxdU_GaJSUc'

const bot = new  HighFiveBot(token, {polling: true}) //https://www.youtube.com/watch?v=slcqnHIFrj8&t=45s&ab_channel=UlbiTV

//COMMANDS
bot.setMyCommands([
        {command: '/start', description: 'Введи для запуска бота'},
    ]
)
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
        try {
            bot.onText(/\/start/,  (msg) => {
                const chatId = msg.chat.id;
                bot.sendMessage( chatId, 'Привет! Я опубликую твою домашку в канале @HighFive_chn', startoptions)
                bot.on('callback_query', (msg) => {
                    console.log('ЛОГ!!!!!!msg')
                    console.log(msg)
                    const messageData = msg.data
                    if (messageData === '/addhomework') {
                        console.log(msg)
                        console.log(chatId)
                        bot.sendMessage(chatId, 'Пришли мне текст задания или его фото в хорошем качестве')
                        bot.on('photo',   (msg) =>{
                            console.log('ХУЙ1!!!!11!')
                            console.log(msg)
                            const photo = msg.photo[2].file_id
                            bot.sendPhoto(chatId, photo)
                            return
                        })
                        return
                    } else
                        bot.sendMessage(chatId, `Я тебя не понимаю`)
                    return
                })
                return
            })

        } catch (e) { return bot.sendMessage(chatId, 'Произошла какая то ошибочка!)'); }
}


const startPanel = (msg) => {
    bot.on('callback_query', (msg) => {
        const messageData = msg.data
        if (messageData === '/addhomework') {
            console.log(msg)
            console.log(chatId)
            addhomework()
            return
        } else
            bot.sendMessage(chatId, `Я тебя не понимаю`)
        return
    })
}


const addhomework = () => {
    bot.sendMessage(chatId, 'Пришли мне текст задания или его фото в хорошем качестве')
    bot.on('photo',   (msg) =>{
        console.log('ХУЙ1!!!!11!')
        console.log(msg)
        const photo = msg.photo[2].file_id
        bot.sendPhoto(chatId, photo)
        return
    })
    return
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

