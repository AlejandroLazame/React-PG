const controller = require('../controllers/Character.controller');
module.exports = {
    Query: {
        characters: async (_, args, db) => {
            return await controller.listCharacters(args, db);
        }
    },
    Mutation: {
        addNewCharacter: async (_, args, db) => {
            return await controller.addNewCharacter(args, db);
        }
    }
}