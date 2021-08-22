let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Linknya mana kak?'
  let res = await fetch(global.API('xteam', '/dl/ig', {
    url: args[0]
  }, 'APIKEY'))
  if (res.status !== 200) {
    res.text()
    throw res.status
  }
  let json = await res.json()
  if (!json.result) throw json
  let { name, username, likes, caption, data } = json.result
  let text = `
Username: ${name} *(@${username})*
${likes} Likes
Caption:
${caption}
`.trim()
  for (let { data: url, type } of data)
    conn.sendFile(m.chat, url, 'ig' + (type == 'video' ? '.mp4' : '.jpg'), text, m)
}
handler.help = ['ig'].map(v => v + ' <url>')
handler.tags = ['download']
handler.command = /^(ig(dl)?)$/i

handler.register = true
handler.limit = true

module.exports = handler
