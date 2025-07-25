import fetch from 'node-fetch';

const handler = async (m, { text }) => {
    if (!text) return m.reply('❌ Escribí un texto o enlace para generar QR.\nEj: #qr https://google.com');

    try {
        const api = `https://api.qrserver.com/v1/create-qr-code/?size=300x300&data=${encodeURIComponent(text)}`;
        await conn.sendMessage(m.chat, { image: { url: api }, caption: '✅ Aquí está tu QR' }, { quoted: m });
    } catch (e) {
        m.reply('❌ Error al generar el código QR.');
    }
};

handler.command = /^crearqr$/i;
export default handler;
