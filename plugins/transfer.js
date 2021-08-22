let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix }) => {
  if (args.length < 3) {
    return conn.reply(m.chat, `Gunakan: ${usedPrefix}transfer <item> <jumlah> <@tag>\nContoh: *${usedPrefix}transfer coin 50 @tag*`.trim(), m)
  } else try {
    let type = (args[0] || '').toLowerCase()
    let count = args[1] && args[1].length > 0 ? Math.min(9999999, Math.max(parseInt(args[1]), 1)) : Math.min(1)
    let who = m.mentionedJid ? m.mentionedJid[0] : (args[2].replace(/[@ .+-]/g, '').replace(' ', '') + '@s.whatsapp.net')
        if(!m.mentionedJid || !args[2]) throw 'Tag salah satu pengguna, atau ketik Nomernya! menggunakan 628...'
    let users = global.db.data.users
    switch (type) {
      case 'coin':
        if (global.db.data.users[m.sender].coin >= count * 1) {
          try {
            global.db.data.users[m.sender].coin -= count * 1
            global.db.data.users[who].coin += count * 1
            conn.reply(m.chat, `Berhasil mentransfer coin sebesar ${count}`.trim(), m)
          } catch (e) {
            global.db.data.users[m.sender].coin += count * 1
            m.reply('Gagal Mentransfer')
            console.log(e)
          }
        } else conn.reply(m.chat, 'coin kamu tidak cukup untuk mentransfer'.trim(), m)
     break
      case 'exp':
        if (global.db.data.users[m.sender].exp >= count * 1) {
          try {
            global.db.data.users[m.sender].exp -= count * 1
            global.db.data.users[who].exp += count * 1
            conn.reply(m.chat, `Berhasil mentransfer exp sebesar ${count}`.trim(), m)
          } catch (e) {
            global.db.data.users[m.sender].exp += count * 1
            m.reply('Gagal Mentransfer')
            console.log(e)
          }
        } else conn.reply(m.chat, 'exp kamu tidak cukup untuk mentransfer'.trim(), m)
     break
      case 'limit':
        if (global.db.data.users[m.sender].limit >= count * 1) {
          try {
            global.db.data.users[m.sender].limit -= count * 1
            global.db.data.users[who].limit += count * 1
            conn.reply(m.chat, `Berhasil mentransfer limit sebesar ${count}`.trim(), m)
          } catch (e) {
            global.db.data.users[m.sender].limit += count * 1
            m.reply('Gagal Mentransfer')
            console.log(e)
          }
        } else conn.reply(m.chat, 'limit kamu tidak cukup untuk mentransfer'.trim(), m)
     break
 default:
     return conn.reply(m.chat, `Gunakan: ${usedPrefix}transfer <item> <jumlah> <@tag>\ncontoh: *${usedPrefix}transfer coin 50 @tag*\n\n*Item yang bisa di transfer*\nCoin\nExp\nLimit`.trim(), m)
     }
 } catch (e) {
     conn.reply(m.chat, `Format yang anda gunakan salah\n\nGunakan format ${usedPrefix}transfer <item> <jumlah> <@tag>\ncontoh penggunaan: *${usedPrefix}transfer coin 5 @tag*`.trim(), m)
     console.log(e)
 }
}
handler.help = ['transfer <args>']
handler.tags = ['hari']
handler.command = /^transfer$/i
handler.register = true

module.exports = handler