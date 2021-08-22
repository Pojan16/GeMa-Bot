let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, text}) => {
    if (!text) throw 'Kamu mau unbanned siapa?'
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw 'Tag salah satu peserta!'
    let users = global.db.data.users
    users[who].banned = false
    conn.reply(m.chat, `Berhasil unbanned`, m)
}
handler.help = ['unban']
handler.tags = ['owner']
handler.command = /^unban$/i
handler.mods = true

module.exports = handler
