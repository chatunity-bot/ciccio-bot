let handler = async (m, { conn, command, text }) => {
    let love = `──────────────\n𝐂𝐀𝐋𝐂𝐎𝐋𝐀𝐓𝐎𝐑𝐄 𝐃𝐈 𝐀𝐌𝐎𝐑𝐄 ❤️\nAffinità tra ${text} e te: ${Math.floor(Math.random() * 100)}%\n──────────────`.trim()
    
    // Get bot name from database or use default
    let nomeDelBot = global.db.data.nomedelbot || `ciccio`
  
    await conn.sendMessage(m.chat, { 
      text: love,
      contextInfo: {
        mentionedJid: conn.parseMention(love),
        forwardingScore: 99,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363370504341415@newsletter',
          serverMessageId: '',
          newsletterName: `${nomeDelBot}`
        }
      }
    }, { quoted: m })
  }
  
  handler.help = ['love']
  handler.tags = ['fun']
  handler.command = /^(love|amore)$/i
  export default handler