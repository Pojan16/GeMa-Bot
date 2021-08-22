let handler = async (m, { conn, args}) => {
    if (args.length > 0) {
        let mention = args[0].replace(/[@.+-]/g, '').replace(' ', '')
        let who = (mention + '@s.whatsapp.net')
        let block = this.blockUser(from, who)
        if (block = false) {
          this.blockUser(from, who, 'add') = true
          conn.reply(m.chat, 'Berhasil memblokir', block, m)
        } else if (block = true) {
          this.blockUser(from, who, 'add') = true
          conn.reply(m.chat, 'Dia sudah keblokir komandan:/', m)
        }
    } else conn.reply(m.chat, 'Mau blokir siapa kamu?', m)
}
handler.help = ['block @mention']
handler.tags = ['owner']
handler.command = /^bloc?k(ir)$/i
handler.owner = true

module.exports = handler