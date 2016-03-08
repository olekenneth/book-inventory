import init from '../app';
import request from 'supertest';
import mock from './mock-books';

let app = init(mock());

describe('/stock', function(){
    it('POST', function(done){
        let data = {
            isbn: '1234',
            count: 5
        };

        request(app)
            .post('/stock')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(201)
            .end(done);
    });

    it('GET', function(done){
        let data = [{
            isbn: '1234',
            count: 5
        }];

        request(app)
            .get('/stock')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .expect(data)
            .end(done);
    });
});
