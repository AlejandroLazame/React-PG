//Importando dependencias
const express = require('express'),
{ createHandler } = require('graphql-http/lib/use/express'),
{ connect } = require('./controllers/utils/connectOnMongo'),
{ applyMiddleware } = require('graphql-middleware'),
{ ruruHTML } = require('ruru/server');
//Importando Typedefs, Resolvers e Permissions
const typeDefs = require('./schema'),
resolvers = require('./resolvers'),
{ makeExecutableSchema } = require('@graphql-tools/schema');
//Funcao imediata para iniciar o servico, realiza conexao ao banco e monta o schema
(async () => {
    //Montando schema GraphQl
    const unsafeSchema = makeExecutableSchema({
        typeDefs,
        resolvers
    });
    //Iniciando Express
    const app = express();
    //Conectando no banco de dados
    const db = await connect();
    //Gerando rota do graphql usando express
    app.all('/graphql', createHandler({
        schema: unsafeSchema,
        context: db
    }));
    //Definindo rota do playground GraphQl
    app.get('/playground', (_req, res) => {
        res.type('html');
        res.end(ruruHTML({endpoint: '/graphql'}));
    });
    //Definido porta da aplicacao
    app.listen(4000, () => console.log('🤖 Servidor rodando em http://localhost:4000/graphql\n🎪 Playground rodando em http://localhost:4000/playground'));
})();