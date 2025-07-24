const handler = async (m, { conn, isAdmin, isBotAdmin, quoted, mentionedJid }) => {
    if (!m.isGroup) return m.reply('❌ Este comando solo funciona en grupos.');
    if (!isAdmin) return m.reply('❌ Solo los admins pueden usar este comando.');
    if (!isBotAdmin) return m.reply('❌ El bot necesita ser admin.');

    const target = mentionedJid[0] || (quoted ? quoted.sender : null);
    if (!target) return m.reply('❌ Mencioná o respondé a un usuario para quitarle admin.');

    try {
        await conn.groupParticipantsUpdate(m.chat, [target], 'demote');
        m.reply(`✅ @${target.split('@')[0]} ya no es admin.`, null, { mentions: [target] });
    } catch (err) {
        m.reply(`❌ Error al quitar admin: ${err.message}`);
    }
};

handler.command = /^demote$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
