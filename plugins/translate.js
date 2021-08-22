const translate = require('translate-google-api')
let handler = async (m, { args, usedPrefix, command }) => {
    er = `contoh: \n${usedPrefix + command} langue teks\n${usedPrefix + command} id your messages\n\nDaftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages`

    let lang = 'en'
    let text = args.slice(1).join(' ')
    if (!text) throw er
    if (args[0].length === 2) lang = args[0]
    else text = args.join(' ')
    if (!text) text = lang

    try {
        const result = await translate(`${text}`, {
            tld: "cn",
            to: `${lang}`,
        })
        m.reply(`${result[0]}`)
        console.log(result[0])
    } catch (e) {
        throw er
    }

}
handler.help = ['translate'].map(v => v + ' <langue> <teks>')
handler.tags = ['search']
handler.command = /^(tr(anslate)?)$/i
handler.register = true
handler.limit = false
handler.fail = null
handler.exp = 0
module.exports = handler
