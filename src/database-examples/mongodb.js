import { MongoClient } from 'mongodb';
import fsBase from 'fs';
const fs = fsBase.promises;
import path from 'path';

const execute = async () => {
    const client = await MongoClient.connect(
        'mongodb://localhost:27017',
        { useUnifiedTopology: true, useNewUrlParser: true },
    );

    const db = client.db('node-course-db');

    const newProductsString = await fs.readFile(path.join(__dirname, 'new-products.txt'), 'utf8');
    const productNames = newProductsString.split(',');

    for (let name of productNames) {
        await db.collection('products').insertOne({
            name,
        });
    }

    const products = await db.collection('products').find({}).toArray();
    console.log(products);
    console.log("Done inserting products!");

    client.close();
}

execute();