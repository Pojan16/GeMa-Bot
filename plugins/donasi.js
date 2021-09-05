let fetch = require ('node-fetch')
let handler = async (m, { conn }) => {
/*let thumb = './src/donasi.png'*/ // Ini hapus aja:v
let thumb = 'https://telegra.ph/file/01d53669c14ecfc440a73.jpg'
let donate = `
╭─「 Donasi • Pulsa 」
│ • Axis [083122808260]
│ • Indosat [085856430321]
│ • Nganu [https://linktr.ee/Zeroz04n]
╰────
╭─「 Donasi • Non Pulsa 」
│ • Gopay [Axis]
│ • Dana [Axis]
│ • Sedekah:v
╰────
╭─「 Info • Transaksi 」
│ • Kalian bisa tanyakan kepada
│ • #owner untuk mengetahui info
│ • Pembayaran tentang donasi bot!
╰────
Baca Doang Donasinya Mana? :v
`.trim() // Gak tau pengen beli rumah:v
conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), donate, 'Donasi gak akan buatmu miskin kawan:)', 'IYA INSYAALLAH', '/mention Tapi Yaudalah Gue Biarin', 'NGGAK', '/mention Halah Dajjal', m, true)
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
