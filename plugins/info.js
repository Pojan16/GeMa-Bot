//hayo ngapain 🐦
let handler = async (m, { conn, usedPrefix: _p }) => {
let info = `
╭─ *「 INFORMASI WHATSAPP BOT 」*
│ 
│ ⚠️ Bot ini tidak berjalan 24jam❗
│ 
├ *「 dipersembahkan oleh: 」*
│ mi.com
├───────────────────
├ *「 disponsori oleh: 」*
│ android.com
│ https://linktr.ee/Zeroz04n
│ https://linktr.ee/CallMeMstm
│ https://wa.me/c/6285856430321
├───────────────────
├ *「 dibuat oleh: 」*
│ Nurutomo
│ Zeroz04n
├───────────────────
├ *「 Source code & Thanks to: 」*
│ https://github.com/Nurutomo/wabot-aq
│ https://api.xteam.xyz
│ and other Contributions
╰────

╭─ *「 FEATURE BOT! 」*
│ ╭────────
│ │ XP
│ │ COIN
│ │ LIMIT
│ │ ROLE
│ │ LEVEL
│ ╰────────
│ anti link group chat
│ anti bug group chat
│ anti bug troli message
│ anti virus text
│ automatic tendang!
│ automatic blocked _(if called)_
│ automatic banned _(if spam)_
│ islamic menu
│ game menu
│ anonymous chat seperti ditelegram
│ harian menu
│ database message & media command
│ jadi bot untuk pengguna (scan)
│ downloader menu
│ media & internet menu
│ 
│ and many more. in menu!
╰─────────────────────

╭─────────────────────
│ _Jangan menggunakan simbol-simbol_
│ _aneh supaya tidak terjadi error!_
│ 
│ _Semua command tanpa menggunakan tanda_
│ *<  >* _dan_ *[  ]*
╰─────────────────────

╭─────────────────────
│ Bot ini di buat dengan bahasa
│ pemrograman Node.js / JavaScript,
│ & Dijalankan menggunakan Termux.
╰─────────────────────

╭─────────────────────
│ Dan Selalu ingat bahwa bot ini
│ dalam proses pengembangan!
│ jadi diharapkan anda dapat memakluminya
│ jika bot terdapat banyak kekurangan.
├───────────────────
│ diperingatkan juga yang menggunakan
│ bot ini bukan hanya anda / grup anda
│ jadi saya memohon agar bersabar jika
│ terjadinya delay, Serta gunakan fitur
│ yang tersedia dengan seperlunya.
╰─────────────────────

╭─────────────────────
│ _Dukung kami dalam pembuatan BOT ini_
│ _agar lebih terupdate dan tahan lama_
│ _dengan melakukan donasi._
│ 
│ _donasi tidak akan membuatmu miskin kawan :)_
╰─────────────────────

╭─────────────────────
│ *Ingat.!!!*
│ Gunakan bahasa yang benar dan
│ sesuai apa yang ada di menu yang
│ sudah disiapkan.
╰─────────────────────


"Kesalahan 1 huruf saja bot tidak bisa menjawab."
`.trim()

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*PASANG IKLAN YUK KAK, MURAH LOOOH :)*', 'status@broadcast')
}//terserah lu aja gpp
handler.help = ['info']
handler.tags = ['info']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
