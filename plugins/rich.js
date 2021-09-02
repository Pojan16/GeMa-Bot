//ucapan terima kasih
let handler = async (m, { conn, usedPrefix: _p }) => {
let rich = `
Name | Donate

Name | Rental

Name | Premium

Name | Supporter

Name | Partner

and other...
`.trim()

conn.fakeReply(m.chat, rich, '0@s.whatsapp.net', 'Terimakasih telah mensupport bot kami', 'status@broadcast')
}//iyes
handler.help = ['crazyrich']
handler.tags = ['info']
handler.command = /^crazyrich$/i
handler.register = true

module.exports = handler
