const { MongoClient } = require('mongodb');
// or as an ES Module:
// import { MongoClient } from 'mongodb';

// Connection URL:  username + password + cluster
// if password contain any special character so, 
// @ === %40
// @ == hexadecimal: 0x40
const url = "mongodb+srv://url"        // Connection url
const client = new MongoClient(url);

// Database Name:
const dbName = "CoderArmy";

async function main() {
    // Use connect method to connect to the server
    await client.connect();         // Connect backend to the cluster
    console.log("Connected successfully to server");
    
    const db = client.db(dbName);       // Connect to the database
    const collection = db.collection('user');      // Connnect to the collection 


    // Find Document or Get all Documents:
    // const findResult = await collection.find({}).toArray();
    
//    const findResult = collection.find({});         // collection.find() --> No network call  and  Output: FindCursor object
    
//    const ans = await findResult.toArray();         // toArray() --> network call and fetch all the data from database.
    // This is bad practice because this takes all the data from database into our system.

    // FindCursor: Working:- Cursor points every document one by one through network call 
/*    for await (const doc of findResult) {
        console.log(doc);
    }
*/

    // console.log('Found documents =>', ans);


    // Insert One Document:
    // const insertResult = await collection.insertOne({ name: "Sameer" });
    // console.log('Inserted documents =>', insertResult);
    
    // Insert Many Document: 
    // const insertResult = await collection.insertMany([{ a: 1 }, { a: 2 }, { a: 3 }]);
    // console.log('Inserted documents =>', insertResult);


    // Filter Document:
    const filteredDocs = await collection.find({ a: 3 }).toArray();
    console.log('Found documents filtered by { a: 3 } =>', filteredDocs);   

    return 'done.';
}


main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());  