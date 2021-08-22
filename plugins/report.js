// By RC047 :V

let handler = async(m, { conn, text }) => {
    if (!text) throw 'Silahkan masukkan laporan'
    if (text.length > 500) throw 'Maaf Teks Terlalu Panjang, Maksimal 500 Teks!'
    const laporan = `*「 REPORT 」*\nNomor : wa.me/${m.sender.split`@`[0]}\nPesan : ${text}`
    for (let jid of global.owner.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').filter(v => v != conn.user.jid && v != '0@s.whatsapp.net'))
    m.reply(laporan, jid)
    m.reply(laporan, m.sender) // Mwehehehehe
    m.reply('✔️Masalah telah di laporkan ke Pemilik Bot, laporan palsu/main² tidak akan ditanggapi!')
}
handler.help = ['report'].map(v => v + ' <laporan>')
handler.tags = ['info']
handler.command = /^(report)$/i
handler.limit = true

module.exports = handler
