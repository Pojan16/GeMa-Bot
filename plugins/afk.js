let handler = async (m, { text }) => {
  let user = global.db.data.users[m.sender]
  user.afk = + new Date
  user.afkReason = text
  m.reply(`
*「AWAY FROM KEYBOARD」*

~>  ${conn.getName(m.sender)} IS NOW AFK!
~>  REASON ${text ? ': ' + text : ''}
`)
}
handler.help = ['afk [reason]']
handler.tags = ['main']
handler.command = /^afk$/i
handler.register = true

module.exports = handler
