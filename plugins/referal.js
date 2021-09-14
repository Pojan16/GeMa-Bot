const crypto = require('crypto')

const coin_first_time = 2500
const coin_link_creator = 15000
const coin_bonus = {
    5: 40000,
   10: 100000,
   20: 250000,
   50: 1000000,
  100: 10000000,
}

let handler = async (m, { conn, usedPrefix, text }) => {
  let users = global.db.data.users
  if (text) {
    if ('ref_count' in users[m.sender]) throw 'Tidak bisa menggunakan kode referal!'
    let link_creator = (Object.entries(users).find(([, { ref_code }]) => ref_code === text.trim()) || [])[0]
    if (!link_creator) throw '*Kode referal tidak valid*'
    let count = users[link_creator].ref_count++
    let extra = coin_bonus[count] || 0
    users[link_creator].coin += coin_link_creator + extra
    users[m.sender].coin += coin_first_time
    users[m.sender].ref_count = 0
    m.reply(`
Congrats!🥳
+ ${coin_first_time} coin
`.trim())
    m.reply(`
Seseorang telah menggunakan kode referal kamu
+ ${coin_link_creator + extra} coin
`.trim(), link_creator)
  } else {
    let code = users[m.sender].ref_code = users[m.sender].ref_code || new Array(11).fill().map(() => [...'0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'][crypto.randomInt(62)]).join('')
    users[m.sender].ref_count = users[m.sender].ref_count ? users[m.sender].ref_count : 0
    let command_text = `${usedPrefix}ref ${code}`
    let command_link = `wa.me/${conn.user.jid.split('@')[0]}?text=${encodeURIComponent(command_text)}`
    let share_text = `
Dapatkan ${coin_first_time} coin untuk yang menggunakan link/kode referal dibawah ini!

Referal Code: *${code}*

${command_link}
`.trim()
    m.reply(`
Dapatkan ${coin_link_creator} coin untuk setiap pengguna baru yang menggunakan kode referal kamu!
*${users[m.sender].ref_count}* orang telah menggunakan kode referal kamu

Kode referal kamu: *${code}*

Bagikan link kepada temanmu: ${command_link}

atau kirim pesan kepada teman wa.me/?text=${encodeURIComponent(share_text)}

${Object.entries(coin_bonus).map(([count, coin]) => `${count} Orang = Bonus ${coin} coin`).join('\n')}
`.trim())
  }
}
handler.help = ['referal <code>']
handler.tags = ['hari']
handler.command = /^(ref(eral)?)$/i

handler.register = true
handler.limit = true

module.exports = handler
