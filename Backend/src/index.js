const express = require('express');
///trazendo os routes de volta
const routes = require('./routes');
const cors = require('cors');
///
const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(3333);
/*
node index.js
npm install nodemon -D // usando o D para somente equanto estou desenvolvendo a aplicação
///

npm install knex --save
npm install sqlite3
npx knex init para icniar o knex

ctrl +" abrir terminal

Metodos HTTTP
GET: Buscar informação BACK-END - browser execura
POST: Criar informação BACK END
PUT: Alterar informação
DELETE: Deletar informação
*/

/**Querry builder ao inves de linguagem sql pura
 * knex.js
 *
 *
 */

//tipos de parametros
//Query: Parametros nomeados enviados na rota   após "?", geralmente- filtros, paginação "& "
//Route Params: Parametros usados para identificar recursos /:id --- /1
//Request Body: corpo da  requisição, utilizao para criar ou alterar recursos


//(Request, reponse) 
// Request - guardar dados da requisição usuario
// Response - Retornar uma reposta ao usuario



