const zonas = {
    mexico: 'America/Mexico_City',
    argentina: 'America/Argentina/Buenos_Aires',
    colombia: 'America/Bogota',
    chile: 'America/Santiago',
    peru: 'America/Lima',
    venezuela: 'America/Caracas',
    uruguay: 'America/Montevideo',
    bolivia: 'America/La_Paz',
    paraguay: 'America/Asuncion',
    ecuador: 'America/Guayaquil',
    panama: 'America/Panama',
    cuba: 'America/Havana',
    'republica dominicana': 'America/Santo_Domingo',
    guatemala: 'America/Guatemala',
    honduras: 'America/Tegucigalpa',
    nicaragua: 'America/Managua',
    costa_rica: 'America/Costa_Rica',
    el_salvador: 'America/El_Salvador'
};

const handler = async (m, { text }) => {
    if (!text) {
        return m.reply('❌ Usa: #tiempo <país>\nEj: #tiempo México');
    }

    const zona = zonas[text.trim().toLowerCase()];
    if (!zona) {
        return m.reply('❌ País no reconocido o no soportado. Intenta con otro.\nEj: Argentina, México, Colombia...');
    }

    const hora = new Date().toLocaleString('es-ES', { timeZone: zona, hour12: true });
    m.reply(`🕒 Hora actual en *${text.trim()}*:\n${hora}`);
};

handler.command = /^tiempo$/i;
export default handler;
