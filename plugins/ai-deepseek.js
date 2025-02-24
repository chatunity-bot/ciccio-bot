

import axios from 'axios'

const handler = async (m, { conn, text }) => {
if (!text) return conn.reply(m.chat, '*Inserisci qualcosa per conversare con Deepseek', m)
  
try {
let { data } = await axios.get(`https://archive-ui.tanakadomp.biz.id/ai/deepseek?text=${encodeURIComponent(text)}`)
await m.reply(data?.result || '❌ nessuna risposta ottenuta da DeepSeek AI.')
} catch {
await m.reply('*❌ Errore dei server, riprova tra poco*')
}}

handler.command = /^(deepseek|ia3)$/i
export default handler