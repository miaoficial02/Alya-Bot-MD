const handler = async (m, { conn, text, isAdmin, isBotAdmin }) => {
    if (!m.isGroup) return m.reply('❌ Este comando solo funciona en grupos.');
    if (!isAdmin) return m.reply('❌ Solo los admins pueden usar este comando.');
    if (!isBotAdmin) return m.reply('❌ El bot necesita ser admin.');

    if (!text) return m.reply('❌ Escribí la nueva descripción del grupo.\nEj: #setdesc Bienvenidos a todos.');

    try {
        await conn.groupUpdateDescription(m.chat, text);
        m.reply('✅ Descripción actualizada correctamente.');
    } catch (err) {
        m.reply('❌ No se pudo cambiar la descripción.');
    }
};

handler.command = /^gpdesc$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
