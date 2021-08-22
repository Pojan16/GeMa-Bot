let handler = m => {
    let msgs = global.db.data.msgs
    m.reply(`
*LIST PESAN*

${Object.keys(msgs).map(v => '- ' + v).join('\n')}
`.trim())
}
handler.help = ['msg'].map(v => 'list' + v)
handler.tags = ['nganu']
handler.command = /^list(msg)$/
handler.register = true

module.exports = handler