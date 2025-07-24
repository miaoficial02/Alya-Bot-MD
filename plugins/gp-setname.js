const handler = async (m, { conn, text, isAdmin, isBotAdmin }) => {
    if (!m.isGroup) return m.reply('❌ Este comando solo funciona en grupos.');
    if (!isAdmin) return m.reply('❌ Solo los admins pueden usar este comando.');
    if (!isBotAdmin) return m.reply('❌ El bot necesita ser admin.');

    if (!text) return m.reply('❌ Escribí el nuevo nombre del grupo.\nEj: #setname Grupo nuevo');

    try {
        await conn.groupUpdateSubject(m.chat, text);
        m.reply('✅ Nombre del grupo actualizado correctamente.');
    } catch (err) {
        m.reply('❌ No se pudo cambiar el nombre del grupo.');
    }
};

handler.command = /^gpname$/i;
handler.group = true;
handler.admin = true;
handler.botAdmin = true;

export default handler;
