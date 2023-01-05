import fetch from "node-fetch"
import { generateWAMessageFromContent } from "@adiwajshing/baileys"

let handler  = async (m, { conn }) => {

  let pp = 'https://tinyurl.com/24u64tky'
  try {
    pp = await conn.profilePictureUrl(m.sender, 'image')
  } catch (e) {
  }

let rules = `➯ *Don't Spam Bot!!*
 ⟬Kalau Udah Di Ban/Blok Jangan Ngemis Minta Unban/Unblock⟭
➯ *Tidak Menjual Nomor Bot!!*
⟬Minimal Mandi Wajib Dulu Bro Biar Tau Dimana Letak Kesalahan Lu⟭
➯ *Call Autoblock!*
⟬Mampus Lu Aowaowk⟭
➯ *Maksa Minta Script*
⟬Emang Nya Lu Siapa? Udh Minta Maksa Pula⟭
➯ *Hina Bot Gw*
⟬Ngehina Elit,Bukti Sulit 😹⟭
➯ *Bot Delay/Lama Bles?*
⟬Lu Di Chet Ayang Lu Aja Lama Blesny⟭
➯ *Maksa Masukin Gc Lu*
⟬Minimal Donasi Lah Cuy Biar Cuan Gw⟭
➯ *Chet Aneh² Di Cwe Gw, Gw Block Lu Hdup²*
⟬Mɪɴɪᴍᴀʟ Nɢᴏᴛᴀᴋ⟭
❏┳━━◩
┍┛
┆⟥⟤ ➠ (${global.bottime})
└─┈⟅`

return conn.relayMessage(m.chat, rules.message, {})
}

handler.command = /^rules$/
handler.owner = false
export default handler
