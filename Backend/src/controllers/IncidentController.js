const connection = require('../database/connection');

module.exports = {
    async index(request, response) {
        const [count] = await connection('incidents').count();//numero de casos
        //console.log(count);
        const { page = 1 } = request.query;
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
            .limit(5)
            .offset((page - 1) * 5)
            .select(['incidents.*', 'ongs.name', 'ongs.email', 'ongs.whatsapp', 'ongs.city', 'ongs.uf']);
        response.header('X-Total-Count', count['count(*)']);
        return response.json(incidents);
    },

    async delete(request, response) {
        const { id } = request.params;
        const ong_id = request.headers.authorization;
        const incident = await connection('incidents').where('id', id).select('ong_id').first();
        if (incident.ong_id != ong_id) {
            return response.status(401).json({ error: 'Operação não autorizada' });
        }
        await connection('incidents').where('id', id).delete();
        return response.status(204).send();
    },

    async create(request, response) {
        const { title, description, value } = request.body;
        //informação sobre quem está logado
        const ong_id = request.headers.authorization;
        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id
        });
        return response.json({ id });
    }
};