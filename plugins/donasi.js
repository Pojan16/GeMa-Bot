let handler = async m => m.reply(`
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
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi Halo sultan:)']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
