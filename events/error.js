const Discord = require("discord.js");
module.exports = async (client, error) => {
  client.logger.log(`An error event was sent by Discord.js: \n${JSON.stringify(error)}`, "error");
  message.channel.send(`An error event was sent by Discord.js: \n${JSON.stringify(error)}`, "error");
};