let limit = 30
let yts = require('yt-search')
let fetch = require('node-fetch')
const { servers, yta, ytv } = require('../lib/y2mate')
let handler = async (m, { conn, command, text, isPrems, isOwner }) => {
  if (!text) throw 'Mau cari apa? gunakan\n\n#play dan masukkan text yang mau dicari'
  let chat = global.db.data.chats[m.chat]
  let results = await yts(text)
  let vid = results.all.find(video => video.seconds < 3600)
  if (!vid) throw 'Permintaan Tersebut Tidak ditemukan!'
  let isVideo = /2$/.test(command)
  let yt = false
  let yt2 = false
  let usedServer = servers[0]
  for (let i in servers) {
    let server = servers[i]
    try {
      yt = await yta(vid.url, server)
      yt2 = await ytv(vid.url, server)
      usedServer = server
      break
    } catch (e) {
      m.reply(`Server ${server} error!${servers.length >= i + 1 ? '' : '\nmencoba server lain...'}`)
    }
  }
  if (yt === false) throw 'Semua server tidak bisa :/'
  if (yt2 === false) throw 'Semua server tidak bisa :/'
  let { dl_link, thumb, title, filesize, filesizeF } = yt
  await conn.send2ButtonLoc(m.chat, await (await fetch(thumb)).buffer(), `
*Title:* ${title}
*File Size Audio:* ${filesizeF}
*File Size Video:* ${yt2.filesizeF}
*Server y2mate:* ${usedServer}
`.trim(), 'Youtube Downloader From GeMa-Bot', 'Audio', `/ytmp3 ${vid.url}`, 'Video', `/ytmp4 ${vid.url}`)
}
handler.help = ['play [musik]','play2 [video]']
handler.tags = ['download']
handler.command = /^play2?$/i
handler.register = true

handler.exp = 5

module.exports = handler

