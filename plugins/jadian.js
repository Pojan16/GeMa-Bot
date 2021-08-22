let handler = async (m, { conn, participants, command }) => {
    let member = participants.map(u => u.jid)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `\`\`\`Cieee...\`\`\`\n@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}\n\`\`\`Awikawok:v\`\`\``.trim()
    let mentionedJid = [orang, jodoh]
    conn.reply(m.chat, jawab, m, { contextInfo: { mentionedJid } })
}
handler.help = ['jadian','jodohin','jodohku']
handler.tags = ['group']
handler.command = /^jodoh(in|ku)|jadian$/i
handler.group = true
handler.limit = true
handler.register = true

module.exports = handler
