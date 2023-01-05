import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, command }) => {
  const ultah = new Date('Juli 11 2023 00:0:01')
    const sekarat = new Date().getTime() 
    const Kurang = ultah - sekarat
    const ohari = Math.floor( Kurang / (1000 * 60 * 60 * 24));
    const ojam = Math.floor( Kurang % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
    const onet = Math.floor( Kurang % (1000 * 60 * 60) / (1000 * 60))
    const detek = Math.floor( Kurang % (1000 * 60) / 1000)
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
 await conn.sendButton(m.chat, `*Hai*
ɪ'ᴍ Sakura Botz ʏᴀɴɢ ᴅɪ ʙᴜᴀᴛ ɢᴀᴋ ɴɪᴀᴛ ᴏʟᴇʜ Rayy ᴋᴀʀᴇɴᴀ ᴍᴀʟᴇꜱ ʀᴇᴄᴏᴅᴇ ᴊᴀᴅɪ ᴘᴀᴋᴇ ᴀᴊᴀ ᴀᴘᴀ ʏᴀɴɢ ᴀᴅᴀ ʏᴀʜ.
Kalau Ada Yg Error Bisa Langsung Report Ke Owner.\n`,wm + '\n\n' + botdate, thumbdoc, [['Aʟʟ Mᴇɴᴜ','.? all'],['Lɪsᴛ Mᴇɴᴜ','.siuuu']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: `𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 : ${ohari} Hari ${ojam} Jam ${onet} Menit ${detek} Detik`,
                        body: `Join Grup`,          previewType: 0,
                        thumbnail: await (await fetch(`https://i.ibb.co/5st560k/fake.jpg`)).buffer(),
                        sourceUrl: 'https://chat.whatsapp.com/GXfg4bJjxZF5vB1R399NRH'
                      }}
})
}


handler.help = ['menu']
handler.tags = ['group']
handler.command = /^(menu|help|co)$/i
handler.register = false

export default handler
