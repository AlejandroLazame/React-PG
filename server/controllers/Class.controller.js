module.exports = {
    listClasses: async (args, db) => {
        const classes = await db.collection('class')
            .find()
            .toArray();
        return classes;
    },
    addNewClass: async (args, db) => {
        const newClass = {
            ...args.input
        }
        const { insertedId } = await db.collection('class')
            .insertOne(newClass);
        newClass._id = insertedId;
        return newClass;
    }
}