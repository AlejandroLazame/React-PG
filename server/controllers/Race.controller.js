module.exports = {
    listRaces: async () => {
        const races = await db.collection('races')
            .find()
            .toArray();
        return races;
    },
    addNewRace: async (args, db) => {
        const newRace = {
            ...args.input
        }
        const { insertedId } = await db.collection('races')
            .insertOne(newRace);
        newRace._id = insertedId;
        return newRace;
    }   
}