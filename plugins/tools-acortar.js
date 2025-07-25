import fetch from 'node-fetch';

const handler = async (m, { text }) => {
    if (!text) return m.reply('❌ Usalo así: #acortar https://example.com');

    if (!text.startsWith('http')) return m.reply('❌ Escribí una URL válida que empiece con http o https.');

    try {
        const res = await fetch(`https://api.shrtco.de/v2/shorten?url=${encodeURIComponent(text)}`);
        const json = await res.json();

        if (!json.ok) throw new Error('No se pudo acortar la URL.');

        const short = json.result.full_short_link;
        m.reply(`🔗 Enlace acortado:\n${short}`);
    } catch (e) {
        m.reply(`❌ Error al acortar el enlace: ${e.message}`);
    }
};

handler.command = /^acortar$/i;
export default handler;
