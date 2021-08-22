//hayo ngapain 🐦
let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `
*「 LIST SURAH 」*

___________________________
1. \`\`\`al-fatihah\`\`\`
2. \`\`\`al-baqarah\`\`\`
3. \`\`\`ali 'imran\`\`\`
4. \`\`\`an-nisa'\`\`\`
5. \`\`\`al-ma'idah\`\`\`
6. \`\`\`al-an'am\`\`\`
7. \`\`\`al-a'raf\`\`\`
8. \`\`\`al-anfal\`\`\`
9. \`\`\`at-taubah\`\`\`
10. \`\`\`yunus\`\`\`
11. \`\`\`hud\`\`\`
12. \`\`\`yusuf\`\`\`
13. \`\`\`ar-ra'd\`\`\`
14. \`\`\`ibrahim\`\`\`
15. \`\`\`al-hijr\`\`\`
16. \`\`\`an-nahl\`\`\`
17. \`\`\`al-isra'\`\`\`
18. \`\`\`al-kahf\`\`\`
19. \`\`\`maryam\`\`\`
20. \`\`\`taha\`\`\`
21. \`\`\`al-anbiya'\`\`\`
22. \`\`\`al-hajj\`\`\`
23. \`\`\`al-mu'minun\`\`\`
24. \`\`\`an-nur\`\`\`
25. \`\`\`al-furqan\`\`\`
26. \`\`\`asy-syu'ara'\`\`\`
27. \`\`\`an-naml\`\`\`
28. \`\`\`al-qasas\`\`\`
29. \`\`\`al-'ankabut\`\`\`
30. \`\`\`ar-rum\`\`\`
31. \`\`\`luqman\`\`\`
32. \`\`\`as-sajdah\`\`\`
33. \`\`\`al-ahzab\`\`\`
34. \`\`\`saba'\`\`\`
35. \`\`\`fatir\`\`\`
36. \`\`\`yasin\`\`\`
37. \`\`\`as-saffat\`\`\`
38. \`\`\`sad\`\`\`
39. \`\`\`az-zumar\`\`\`
40. \`\`\`gafir\`\`\`
41. \`\`\`fussilat\`\`\`
42. \`\`\`asy-syura\`\`\`
43. \`\`\`az-zukhruf\`\`\`
44. \`\`\`ad-dukhan\`\`\`
45. \`\`\`al-jasiyah\`\`\`
46. \`\`\`al-ahqaf\`\`\`
47. \`\`\`muhammad\`\`\`
48. \`\`\`al-fath\`\`\`
49. \`\`\`al-hujurat\`\`\`
50. \`\`\`qaf\`\`\`
51. \`\`\`az-zariyat\`\`\`
52. \`\`\`at-tur\`\`\`
53. \`\`\`an-najm\`\`\`
54. \`\`\`al-qamar\`\`\`
55. \`\`\`ar-rahman\`\`\`
56. \`\`\`al-waqi'ah\`\`\`
57. \`\`\`al-hadid\`\`\`
58. \`\`\`al-mujadalah\`\`\`
59. \`\`\`al-hasyr\`\`\`
60. \`\`\`al-mumtahanah\`\`\`
61. \`\`\`as-saff\`\`\`
62. \`\`\`al-jumu'ah\`\`\`
63. \`\`\`al-munafiqun\`\`\`
64. \`\`\`at-tagabun\`\`\`
65. \`\`\`at-talaq\`\`\`
66. \`\`\`at-tahrim\`\`\`
67. \`\`\`al-mulk\`\`\`
68. \`\`\`al-qalam\`\`\`
69. \`\`\`al-haqqah\`\`\`
70. \`\`\`al-ma'arij\`\`\`
71. \`\`\`nuh\`\`\`
72. \`\`\`al-jinn\`\`\`
73. \`\`\`al-muzzammil\`\`\`
74. \`\`\`al-muddassir\`\`\`
75. \`\`\`al-qiyamah\`\`\`
76. \`\`\`al-insan\`\`\`
77. \`\`\`al-mursalat\`\`\`
78. \`\`\`an-naba'\`\`\`
79. \`\`\`an-nazi'at\`\`\`
80. \`\`\`'abasa\`\`\`
81. \`\`\`at-takwir\`\`\`
82. \`\`\`al-infitar\`\`\`
83. \`\`\`al-mutaffifin\`\`\`
84. \`\`\`al-insyiqaq\`\`\`
85. \`\`\`al-buruj\`\`\`
86. \`\`\`at-tariq\`\`\`
87. \`\`\`al-a'la\`\`\`
88. \`\`\`al-gasyiyah\`\`\`
89. \`\`\`al-fajr\`\`\`
90. \`\`\`al-balad\`\`\`
91. \`\`\`asy-syams\`\`\`
92. \`\`\`al-lail\`\`\`
93. \`\`\`ad-duha\`\`\`
94. \`\`\`asy-syarh\`\`\`
95. \`\`\`at-tin\`\`\`
96. \`\`\`al-'alaq\`\`\`
97. \`\`\`al-qadr\`\`\`
98. \`\`\`al-bayyinah\`\`\`
99. \`\`\`az-zalzalah\`\`\`
100. \`\`\`al-'adiyat\`\`\`
101. \`\`\`al-qari'ah\`\`\`
102. \`\`\`at-takasur\`\`\`
103. \`\`\`al-'asr\`\`\`
104. \`\`\`al-humazah\`\`\`
105. \`\`\`al-fil\`\`\`
106. \`\`\`quraisy\`\`\`
107. \`\`\`al-ma'un\`\`\`
108. \`\`\`al-kausar\`\`\`
109. \`\`\`al-kafirun\`\`\`
110. \`\`\`an-nasr\`\`\`
111. \`\`\`al-lahab\`\`\`
112. \`\`\`al-ikhlas\`\`\`
113. \`\`\`al-falaq\`\`\`
114. \`\`\`an-nas\`\`\`
___________________________

Cara pemakaiannya pun sama dengan menu² lainnya, tinggal ketik menu yg kalian inginkan misalnya, al-fatihah ayat 2 ketik *${_p}alquran* lalu nomor & ayat surah.

Contoh: *_${_p}alquran 1 2_*
maka hasilnya adalah surah Al-Fatihah ayat 2 beserta audionya, dan ayatnya 1 aja

Semoga menu ini berguna bagi kalian orang yang muslim maaf jika ada kekurangan atau kesalahan mohon dimaafkan 🙏

Terima kasih telah menggunakan GeMa BOT.💓
`.trim()



conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*HALAL*', 'status@broadcast')
}//tambahin lagi kalo mau
handler.help = ['listsurah']
handler.tags = ['islam']
handler.command = /^(listsurah)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
