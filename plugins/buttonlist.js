let { MessageType } = require('@adiwajshing/baileys')
let moment = require ('moment-timezone')
let handler = async (m, { conn, participants, args }) => {
     const rows = [
        {title: 'MENU', description: "_Untuk menampilkan semua menu_", rowId:"/menu"},
        {title: 'HELP', description: "_Untuk menampilkan menu spesial_", rowId:"/help"},
        {title: 'TICTACTOE', description: "_Permainan Tictactoe Multiplayer_", rowId:"/ttt"},
        {title: 'SNK', description: "_Syarat & Ketentuan Bot Ini_", rowId:"/snk"},
        {title: 'INFO', description: "_Information WhatsApp Bot_", rowId:"/info"},
        {title: 'DONATUR', description: "_Daftar pengguna yang selalu support_", rowId:"/crazyrich"},
        {title: 'PILOT', description: "_Pengontrol & Pembuat Bot ini_", rowId:"/owner"},
    ]
    
    const sections = [{title: "Choose One To Bring Up The Contents Of The Bot", rows: rows}]
    const button = {
        buttonText: 'Press To Select',
        description: `\`\`\`Hai, ${ucapan()}\`\`\`\n\`\`\`Saya adalah robot WhatsApp\`\`\`\n\`\`\`Ada Yang Bisa Robot Bantu?\`\`\`\n\n*© GeMa-Bot*`,
        sections: sections,
        listType: 1
    }
    
    await conn.sendMessage(m.chat, button, MessageType.listMessage)
}
handler.customPrefix = /(tampilk?an(menu)?)/i
handler.command = new RegExp
module.exports = handler
function ucapan() {
    const time = moment.tz('Asia/Jakarta').format('HH')
    res = "Selamat dinihari 🌃"
    if (time >= 4) {
        res = "Selamat pagi 🌄"
    }
    if (time > 10) {
        res = "Selamat siang 🌅"
    }
    if (time >= 15) {
        res = "Selamat sore 🌇"
    }
    if (time >= 18) {
        res = "Selamat malam 🌃"
    }
    return res
}