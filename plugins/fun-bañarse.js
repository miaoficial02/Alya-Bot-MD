import axios from 'axios';

let handler = async (m, { conn, usedPrefix }) => {
    let who;
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false;
    else who = m.chat;
    if (!who) throw 'Etiqueta o menciona a alguien';

    let user = global.db.data.users[who];
    let name = conn.getName(who);
    let name2 = conn.getName(m.sender);
    m.react('🛀');
    let str = `\`${name2}\` está bañando a \`${name}\``.trim();

    if (m.isGroup) {
        try {
            // Obtener el archivo JSON desde GitHub
            const response = await axios.get('https://raw.githubusercontent.com/Elpapiema/CharHub-Store/refs/heads/main/video_json/SFW/bañarse.json');
            const videos = response.data.videos;

            // Seleccionar un video aleatorio
            const video = videos[Math.floor(Math.random() * videos.length)];

            // Enviar el video
            conn.sendMessage(m.chat, { video: { url: video }, gifPlayback: true, caption: str, mentions: [m.sender] });
        } catch (error) {
            console.error('Error al obtener los videos:', error);
            m.reply('Hubo un error al obtener los videos.');
        }
    }
};

handler.help = ['bathe @tag'];
handler.tags = ['fun'];
handler.command = ['bathe', 'bañar'];
handler.group = true;

export default handler;