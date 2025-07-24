const handler = async (m, { conn, participants, isAdmin }) => {
    if (!m.isGroup) return m.reply('❌ Este comando solo funciona en grupos.');
    if (!isAdmin) return m.reply('❌ Solo los admins pueden usar este comando.');

    const mentions = participants.map(p => p.id);
    const text = `📢 *Mención a todos:*\n\n` + mentions.map(u => `➤ @${u.split('@')[0]}`).join('\n');

    await conn.sendMessage(m.chat, { text, mentions }, { quoted: m });
};

handler.command = /^tagall$/i;
handler.group = true;
handler.admin = true;

export default handler;
