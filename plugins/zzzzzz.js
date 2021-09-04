//hayo ngapain 🐦

let handler = (m, { conn, usedPrefix, command, args}) => {
    if (args.length > 0) {
        let name = conn.getName(m.sender)
        let ban = global.db.data.users[m.sender].banned
        let warn = global.db.data.users[m.sender].warn
        if (warn < 4) {//ini buat warning perintah yang gak ada di menu
            global.db.data.users[m.sender].warn += 1
            conn.reply(m.chat, `*Maaf ${name}, komen ${m.text} tidak tersedia.*\nKetik ${usedPrefix}menu untuk menampilkan komen yg tersedia.\n\n_Hindari command yang tidak ada, atau kamu akan terkena_ *_BANNED_*`, ban, m)//yahahaha pengap:v
        } else if (warn == 4) {//kalo udah 4 kali, kena banned
            global.db.data.users[m.sender].banned = true
            global.db.data.users[m.sender].warn = 0
            conn.reply(m.chat, '*yah... sayangnya kamu kebanned say:(*\n_Kamu terbanned karena menggunakan perintah yg tidak ada!_\n\n```Untuk membuka``` *banned* ```silahkan masuk forumku!```\n*https://chat.whatsapp.com/GPqFbXMXCIAHj3VNwscX29*', ban, m)//awikawok
        }
    }
}
handler.command = new RegExp
handler.register = null
//buatan ozan sendiri ngap
module.exports = handler
