let { spawn }  = require('child_process');
let handler  = async (m, { conn }) => {
  if (!process.send) throw 'Akses Ditolak!\nJalankan Bot dengan teks\n\n*$ node index.js*'
  if (global.conn.user.jid == conn.user.jid) {
    await m.reply('Sedang Mereset Bot...\nMohon tunggu sekitar 1 menit')
    await global.db.write()
    process.send('reset')
    await m.reply('Done!')
  } else throw '_eeeiiitttsss..._'
}
handler.help = ['reset']
handler.tags = ['host']
handler.command = /^reset$/i
handler.owner = false
handler.mods = true
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

