//hayo ngapain 🐦
let handler = async (m, { conn, usedPrefix: _p }) => {
let zan = `
*[SIMPLE WHATSAPP BOT]*

//New feature, Anonymous chat is on the #menu!

=> *${_p}help* | *${_p}menu*
➥ Untuk Melihat Semua Menu!

=> *${_p}register*
➥ Untuk Daftar!

=> *${_p}profile*
➥ Untuk Cek Info Kamu!

=> *${_p}ping*
➥ Untuk Cek Kecepatan Bot!

=> *${_p}work*
➥ Bekerja Untuk Mendapatkan Item!

=> *${_p}shop*
➥ Untuk Membeli | Menjual Item Kamu!

=> *${_p}transfer*
➥ Untuk Transfer Item Kamu!

=> *${_p}main*
➥ Untuk Maining!

=> *${_p}claim*
➥ Untuk Claim Bonus Harian!

=> *${_p}math*
➥ Berhitung Untuk Mendapatkan XP!

=> *${_p}leaderboard*
➥ Untuk Cek Rank Tertinggi!

=> *${_p}referal*
➥ Untuk Mendapatkan Kode Referal Kamu!

=> *${_p}spin*
➥ Untuk Jackpot!

=> *${_p}asahotak* _(Features Using Apikey)_
➥ Untuk Asah Otak!

=> *${_p}family100* _(Features Using Apikey)_
➥ Untuk Permainan Pertanyaan!

=> *${_p}siapakahaku* _(Features Using Apikey)_
➥ Untuk Tebak tebakan!

=> *${_p}tebakgambar* _(Features Using Apikey)_
➥ Untuk Tebak gambar!

=> *${_p}tebakakata* _(Features Using Apikey)_
➥ Untuk Tebak kata!

=> *${_p}tictactoe*
➥ GAME Tictactoe!

=> *${_p}donasi*
➥ Untuk Pengoperasian B0T!

Fitur Lainnya Akan Tersedia Setelah Update.
Belajar Baca Biar Gak Malu²in!
`.trim()

conn.fakeReply(m.chat, zan, '0@s.whatsapp.net', 'Ini Menu Bot Balu ku Eh', 'status@broadcast')
}//yek gak isin a ngubah gon e wong🗿
handler.help = ['help']
handler.tags = ['main']
handler.command = /^help(menu)?$/i
handler.register = true

module.exports = handler