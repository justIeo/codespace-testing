const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('test')
        .setDescription('cool testy thingy'),
    async execute(interaction) {
        interaction.reply('omg it work!')
    }
}