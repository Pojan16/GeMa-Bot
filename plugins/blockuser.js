let handler = async (m, { conn, args, text}) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let who = (mention + '@s.whatsapp.net')
        let block = conn.blockUser(who)// mama mia lezatos~ 👌
        if (!text) throw 'Kamu mau blokir siapa?'
        if (!who) throw 'Masukan nomernya, atau tag orangnya!'
        conn.blockUser(who, 'add')
        conn.reply(m.chat, `Berhasil memblokir ${who}`, m)
    }
}
handler.help = ['block @mention']
handler.tags = ['owner']
handler.command = /^bloc?k(ir)$/i
handler.owner = true
// we em: Ozan Gans:v
module.exports = handler
