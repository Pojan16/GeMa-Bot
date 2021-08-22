const { createHash } = require('crypto')
let handler = async function (m, { args }) {
  if (!args[0]) throw 'Serial Number kosong'
  let user = global.db.data.users[m.sender]
  let sn = createHash('md5').update(m.sender).digest('hex')
  if (args[0] !== sn) throw 'Serial Number Salah'
  user.registered = false
  m.reply(`Unreg Berhasil!`)
}
handler.help = ['', 'ister'].map(v => 'unreg' + v + ' <serial number>')
handler.tags = ['verify']

handler.command = /^unreg(ister)?$/i
handler.register = true

module.exports = handler

