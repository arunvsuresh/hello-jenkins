var request = require('supertest');

var app = require('../app.js');

describe('/ GET', function(){
	it('should hit the right route', function(done){
		request(app).get('/').expect('Hello world!', done);
	});
});
