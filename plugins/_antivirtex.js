let handler = m => m
//ngoding otodidak, bantu rapihin lah bang:/
let linkRegex = /؋.ᄻ.ྜྷ.ᇸ.ྙ|ผิดุท้่เึางืผิดุท้่เึางื|๒๒๒๒๒๒๒๒|৭৭৭৭৭৭৭৭|๑๑๑๑๑๑๑๑|๖ۣۜy๖ۣۜF๖ۣۜr๖/i
handler.before = function (m, { conn, text, user, groupMetadata }) {
  let chat = global.db.data.chats[m.chat]
  let isGroupVirtex = linkRegex.exec(m.text)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let username = conn.getName(who)
  let mentionedJid = [m.sender]//bang rapihin
  let users = m.sender//yaelah
  
  if (chat.antiVirtex && isGroupVirtex) {
    m.reply(`•   Wadoeh Panik Aku Ges:v   •\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n*「 ANTI VIRUS TEXT 」*\n\nTerdeteksi *${username}* _sepertinya_ mengirim virus text!\nMaaf Kamu akan dikeluarkan dari grup ini!\n\n\n*JANGAN SCROLL KEATAS! HAPUS CHAT INI AGAR TIDAK TERJADI BUG!*`)//mwehehehe
    if (user.isAdmin || user.isSuperAdmin) return m.reply('*Duh... adminya kok gini sih-_-*')//yg ini baper trus keluar
    let participants = m.isGroup ? groupMetadata.participants : []
    let bot = m.isGroup ? participants.find(u => u.jid == this.user.jid) : {}//tapi boong hayuk
    if (bot.isAdmin || bot.isSuperAdmin) {
      this.groupRemove(m.chat, [users])
    } else m.reply('*Bot bukan admin, tidak bisa keluarkan pengguna yang kirim virus text*')
  }//awikwok:V
  return true
  this.reply(global.owner[0] + '@s.whatsapp.net', `
Celeng ngirim virtex @${m.sender.split`@`[0]}
ID: ${m.isGroup ? m.chat : m.sender}
Nama: ${m.isGroup ? this.getName(m.chat) : this.getName(m.sender)}
`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
}
handler.botAdmin = true
handler.admin = true
handler.group = true
//buatan ozan ini🗿, oke?
module.exports = handler
