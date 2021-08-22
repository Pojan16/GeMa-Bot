let handler = async (m, { conn, usedPrefix }) =>{
    let users = Object.entries(global.db.data.users).filter(user => user[1].warn)
    
    m.reply(`
┌ *Daftar Terkena Warn*
│ Total : ${users.length} User${users ? '\n' + users.map(([jid], i) => `
│ ${i + 1}. ${conn.getName(jid) == undefined ? 'unknown' : conn.getName(jid)}
│ ${jid}
`.trim()).join('\n') : ''}
└────
`.trim())
}
handler.help = ['warnlist']
handler.tags = ['info']
handler.command = /^(warnlist|daftarwarn)$/i
handler.register = true

module.exports = handler