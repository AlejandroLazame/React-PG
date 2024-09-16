module.exports = {
    findBy: async (value, field='id', db, table='users') => {
        const data = await db
            .collection(table)
            .find({
                [field]: value
            })
            .toArray();    
        return data;
    }
};