import PhoneNumber from 'awesome-phonenumber';

let handler = async (m, { conn }) => {
  m.react('👑');

  let suittag = '542644131963'; // Tu número sin @s.whatsapp.net
  let correo = 'miacontact@gmail.com'; // Podés cambiarlo
  let botname = 'Alya-Bot-MD'; // Nombre de tu bot
  let packname = 'Bot Alya';
  let dev = 'Desarrollado por Xdd';
  let md = 'https://github.com/miaoficial02/Alya-Bot-MD'; // GitHub o página
  let channel = 'https://instagram.com/its.mia.oficial'; // Link alternativo

  let bioOwner = await conn.fetchStatus(`${suittag}@s.whatsapp.net`).catch(_ => 'Sin biografía');
  let bioBot = await conn.fetchStatus(conn.user.jid).catch(_ => 'Sin biografía');

  await sendContactArray(conn, m.chat, [
    [suittag, '👑 Propietario del Bot 👑', botname, 'No hacer spam', correo, '🇦🇷 Argentina', md, bioOwner?.status || 'Sin biografía'],
    [conn.user.jid.split('@')[0], '🤖 Bot Oficial 🤖', packname, dev, correo, '🌐 Online', channel, bioBot?.status || 'Sin biografía']
  ], m);
};

handler.help = ['owner', 'creador'];
handler.tags = ['info'];
handler.command = /^owner$/i;

export default handler;

async function sendContactArray(conn, jid, data, quoted, options) {
  if (!Array.isArray(data[0])) data = [data];
  let contacts = [];

  for (let [number, name, org, label, email, region, web, bio] of data) {
    number = number.replace(/[^0-9]/g, '');
    let vcard = `
BEGIN:VCARD
VERSION:3.0
N:;${name.replace(/\n/g, '\\n')};;;
FN:${name.replace(/\n/g, '\\n')}
item.ORG:${org}
item1.TEL;waid=${number}:${PhoneNumber('+' + number).getNumber('international')}
item1.X-ABLabel:${label}
item2.EMAIL;type=INTERNET:${email}
item2.X-ABLabel:Email
item3.ADR:;;${region};;;;
item3.X-ABADR:ac
item3.X-ABLabel:Región
item4.URL:${web}
item4.X-ABLabel:Web
item5.X-ABLabel:Bio
item5.NOTE:${bio}
END:VCARD`.trim();

    contacts.push({ vcard, displayName: name });
  }

  return await conn.sendMessage(jid, {
    contacts: {
      displayName: contacts.length > 1 ? 'Contactos' : contacts[0].displayName,
      contacts
    }
  }, {
    quoted,
    ...options
  });
}
