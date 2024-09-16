module.exports = {
    listCharacters: async (args, db) => {
        const characters = await db.collection('characters')
            .find()
            .toArray();
        return characters;
    },
    addNewCharacter: async (args, db) => {
        const newCharacter = {
            ...args.input
        }
        const { insertedId } = await db.collection('characters')
            .insertOne(newCharacter);
        newCharacter._id = insertedId;
        return newCharacter;
    }
}