const handler = async (m, { text }) => {
    if (!text) return m.reply('❌ Usa: #calcular <operación>\nEjemplo: *#calcular 4+4/2*');

    try {
        const sanitized = text.replace(/[^-()\d/*+.]/g, '');
        const result = eval(sanitized);
        m.reply(`🧮 Resultado:\n*${text.trim()} = ${result}*`);
    } catch (e) {
        m.reply('❌ Error en la operación. Asegurate de escribir una fórmula válida.');
    }
};

handler.command = /^calcular$/i;
export default handler;
