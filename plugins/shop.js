let { MessageType } = require('@adiwajshing/baileys')
const Bexp = 150
const Sexp = 100
const Blimit = 250
const Slimit = 200
let handler = async (m, { conn, command, args, usedPrefix }) => {
    let type = (args[0] || '').toLowerCase()
    let _type = (args[1] || '').toLowerCase()
    let jualbeli = (args[0] || '').toLowerCase()
    const str = `
\`\`\`Selamat datang di AMO'Z\`\`\`
*Selamat belanja*
━━━━━━━━━━━━━━━━━
Gunakan: ${usedPrefix}shop <Buy|Sell> <item> <jumlah>
Contoh: *${usedPrefix}shop buy exp 1*
━━━━━━━━━━━━━━━━━
LIST ITEM:

*Barang  |  Harga Beli*
Exp:       ${Bexp}
Limit:     ${Blimit}

*Barang  |  Harga Jual*
Exp:       ${Sexp}
Limit:     ${Slimit}
━━━━━━━━━━━━━━━━━
Terimakasih Jangan Lupa Berbelanja Lagi✨
`.trim()
    try {
        if (/shop|toko/i.test(command)) {
            const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
            switch (jualbeli) {
            case 'buy':
                switch (_type) {
                    case 'exp':
                            if (global.db.data.users[m.sender].coin >= Bexp * count) {
                                global.db.data.users[m.sender].coin -= Bexp * count
                                global.db.data.users[m.sender].exp += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} Exp dengan harga ${Bexp * count} coin`, m)
                            } else conn.reply(m.chat, `Coin anda tidak cukup untuk membeli ${count} Exp dengan harga ${Bexp * count} coin`,)
                        break
                    case 'limit':
                            if (global.db.data.users[m.sender].coin >= Blimit * count) {
                                global.db.data.users[m.sender].coin -= Blimit * count
                                global.db.data.users[m.sender].limit += count * 1
                                conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga ${Blimit * count} coin`, m)
                            } else conn.reply(m.chat, `Coin anda tidak cukup untuk membeli ${count} Limit dengan harga ${Blimit * count} coin`, m)
                        
                        break
                    default:
                        return conn.reply(m.chat, str, m)
                }
                break
            case 'sell': 
                switch (_type) {
                    case 'exp':
                        if (global.db.data.users[m.sender].exp >= count * 1) {
                            global.db.data.users[m.sender].exp += Sexp * count
                            global.db.data.users[m.sender].exp -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Exp dengan harga ${Sexp * count} coin`.trim(), m)
                        } else conn.reply(m.chat, `Exp kamu tidak cukup`.trim(), m)
                        break
                    case 'limit':
                        if (global.db.data.users[m.sender].limit >= count * 1) {
                            global.db.data.users[m.sender].limit += Slimit * count
                            global.db.data.users[m.sender].limit -= count * 1
                            conn.reply(m.chat, `Succes menjual ${count} Limit dengan harga ${Slimit * count} coin`.trim(), m)
                        } else conn.reply(m.chat, `Limit kamu tidak cukup`.trim(), m)
                        break
                    default:
                        return conn.reply(m.chat, str, m)
                }
                break
            default:
                return conn.reply(m.chat, str, m)
            }
        } else if (/beli|buy/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'exp':
                        if (global.db.data.users[m.sender].coin >= Bexp * count) {
                            global.db.data.users[m.sender].coin -= Bexp * count
                            global.db.data.users[m.sender].exp += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} Exp dengan harga ${Bexp * count} coin`, m)
                        } else conn.reply(m.chat, `Coin anda tidak cukup untuk membeli ${count} Exp dengan harga ${Bexp * count} coin`, m)
                    
                    break
                case 'limit':
                        if (global.db.data.users[m.sender].coin >= Blimit * count) {
                            global.db.data.users[m.sender].coin -= Blimit * count
                            global.db.data.users[m.sender].limit += count * 1
                            conn.reply(m.chat, `Succes membeli ${count} Limit dengan harga ${Blimit * count} coin`, m)
                        } else conn.reply(m.chat, `Coin anda tidak cukup untuk membeli ${count} Limit dengan harga ${Blimit * count} coin`, m)
                    
                    break
                default:
                    return conn.reply(m.chat, str, m)
            }
        } else if (/sell|jual|/i.test(command)) {
            const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
            switch (type) {
                case 'exp':
                    if (global.db.data.users[m.sender].exp >= count * 1) {
                        global.db.data.users[m.sender].coin += Sexp * count
                        global.db.data.users[m.sender].exp -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Exp dengan harga ${Sexp * count} coin`.trim(), m)
                    } else conn.reply(m.chat, `Exp kamu tidak cukup`.trim(), m)
                    break
                case 'limit':
                    if (global.db.data.users[m.sender].limit >= count * 1) {
                        global.db.data.users[m.sender].coin += Slimit * count
                        global.db.data.users[m.sender].limit -= count * 1
                        conn.reply(m.chat, `Succes menjual ${count} Limit dengan harga ${Slimit * count} coin`.trim(), m)
                    } else conn.reply(m.chat, `Limit kamu tidak cukup`.trim(), m)
                    break
                default:
                    return conn.reply(m.chat, str, m)
            }
        }
    } catch (e) {
        conn.reply(m.chat, str, m)
        console.log(e)
    }
}
handler.help = ['shop <args>']
handler.tags = ['hari']
handler.command = /^(shop|toko|beli|buy|jual|sell)$/i
handler.register = true
module.exports = handler