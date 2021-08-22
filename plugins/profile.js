let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')
let handler = async (m, { conn, usedPrefix }) => {
  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, coin, lastclaim, registered, regTime, age, level, role, warn } = global.db.data.users[who]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let math = max - xp
    let sortedcoin = Object.entries(global.db.data.users).sort((a, b) => b[1].coin - a[1].coin)
    let userscoin = sortedcoin.map(v => v[0])
    let prem = global.prems.includes(who.split`@`[0])
    let str = `
*[YOUR PROFILE IN DATABASE]*

Name: ${username} ${registered ? '(' + name + ') ': ''}(@${who.replace(/@.+/, '')})${about ? '\nAbout: ' + about : ''}
Number: ${PhoneNumber('+' + who.replace('@s.whatsapp.net', '')).getNumber('international')}
Link: wa.me/${who.split`@`[0]}${registered ? '\nAge: ' + age : ''}
XP: Total ${exp} (${exp - min} / ${xp}) [${math <= 0 ? `Ready to *${usedPrefix}levelup*` : `${math} XP left to levelup`}]
Level: ${level}
Role: *${role}*
Coin: ${coin}
Limit: ${limit}
Registered: ${registered ? 'Yes (' + new Date(regTime) + ')': 'No'}
Premium: ${prem ? 'Yes' : 'No'}${lastclaim > 0 ? '\nLast Claim: ' + new Date(lastclaim) : ''}

Top Coin *${userscoin.indexOf(m.sender) + 1}* dari *${userscoin.length}*
Warn: ${warn} / 4× Your Banned!
`.trim()
    let mentionedJid = [who]
    conn.reply(m.chat, str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['profile [@user]']
handler.tags = ['search', 'absen']
handler.command = /^profile$/i
module.exports = handler

