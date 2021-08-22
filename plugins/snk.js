let handler = async m => m.reply(`
✘ ▬▬▬▬ ஜ۩۞۩ஜ ▬▬▬▬ ✘
    *_SYARAT DAN KETENTUAN_*
✘ ▬▬▬▬ ஜ۩۞۩ஜ ▬▬▬▬ ✘

1. Teks dan nama pengguna WhatsApp anda akan disimpan di dalam server selama bot aktif.

2. Owner tidak dapat melihat pribadi chat anda / keprivasian anda kepada bot ini, dengan pengguna yang lain.

3. Jangan menanyakan hal yang aneh / mustahil kepada bot ini seperti menanyakan nama dan berkenalan, karena ini adalah nomor bot.

4. BOT tidak akan menjawab jika bot offline / tidak terdaftar di command, terkadang, bot mengalami bug ketika diaktifkan, mengirim pesan asal²an, spam, dll

5. Jika menemukan Bug/Error silahkan langsung lapor ke Owner bot.

6. BOT tidak boleh digunakan untuk layanan yang bertujuan/berkontribusi dalam: 
    • seks / perdagangan manusia
    • perjudian
    • perilaku adiktif yang merugikan 
    • kejahatan
    • kekerasan (kecuali jika diperlukan untuk melindungi keselamatan publik)
    • pembakaran hutan / penggundulan hutan:v
    • ujaran kebencian atau diskriminasi berdasarkan usia, jenis kelamin, identitas gender, ras, seksualitas, agama, kebangsaan.

7. Dilarang keras melakukan SPAM ke bot, menelpon bot, dan mengirim pesan ke owner bot di luar jam kerja. Jika teridentifikasi melakukan hal yang tadi disebutkan, akan mendapat BLOCK DAN BANNED PERMANEN.

8. Selalu ingat bahwa bot ini dalam proses pengembangan jadi diharapkan anda dapat memakluminya jika bot terdapat banyak kekurangan.

9. Dan selalu ingat juga yang menggunakan bot ini bukan hanya anda/grup anda jadi saya memohon agar bersabar jika terjadinya delay. Serta gunakan fitur yang tersedia dengan seperlunya.

10. Apapun yang anda perintah pada bot ini baik ketika menggunakan ataupun sesudahnya, OWNER TIDAK BERTANGGUNG JAWAB!

Terima kasih!✨
`.trim())
handler.help = ['snk']
handler.tags = ['info']
handler.command = /^(snk)$/i
handler.register = true

handler.fail = null
handler.exp = 0

module.exports = handler