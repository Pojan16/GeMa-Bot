const { MessageType } = require("@adiwajshing/baileys")

async function handler(m, { command }) {
    command = command.toLowerCase()
    this.anonymous = this.anonymous ? this.anonymous : {}
    switch (command) {
        case 'next':
        case 'leave': {
            let room = Object.values(this.anonymous).find(room => room.check(m.sender))
            if (!room) throw 'Kamu sedang tidak berada di server chat saat ini!'
            m.reply('Ok')
            let other = room.other(m.sender)
            if (other) this.sendMessage(other, 'Teman chat meninggalkan chat denganmu!', MessageType.text)
            delete this.anonymous[room.id]
            if (command === 'leave') break
        }
        case 'start': {
            if (Object.values(this.anonymous).find(room => room.check(m.sender))) throw 'Kamu masih berada di dalam server chat saat ini!'
            let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
            if (room) {
                this.sendMessage(room.a, 'Okey, Menemukan teman chat!\n\nSekarang anda terhubung dengan\nServer chat saat ini, silahkan ketik *Hai/Halo*\nuntuk berkomunikasi dengannya', MessageType.text)
                room.b = m.sender
                room.state = 'CHATTING'
                m.reply('Okey, Menemukan teman chat!\n\nSekarang anda terhubung dengan\nserver chat saat ini, silahkan ketik *Hai/Halo*\nuntuk berkomunikasi dengannya')
            } else {
                let id = + new Date
                this.anonymous[id] = {
                    id,
                    a: m.sender,
                    b: '',
                    state: 'WAITING',
                    check: function (who = '') {
                        return [this.a, this.b].includes(who)
                    },
                    other: function (who = '') {
                        return who === this.a ? this.b : who === this.b ? this.a : ''
                    },
                }
                m.reply('Sedang mencari teman chat...')
            }
            break
        }
    }
}
handler.help = ['start [untuk memulai]', 'leave [untuk keluar]', 'next [untuk lanjut]']
handler.tags = ['anonchat']

handler.command = /^start|leave|next$/i
handler.private = true
handler.register = true

module.exports = handler
