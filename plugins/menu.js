import fs from 'fs';

const filePath = './database/personalize.json';

let handler = async (m, { conn }) => {
    try {
        const data = JSON.parse(fs.readFileSync(filePath));

        // Cargar datos globales y predeterminados
        const globalConfig = data.global;
        const defaultConfig = data.default;

        const botName = globalConfig.botName || defaultConfig.botName;
        const currency = globalConfig.currency || defaultConfig.currency;
        const videos = globalConfig.videos.length > 0 ? globalConfig.videos : defaultConfig.videos;

        const randomVideoUrl = videos[Math.floor(Math.random() * videos.length)];

        const menuMessage = `
𔓕꯭  ꯭ 𓏲꯭֟፝੭ *${botname}* 𓏲꯭֟፝੭ ꯭  ꯭𔓕

「💫」 𝐀𝐪𝐮𝐢 𝐭𝐢𝐞𝐧𝐞𝐬 𝐦𝐢 𝐥𝐢𝐬𝐭𝐚 𝐝𝐞 𝐜𝐨𝐦𝐚𝐧𝐝𝐨𝐬! 

┏━━⪩「 𝐈𝐍𝐅𝐎 ᚐ 𝐁𝐎𝐓 」⪨
┃❂ ⧼👑⧽ *Creador:* ${dev}
┃❂ ⧼🔱⧽ *Modo:* Publico
┃❂ ⧼🌠⧽ *Baileys:* Multi Device
┃❂ ⧼🤖⧽ *Version:* ${vs}
┃❂ ⧼💰⧽ *Moneda:* ¥ ${currency}
┗━━━━━━━━━━━━━━━━━⪩

*𝐕𝐢𝐬𝐢𝐭𝐚 𝐥𝐚𝐬 𝐏𝐚𝐠𝐢𝐧𝐚𝐬 𝐎𝐟𝐢𝐜𝐢𝐚𝐥𝐞𝐬 𝐃𝐞 𝐥𝐚 𝐁𝐨𝐭*

☆ *𝐏𝐀𝐆𝐈𝐍𝐀 𝐋𝐔𝐍𝐀-𝐁𝐎𝐓*
𝐋𝐢𝐧𝐤: https://bit.ly/4lzTWva
☆ *𝐏𝐀𝐆𝐈𝐍𝐀 𝐑𝐄𝐃𝐄𝐒*
𝐋𝐢𝐧𝐤: https://atom.bio/itss_mia_oficial

┏━━❃「  𝐏𝐄𝐑𝐒𝐎𝐍𝐀𝐋𝐈𝐙𝐀𝐂𝐈𝐎𝐍  」❃
┃✦ .setname
┃✧ .setbanner
┃✦ .setmoneda
┃✧ .viewbanner
┃✦ .deletebanner
┃✧ .resetpreferences
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃「  𝐆𝐑𝐔𝐏𝐎𝐒  」❃
┃✦ .kick
┃✧ .grupo abrir/cerrar
┃✦ .promote
┃✧ .demote
┃✦ .link
┃✧ .gpname
┃✦ .gpdesc
┃✧ .tagall
┃✦ .tag
┃✧ .getplugin
┃✦ .getpack
┃✧ .store
┃✦ .status
┃✧ .ping
┃✦ .on / .off 
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃「  𝐑𝐀𝐍𝐃𝐎𝐌  」❃
┃✦ .rw ➩ .rollwaifu
┃✧ .winfo
┃✦ .c ➩ .claim
┃✧ .harem
┃✦ .addrw
┃✧ .alya ➩ .bot
┃✦ .kaori
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃「  𝐃𝐄𝐒𝐂𝐀𝐑𝐆𝐀𝐒  」❃
┃✦ .play ➩ nombre de la canción  (audio)
┃✧ .play2 ➩ nombre de la canción  (video)
┃✦ .tt ➩ .tiktok ➩ enlace de TikTok 
┃✧ .ttp ➩ .ttph ➩ enlace de tiktok slides 
┃✦ .yt ➩ .ytv ➩ enlace de YouTube 
┃✧ .yta ➩ enlace de YouTube 
┃✦ .sp ➩ .Spotify enlace de Spotify 
┃✧ .fb ➩ link de facebook  (video)
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃「 𝐉𝐔𝐄𝐆𝐎𝐒 𝐑𝐏𝐆 」❃
┃✦ .w ➩ .work
┃✧ .slut 
┃✦ .robar 
┃✧ .deposit (cantidad)
┃✦ .retirar (cantidad)
┃✧ .transferir (cantidad) @usuario
┃✦ .perfil
┗━━━━━━━━━━━━━━━━━⪩
┏━━❃「 𝐑𝐄𝐀𝐂𝐂𝐈𝐎𝐍𝐄𝐒 𝐀𝐍𝐈𝐌𝐄 」❃
┃ ✦ .abrazar 
┃ ✧ .aburrido 
┃ ✦ .bañarse 
┃ ✧ .bleh 
┃ ✦ .comer 
┃ ✧ .dance 
┃ ✦ .enojado 
┃ ✧ .feliz 
┃ ✦ .kiss 
┃ ✧ .love 
┃ ✦ .matar 
┃ ✧ .morder 
┃ ✦ .nalguear 
┃ ✧ .punch 
┃ ✦ .saludar 
┃ ✧ .bofetada 
┃ ✦ .dormir 
┗━━━━━━━━━━━━━━━━━⪩
┏━━❃「 𝐇𝐄𝐑𝐑𝐀𝐌𝐈𝐄𝐍𝐓𝐀𝐒 」❃
┃✦  .gemini
┗━━━━━━━━━━━━━━━━━⪩

┏━━❃「 𝐎𝐖𝐍𝐄𝐑 」❃
┃ ✦ .update 
┃ ✧ .dsowner ➩ .purgar 
┃ ✦ .join 
┃ ✧ .ono / .offoS
┗━━━━━━━━━━━━━━━━━⪩
> ${copy} Hecho por ${dev}
`;

        await conn.sendMessage(
            m.chat,
            {
                video: { url: randomVideoUrl },
                gifPlayback: true,
                caption: menuMessage,
                mentions: [m.sender]
            }
        );
    } catch (error) {
        conn.reply(m.chat, `❌ Error al cargar el menú: ${error.message}`, m);
    }
};

handler.help = ['menu'];
handler.tags = ['info'];
handler.command = /^(menu)$/i;

export default handler;

/* estilos de menu

┎───•✧•───⌬
┃
┖───•✧•  


╭──〕ᴀʟɪsᴀ ʙᴏᴛ - ᴍᴅ 〕
├̟̇❀ 𝑫𝒆𝒔𝒂𝒓𝒓𝒐𝒍𝒍𝒂𝒅𝒐 𝑷𝒐𝒓 : 
├̟̇❀ 𝑬𝒎𝒎𝒂 𝓥𝓲𝓸𝓵𝓮𝓽'𝓼 𝓥𝓮𝓻𝓼𝓲𝒐́𝓷
├̟̇❀ 𝑽𝒆𝒓𝒔𝒊𝒐́𝒏 : 
╰──────────╼*/
