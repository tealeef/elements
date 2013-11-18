/**
 * Created by tom on 10/31/13.
 */

var request = require('supertest');
var should = require('should');

var host = 'localhost:3000';

describe('Status Codes', function(){

    it('/element/:id should have Status Code: 200 with id:1', function(done){
        request(host)
            .get('/element/1')
            .end(function(err, res) {
                if (err) return done(err);

                res.should.have.status(200);

                done();
            });
    });

});