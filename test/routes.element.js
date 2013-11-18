/**
 * Created by tom on 10/31/13.
 */

var request = require('supertest');
var should = require('should');

var host = 'localhost:3000';

describe('/element/:id', function(){

    it('should have Text: "element 123" with id:123', function(done){
        request(host)
            .get('/element/123')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);

                should.exist(res);
                res.should.have.property('text');
                res.text.should.equal('element 123');

                done();
            });
    });

    it('should have Text: "element 987" with id:987', function(done){
        request(host)
            .get('/element/987')
            .expect(200)
            .end(function(err, res) {
                if (err) return done(err);

                should.exist(res);
                res.should.have.property('text');
                res.text.should.equal('element 987');

                done();
            });
    });

});