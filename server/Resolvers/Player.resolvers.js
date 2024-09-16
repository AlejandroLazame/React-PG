const controller = require('../controllers/Player.controller');
module.exports = {
    Query: {
        me: async (_, args, db) => {
            return await controller.currentUser();
        }
    },
    Mutation: {
        addNewPlayer: async (_, args, db) => {
            return await controller.addNewPlayer(args, db);
        }
    }
}