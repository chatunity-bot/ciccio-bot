
let handler = async(m, { conn }) => {
    let nomeDelBot = global.db.data.nomedelbot || `ciccio`
    let revoke = await conn.groupRevokeInvite(m.chat)
    
    await conn.sendMessage(m.chat, {
      text: `🔹️ *link reimpostato*\n♾ • ID: ${'https://chat.whatsapp.com/' + revoke}`,
      contextInfo: {
        forwardingScore: 999,
        isForwarded: true,
        forwardedNewsletterMessageInfo: {
          newsletterJid: '120363370504341415@newsletter',
          serverMessageId: '',
          newsletterName: `${nomeDelBot}`
        }
      }
    })
  }
  
  handler.command = ['reimposta', 'revoke']
  handler.botAdmin = true
  handler.admin = true
  handler.group = true
  
  export default handler