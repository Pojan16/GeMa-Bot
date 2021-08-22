const { toPTT } = require('../lib/converter')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (m.quoted ? m.quoted : m.msg).mimetype || ''
  if (!/video|audio/.test(mime)) throw `Balas video atau audio yang ingin diubah ke voice note dengan caption *${usedPrefix + command}*`
  let media = await q.download()
  let audio = await toPTT(media, 'mp4')
  conn.sendMessage(m.chat, audio, MessageType.audio, {
    quoted: m,
    ptt: true
  })
}
handler.help = ['vn [convert to voice note]']
handler.tags = ['tools']

handler.command = /^(vn)$/i
handler.register = true

module.exports = handler
