const { Telegraf } = require('telegraf');

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.start((ctx) => ctx.reply(`Hello. \nMy name Serverless Hello Teleram Bot \nI'm working on Cloud Function in the Yandex.Cloud.`))
bot.help((ctx) => ctx.reply(`Hello, ${ctx.message.from.username}.\nI can say Hello and nothing more`))
bot.on('text', (ctx) => {
    ctx.reply(`Hello, ${ctx.message.from.username}`);

});

module.exports.handler = async function (event, context) {
    const message = JSON.parse(event.body);
    await bot.handleUpdate(message);
    return {
        statusCode: 200,
        body: '',
    };
};
