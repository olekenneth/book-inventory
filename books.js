import { find, findOne, updateOne } from './db';

export const stockUp = (isbn, count) => {
    return updateOne({ isbn: isbn }, {isbn: isbn, count: count });
};

export const getCount = (isbn) => {
    return findOne({ isbn: isbn });
};

export const findAll = () => {
    return find({});
};
