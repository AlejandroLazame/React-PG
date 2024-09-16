const { MongoClient } = require('mongodb');
require('dotenv').config();
const MONGO_DB = process.env.DB_HOST;
let db;

const connect = async () => {
    try{
        console.log('Attempting connect MONGO_DB...');
        const client = await MongoClient.connect(MONGO_DB);
        console.log('Connection established ✅');
        db = client.db();
    }catch(error){
        console.log(`    
            Mongo DB Host not found!
            please add DB_HOST environment variable to .env file
    
            exiting...
    
        `)
        process.exit(1)
    }

    return db;
}

module.exports = { connect }