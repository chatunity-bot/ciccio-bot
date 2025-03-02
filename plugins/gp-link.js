let handler = async (m, { conn, args }) => {
    let group = m.chat
    let link = 'https://chat.whatsapp.com/' + await conn.groupInviteCode(group)
    
    // Get bot name from database or use default
    let nomeDelBot = global.db.data.nomedelbot || `ciccio`
  
    await conn.sendMessage(m.chat, { 
      text: link,
      contextInfo: {
        forwardingScore: 99,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363370504341415@newsletter',
          serverMessageId: '',
          newsletterName: `${nomeDelBot}`
        }
      }
    }, { quoted: m, detectLink: true })
  }
  
  handler.command = /^link(gro?up)?$/i
  handler.admin = true
  handler.group = true
  handler.botAdmin = true
  export default handler