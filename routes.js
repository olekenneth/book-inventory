export default (stockRepo) => {
    return {
        stockUp: (req, res, next) => {
            let isbn = req.body.isbn;
            let count = req.body.count;

            if (!isbn) {
                throw new Error('ISBN is required');
            }
            if (!count) {
                throw new Error('Count is required');
            }

            isbn = '' + isbn;

            return stockRepo.stockUp(isbn, count)
                .then(() => {
                    return res.status(201).json({ count: count });
                })
                .catch(next);
        },
        getAll: (req, res, next) => {
            return stockRepo.findAll()
                .then((items) => {
                    return res.json(items);
                }).catch(next);
        },
        getCount: (req, res, next) => {
            return stockRepo.getCount('' + req.params.isbn)
                .then((count) => {
                    if (!count) {
                        throw new Error('No book with ISBN: ' + req.params.isbn);
                    }
                    return res.format({
                        html: function(){
                            return res.send('<p>Count: ' + count + '</p>');
                        },

                        json: function(){
                            return res.json({ count: count });
                        }
                    });
                })
                .catch(next);
        }
    };
};
