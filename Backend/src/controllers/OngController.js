const connection = require('../database/connection')
const crypto = require('crypto');
module.exports = {
    async index(request, response) {
        const ongs = await connection('ongs').select('*');
        return response.json(ongs);
    },
    async create(request, response) {
        //return response.send('Hello World');
        //const params = request.query; //para querry
        //const params = request.params;  //para Route Params
        //const data = request.body;
        const { name, email, whatsapp, city, uf } = request.body;
        const id = crypto.randomBytes(4).toString('HEX');
        //console.log(data);
        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf,
        })
        return response.json({ id });
    }
};