import { MongoClient } from 'mongodb';

let promise = null;
let connect = () => {
    console.log('MONGODB:', process.env.MONGOLAB_URI);

    if (promise) {
        return promise;
    }

    promise = MongoClient.connect(process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test')
        .then((db) => {
            return db.collection('books');
        });

    return promise;
};

export const find = (where) => {
    return connect().then((db) => {
        return db.find(where).toArray();
    });
};

export const findOne = (where) => {
    return connect().then((db) => {
        return db.findOne(where);
    });
};

export const updateOne = (where, data) => {
    return connect().then((db) => {
        return db.updateOne(where, data, { upsert: true});
    });
};
