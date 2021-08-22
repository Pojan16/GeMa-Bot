let { MessageType } = require('@adiwajshing/baileys')
let handler = async (m, { conn, usedPrefix }) => { 
    try { 
        let __timers = (new Date - global.db.data.users[m.sender].lastwork)
        let _timers = (300000 - __timers) 
        let timers = clockString(_timers)
        if (global.db.data.users[m.sender].exp > 79) {
            if (new Date - global.db.data.users[m.sender].lastwork > 300000) {
            let coin = (Math.floor(Math.random() * 50000))
            let _exp = `${pickRandom(['1', '0', '0', '1'])}`
            let exp = (_exp * 1)
            let _limit = `${pickRandom(['1', '0', '0', '1'])}`
            let limit = (_limit * 1)
            let str = `
Nyawamu berkurang -${exp * 2} karena Kamu telah bekerja sampai ${pickRandom(['Meiji Mura (Prefektur Aichi)', 'Gunung Kumotori (Prefektur Tokyo, Saitama, dan Yamanashi)', 'Itto-seki (Prefektur Nara)', 'Taman Bunga Ashikaga (Prefektur Tochigi)', 'Museum Kereta Api Kyoto (Prefektur Kyoto)'])} dan mendapatkan
${coin} *coin*
`.trim()
            conn.reply(m.chat, str, m)
            if (exp > 0) {
                   global.db.data.users[m.sender].exp += exp * 7
                   conn.reply(m.chat, '*Selamat anda mendapatkan item elite yaitu*\n' + exp + ' Exp Bot', m)
            }
            if (limit > 0) {
                global.db.data.users[m.sender].limit += limit * 5
                conn.reply(m.chat, '*Selamat anda mendapatkan item epic yaitu*\n' + limit + ' Limit Bot', m)
            }
            global.db.data.users[m.sender].exp -= exp * 1
            global.db.data.users[m.sender].coin += coin * 1
            global.db.data.users[m.sender].lastwork = new Date * 1
            } else conn.reply(m.chat, `Anda sudah bekerja dan kelelahan, silahkan coba *${timers}* lagi`, m)
        } else conn.reply(m.chat, 'Minimal 80 Exp untuk bisa bekerja, beli tenaga dulu dengan ketik *' + usedPrefix + 'shop buy exp <jumlah>*\n\n_Untuk mendapat coin gratis ketik_ *' + usedPrefix + 'claim*', m)
    } catch (e) {
        console.log(e)
        conn.reply(m.chat, 'Error', m)
    }
}
handler.help = ['work']
handler.tags = ['game']
handler.command = /^work$/i
handler.register = true

handler.fail = null

module.exports = handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}
function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
