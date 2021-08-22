let buatall = 1
let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, args, usedPrefix }) => {
    conn.main = conn.main ? conn.main : {}
    if (m.chat in conn.main) return m.reply ('Masih ada yang taruhan disini, tunggu sampai selesai!!!')
    else conn.main[m.chat] = true
    try {
        let randomaku = `${Math.floor(Math.random() * 30)}`.trim()
        let randomkamu = `${Math.floor(Math.random() * 30)}`.trim() //mwehehehe:v
        let Aku = (randomaku * 1)
        let Kamu = (randomkamu * 1)
        let count = args[0]
        count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].exp / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
        count = Math.max(1, count)
        if (args.length < 1) return conn.reply(m.chat, usedPrefix + 'main <jumlah>\n' + usedPrefix + 'main 50', m)
        if (global.db.data.users[m.sender].exp >= count * 1) {
            global.db.data.users[m.sender].exp -= count * 1
            await m.reply('*[❗] Tunggu, sedang melakukan taruhan denganmu!*') //awoakaoaksk:v
            if (Aku > Kamu) {
                conn.reply(m.chat, `aku main: ${Aku}\nKamu main: ${Kamu}\n\nkamu *Kalah*, kamu kehilangan ${count} exp`.trim(), m)
            } else if (Aku < Kamu) {
                global.db.data.users[m.sender].exp += count * 4
                conn.reply(m.chat, `aku main: ${Aku}\nKamu main: ${Kamu}\n\nkamu *Menang*, kamu mendapatkan ${count * 4} exp`.trim(), m)
            } else {
                global.db.data.users[m.sender].exp += count * 1
                conn.reply(m.chat, `aku main: ${Aku}\nKamu main: ${Kamu}\n\nkamu *Seri*, aku kembalikan ${count * 1} exp`.trim(), m)
            }
        } else conn.reply(m.chat, `exp kamu tidak cukup untuk melakukan main sebesar ${count} exp`.trim(), m)
    } catch (e) {
        console.log(e)
        m.reply('Error!!!')
    } finally {
        delete conn.main[m.chat]
    }
}
    
handler.help = ['main <jumlah>']
handler.tags = ['game']
handler.command = /^(main)$/i
handler.register = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
