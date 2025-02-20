const { Telegraf } = require("telegraf");
const express = require("express");

const BOT_TOKEN = "ТВОЙ_ТОКЕН"; // Вставь сюда токен бота из BotFather
const WEBHOOK_URL = "https://artastproject8.vercel.app/webhook"; // Ссылка на твой хостинг

const bot = new Telegraf(7534066984:AAEqNJofSo8Fxky3m0en9MGV0aJsC0h9SEs);
const app = express();

// Устанавливаем webhook
app.use(express.json());
app.post("/webhook", (req, res) => {
  bot.handleUpdate(req.body);
  res.sendStatus(200);
});

// Команда /start
bot.start((ctx) => {
  ctx.reply("Добро пожаловать в ArtAst! Выберите действие:", {
    reply_markup: {
      inline_keyboard: [
        [{ text: "👥 Люди", callback_data: "people" }],
        [{ text: "🏛 Пространства", callback_data: "spaces" }],
        [{ text: "📅 События", callback_data: "events" }],
        [{ text: "✍️ Подать заявку", callback_data: "apply" }],
      ],
    },
  });
});

// Обработка нажатий на кнопки
bot.action("people", (ctx) => ctx.reply("Раздел с людьми: художники, фотографы, модели и т.д."));
bot.action("spaces", (ctx) => ctx.reply("Раздел с пространствами: фотостудии, арт-галереи и т.д."));
bot.action("events", (ctx) => ctx.reply("Раздел с событиями: афиши, анонсы и т.д."));
bot.action("apply", (ctx) => ctx.reply("Форма для подачи заявки: [Ссылка на Google Form]"));

app.listen(3000, () => {
  console.log("Сервер запущен на порту 3000");
});
