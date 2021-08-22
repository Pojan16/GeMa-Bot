const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar didatabase bot\nMau daftar ulang? ${usedPrefix}unreg <serial number>`
  if (!Reg.test(text)) throw `Format salah!\n\nDaftar yang bener lah kak, udah gede masa gak bisa baca:/\n\nGunakan: *${usedPrefix}daftar namamu.umurmu*\nContoh: ${usedPrefix}daftar Manusia.15`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong, wajib berisikan huruf (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong, wajib berisikan nomor (Angka)'
  age = parseInt(age)
  if (age > 60) throw 'Umur terlalu tua ಥ‿ಥ'
  if (age < 6) throw 'Bayi bisa ngetik sesuai format bjier ._.'
  user.name = name
  user.age = age
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  let totalreg = Object.keys(global.db.data.users).length
  m.reply(`
REGISTERED SUCCESFULL!

───「 Verifikasi 」───
 ++
 + Nama: ${name}
 + Umur: ${age} tahun
 + SN: ${sn}
 
 Caption: _Star for this chat!_
───────────────────
Terima kasih telah melakukan verifikasi.
Total user terdaftar: ${totalreg}
Untuk menggunakan Bot, silahkan ketik #menu

*_- Zann_*
`.trim())
}
handler.help = ['daftar', 'register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['verify']
handler.command = /^(daftar|register)$/i

module.exports = handler

