let { webp2mp4 } = require('../lib/webp2mp4')
let { ffmpeg } = require('../lib/converter')
let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'Reply sticker atau audio untuk dijadikan video/mp4'
    let mime = m.quoted.mimetype || ''
    if (!/webp|audio/.test(mime)) throw 'Reply sticker atau audio untuk dijadikan video/mp4'
    let media = await m.quoted.download()
    let out = Buffer.alloc(0)
    if (/webp/.test(mime)) {
        out = await webp2mp4(media)
    } else if (/audio/.test(mime)) {
        out = await ffmpeg(media, [
            '-filter_complex', 'color',
            '-pix_fmt', 'yuv420p',
            '-crf', '51',
            '-c:a', 'copy',
            '-shortest'
        ], 'mp3', 'mp4')
    }
    await conn.sendFile(m.chat, out, 'out.mp4', null, m)
}
handler.help = ['video [convert to video]']
handler.tags = ['sticker', 'tools']
handler.command = /^(mp4|video)$/i
handler.register = true
handler.limit = true

module.exports = handler
