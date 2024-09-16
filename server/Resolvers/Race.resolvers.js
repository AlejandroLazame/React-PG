const controller = require('../controllers/Race.controller');
module.exports = {
    Query: {
        races: async (_, args, db) => {
            return await controller.listRaces(args, db)
        }
    },
    Mutation: {
        addNewRace: async (_, args, db) => {
            return await controller.addNewRace(args, db)
        }
    }
}