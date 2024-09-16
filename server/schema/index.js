const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeTypeDefs } = require('@graphql-tools/merge');
const { print } = require('graphql');


const typeDefs = loadFilesSync(`${__dirname}/*.graphql`, { recursive: true });
const mergedTypeDefs = mergeTypeDefs(typeDefs);

/* const pritedTypeDefs = print(mergedTypeDefs);
console.log(pritedTypeDefs);
 */
module.exports = mergedTypeDefs;