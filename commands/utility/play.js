const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('play')
		.setDescription('Tocar uma musica para acalmar os gados!'),
	async execute(interaction) {
		await interaction.reply('Tocando corno music');
	},
};