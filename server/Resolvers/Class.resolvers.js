const controller = require('../controllers/Class.controller');
module.exports = {
    Query: {
        classes: async (_, args, db) => {
            return await controller.listClasses(args, db);
        }
    },
    Mutation: {
        addNewClass: async (_, args, db) => {
            return await controller.addNewClass(args, db);
        }
    }
}