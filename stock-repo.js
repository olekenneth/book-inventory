let url = process.env.MONGOLAB_URI || 'mongodb://localhost:27017/test';
let MongoClient = require('mongodb').MongoClient;
let connection = MongoClient.connect(url);

export default () => {
    return {
        findAll: function () {
            return connection.then(function (db) {
                return db.collection('books').find({}).toArray();
            });
        },
        stockUp: function (isbn, count) {
            return connection.then(function (db) {
                return db.collection('books').updateOne({isbn: isbn}, {
                    isbn: isbn,
                    count: count

                }, {upsert: true});
            });
        },
        getCount: function (isbn) {
            return connection.then(function (db) {
                return db.collection('books').find({"isbn": isbn}).limit(1).next();

            }).then(function (result) {
                if (result) {
                    return result.count;
                }
                return null;
            });
        }
    };
};
