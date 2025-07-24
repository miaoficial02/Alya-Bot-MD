const handler = async (m, { conn, isBotAdmin }) => {
    if (!m.isGroup) return m.reply('❌ Este comando solo funciona en grupos.');
    if (!isBotAdmin) return m.reply('❌ El bot necesita ser admin para ver el link.');

    try {
        const link = await conn.groupInviteCode(m.chat);
        m.reply(`🔗 Enlace del grupo:\nhttps://chat.whatsapp.com/${link}`);
    } catch (err) {
        m.reply('❌ No se pudo obtener el enlace.');
    }
};

handler.command = /^link$/i;
handler.group = true;
handler.botAdmin = true;

export default handler;
