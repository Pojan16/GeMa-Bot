let handler = m => m

let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i
handler.before = function (m, { user, bot, groupMetadata }) {
  if (m.isBaileys && m.fromMe) return true
  let chat = global.db.data.chats[m.chat]
  let isGroupLink = linkRegex.exec(m.text)

  if (chat.antiLink && isGroupLink) {
    m.reply('*Sayonara, kamu akan di keluarkan dari group ini karena telah mengirim link group!*')
    if (user.isAdmin || user.isSuperAdmin) return m.reply('*Eits... Admin mah bebas yekan :v*')
    let participants = m.isGroup ? groupMetadata.participants : []
    let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {}
    if (bot.isAdmin || bot.isSuperAdmin) {
       this.groupRemove(m.chat, [m.sender])
    } else m.reply('*Bot bukan admin, tidak bisa keluarkan pengguna yang kirim link group*')
  }
  return true
}
handler.botAdmin = true
handler.admin = true
handler.group = true

module.exports = handler
