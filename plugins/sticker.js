const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
const uploadFile = require('../lib/uploadFile')
const uploadImage = require('../lib/uploadImage')
let { webp2png } = require('../lib/webp2mp4')
let handler = async (m, { conn, args, usedPrefix, command }) => {
  let stiker = false
  try {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (/webp/.test(mime)) {
      let img = await q.download()
      let out = await webp2png(img)
      if (!img) throw `Balas stiker dengan perintah ${usedPrefix + command} <packname>|<author>`
      stiker = await sticker(0, out, global.packname, global.author)
    } else if (/image/.test(mime)) {
      let img = await q.download()
      let link = await uploadImage(img)
      if (!img) throw `Balas gambar dengan perintah ${usedPrefix + command} <packname>|<author>`
      stiker = await sticker(0, link, global.packname, global.author)
    } else if (/video/.test(mime)) {
      if ((q.msg || q).seconds > 11) return m.reply('Maksimal 10 detik!')
      let img = await q.download()
      let link = await uploadFile(img)
      if (!img) throw `Balas video dengan perintah ${usedPrefix + command} <packname>|<author>`
      stiker = await sticker(0, link, global.packname, global.author)
    } else if (args[0]) {
      if (isUrl(args[0])) stiker = await sticker(false, args[0], global.packname, global.author)
      else return m.reply('URL tidak valid!')
    }
  } finally {
    if (stiker) await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
    else throw `Gagal${m.isGroup ? ', balas media untuk dijadikan sticker!' : ''}`
  }
}
handler.help = ['stiker']
handler.tags = ['sticker']
handler.command = /^s(tic?ker)?(gif)?(wm)?$/i
handler.register = true
handler.exp = 10

module.exports = handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}
