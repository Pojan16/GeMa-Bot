//ucapan terima kasih
let handler = async (m, { conn, usedPrefix: _p }) => {
let rich = `
Ikky Prasz | Donate

Ical Mamonto | Donate

Aditya Candra | Donate

Satritama | Rental

Nelbi yufi | Premium

Fahri | Rental

Gusti | Donate

Shyees | Rental

Ahmad Zulfikar | Supporter

Wahyu Hilber | Partner

and other...
`.trim()

conn.fakeReply(m.chat, rich, '0@s.whatsapp.net', 'Terimakasih telah mensupport bot kami', 'status@broadcast')
}//iyes
handler.help = ['crazyrich']
handler.tags = ['info']
handler.command = /^crazyrich$/i
handler.register = true

module.exports = handler
