import { MongoClient } from 'mongodb';
let url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test';
let connection = MongoClient.connect(url);
let collectionName = 'books';

export default () => {
    return {
        findAll: function () {
            return connection.then(function (db) {
                return db.collection(collectionName).find({}).toArray();
            });
        },
        stockUp: function (isbn, count) {
            return connection.then(function (db) {
                return db.collection(collectionName).updateOne({isbn: isbn}, {
                    isbn: isbn,
                    count: count

                }, {upsert: true});
            });
        },
        getCount: function (isbn) {
            return connection.then(function (db) {
                return db.collection(collectionName).find({"isbn": isbn}).limit(1).next();

            }).then(function (result) {
                if (result) {
                    return result.count;
                }
                return null;
            });
        }
    };
};
