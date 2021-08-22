let handler = function (m) {
  this.sendContact(m.chat, '6285856430321', 'ZeroZFourtoN', m)
  // this.sendContact(m.chat, '0', 'Awikwok, mau ngapain?\nkalo mau donasi ya gpp:v', m)
}
handler.help = ['owner']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
