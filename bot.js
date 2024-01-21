const { Client, GatewayIntentBits, MessageAttachment } = require('discord.js');
// const axios = require('axios');
require('dotenv').config();

// Create a new Discord client
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageTyping,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.GuildScheduledEvents,
    GatewayIntentBits.MessageContent,
  ],
});

// Event fired when the bot is ready
client.once('ready', () => {
  console.log('Bot is online!');
});

// Log in to Discord with your bot's token
client.login(process.env.DISCORD_TOKEN);
