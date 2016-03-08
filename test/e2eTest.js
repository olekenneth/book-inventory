import init from '../app';
import request from 'supertest';
import mock from './mock-books';

let app = init(mock());

describe('/stock', function(){
    it('POST data', function(done){
        let data = {
            isbn: '1234',
            count: 5
        };

        request(app)
            .post('/stock')
            .send(data)
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200)
            .end(done);
    });

    // it('get an error when not sending isbn', function(done){
    //     request(app)
    //         .post('/stock')
    //         .set('Accept', 'application/json')
    //         .expect(JSON.stringify('ISBN is required'))
    //         .expect(500)
    //         .end(done);
    // });
});
