const { findBy } = require('../controllers/utils/findBy');

module.exports = {
    addNewPlayer: async (args, db) => {
        const newPlayer = {
            ...args.input
        }
        const { insertedId } = await db.collection('player')
            .insertOne(newPlayer);    
        newPlayer._id = insertedId; //Adicionando Id ao Objeto NewPlayer antes de retornar
        return newPlayer;
    },
    currentUser: async (args, db, currentUser) => {
        const user = await findBy(new ObjectId(currentUser._id), '_id',db);
        return user[0];
    }
}