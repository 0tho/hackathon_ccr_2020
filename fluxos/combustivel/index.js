const { sleep } = require("../../util");

const key = "Combustivel";

const init = (bot) => {
  bot.onText(new RegExp(`${key}`, "i"), main(bot));
};

const main = (bot) => async (msg, match) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, `Fluxo ${key}`);
};

module.exports = {
  key,
  init,
};