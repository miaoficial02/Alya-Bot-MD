const handler = async (m, { conn, isAdmin, isBotAdmin, text }) => {
    if (!m.isGroup) return m.reply('❌ Este comando solo funciona en grupos.');
    if (!isAdmin) return m.reply('❌ Solo los admins pueden usar este comando.');
    if (!isBotAdmin) return m.reply('❌ El bot necesita ser admin.');

    if (text === 'abrir') {
        await conn.groupSettingUpdate(m.chat, 'not_announcement');
        m.reply('✅ El grupo fue *abierto*.');
    } else if (text === 'cerrar') {
        await conn.groupSettingUpdate(m.chat, 'announcement');
        m.reply('✅ El grupo fue *cerrado*.');
    } else {
        m.reply('❌ Usá: #grupo abrir ó #grupo cerrar');
    }
};

handler.command = /^grupo$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
