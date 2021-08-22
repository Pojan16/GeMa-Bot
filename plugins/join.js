let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i

let handler = async (m, { conn, text }) => {
    let [_, code] = text.match(linkRegex) || []
    if (!code) throw 'Link invalid'
    let res = await conn.acceptInvite(code)
    m.reply(`Berhasil join grup ${res.gid}`).then(() => {
        var jumlahHari = 86400000 * 0.25
        var now = new Date() * 1
        if (now < global.db.data.chats[m.chat].expired) global.db.data.chats[m.chat].expired += jumlahHari
        else global.db.data.chats[m.chat].expired = now + jumlahHari
    })
    conn.reply(res.gid, `
*${conn.user.name}* _adalah Robot WhatsApp_
_yang diundang oleh @${m.sender.split`@`[0]}_

_Ketik_ *#menu* _Untuk menampilkan menu_
_Untuk support silahkan ketik_ *#donasi*
`.trim(), null, { contextInfo: { mentionedJid: [m.sender] } })
}
handler.help = ['join <chat.whatsapp.com>']
handler.tags = ['prem']

handler.command = /^join$/i
handler.premium = true
handler.register = true

module.exports = handler