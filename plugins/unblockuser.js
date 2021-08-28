let handler = async (m, { conn, args, text}) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let who = (mention + '@s.whatsapp.net')
        let block = conn.blockUser(who)// eits bagi dua:v
        if (!text) throw 'Kamu mau blokir siapa?'
        if (!who) throw 'Masukan nomernya, atau tag orangnya!'
        conn.blockUser(who, 'remove')
        conn.reply(m.chat, `Berhasil membuka blokir ${who}`, m)
    }
}
handler.help = ['unblock @mention']
handler.tags = ['owner']
handler.command = /^unbloc?k(ir)$/i
handler.owner = true
// we em: Ozan Gans:v
module.exports = handler