import fetch from 'node-fetch';

const handler = async (m, { text }) => {
    if (!text.includes('|')) {
        return m.reply('❌ Usa el comando así:\n#traducir <texto>|<idioma destino>\nEj: *#traducir Hola mundo|en*');
    }

    const [query, lang] = text.split('|').map(t => t.trim());
    if (!query || !lang) return m.reply('❌ Especificá bien el texto y el idioma.\nEjemplo: *#traducir Hola|en*');

    try {
        const res = await fetch('https://libretranslate.de/translate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                q: query,
                source: 'auto',
                target: lang,
                format: 'text'
            })
        });

        const json = await res.json();
        if (json.error) throw new Error(json.error);

        m.reply(`🌍 Traducción a *${lang}*:\n\n${json.translatedText}`);
    } catch (e) {
        m.reply(`❌ Error al traducir: ${e.message}`);
    }
};

handler.command = /^traducir$/i;
export default handler;
