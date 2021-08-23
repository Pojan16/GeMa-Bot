let handler = async (m, { conn }) => {
let pp = './src/donasi.png'
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
Ngetik Doang Donasinya Mana?
`.trim() // Tambah sendiri kalo mau
conn.send2Button(m.chat, pp, 'pp.jpg', donate, 'Donasi gak akan buatmu miskin kawan:)', 'IYA INSYAALLAH', '/mention Tapi Yaudalah Gue Biarin', 'NGGAK', '/mention Halah Dajjal')
}
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
