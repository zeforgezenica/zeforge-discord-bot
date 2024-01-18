const { Client, GatewayIntentBits, MessageAttachment } = require('discord.js');
const axios = require('axios');

// Create a new Discord client
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.GuildMessageTyping,
        GatewayIntentBits.DirectMessages,
        GatewayIntentBits.GuildScheduledEvents,
        GatewayIntentBits.MessageContent
    ]
});

// Event fired when the bot is ready
client.once('ready', () => {
    console.log('Bot is online!');
});


// Log in to Discord with your bot's token
client.login('MTE3Njk0NzMzNTY4NzgzMTU3Mg.GvLnJ3.DcqoviFHYsL58aEHKqPwz_Fs_ss8rCx0-GVfLI');