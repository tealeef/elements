/**
 * Created by tom on 10/31/13.
 */

var assert = require('assert');
var request = require('supertest');

var host = 'localhost:3000';

describe('Status Codes', function(){

    it('/element/:id should have Status Code: 200 with id:1', function(done){
        request(host)
            .get('/element/1')
            .expect(200)
            .end(function(err) {
                if (err) return done(err);

                done();
            });
    });

});