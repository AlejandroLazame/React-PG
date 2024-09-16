const { loadFilesSync } = require('@graphql-tools/load-files');
const { mergeResolvers } = require('@graphql-tools/merge');

const resolvers = loadFilesSync(`${__dirname}/*.resolvers.js`);
const mergedResolvers = mergeResolvers(resolvers);

module.exports = mergedResolvers;