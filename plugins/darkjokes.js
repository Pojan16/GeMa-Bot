let handler = async(m, { conn }) => {
    conn.sendFile(m.chat, global.API('xteam', '/asupan/darkjoke', {}, 'APIKEY'), '', 'drag joles',m)
}
handler.help = ['darkjokes']
handler.tags = ['search']
handler.command = /^(dragjoles|darkjokes)$/i
handler.register = true

module.exports = handler
