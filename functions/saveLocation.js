const fetch = require('node-fetch');

exports.handler = async function(event) {
    const JSONBIN_API_KEY = process.env.JSONBIN_API_KEY;
    const JSONBIN_URL = 'https://api.jsonbin.io/v3/b/67ffa03c8960c979a58666af';

    try {
        const { latitude, longitude, timestamp } = JSON.parse(event.body);

        // Obter os dados existentes
        const response = await fetch(JSONBIN_URL, {
            headers: { 'X-Master-Key': JSONBIN_API_KEY }
        });
        const data = await response.json();
        let locations = data.record?.locations || [];

        // Adicionar nova localização
        locations.push({ latitude, longitude, timestamp });

        // Salvar de volta
        await fetch(JSONBIN_URL, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'X-Master-Key': JSONBIN_API_KEY
            },
            body: JSON.stringify({ locations })
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Localização salva com sucesso' })
        };
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erro ao salvar localização' })
        };
    }
};