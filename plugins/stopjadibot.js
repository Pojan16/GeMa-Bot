let handler  = async (m, { conn }) => {
  if (global.conn.user.jid == conn.user.jid) conn.reply(m.chat, 'Kenapa nggak langsung ke terminalnya?', m)
  else {
    await conn.reply(m.chat, 'Goodbye bot :)', m)
    conn.close()
  }
}
handler.help = ['stop']
handler.tags = ['jadibot']
handler.command = /^(stop)$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false
handler.register = true

handler.fail = null

module.exports = handler

