require('dotenv').config()
const discord = require('discord.js')
const client = new discord.Client({intents: [discord.Intents.FLAGS.GUILD_MEMBERS]})