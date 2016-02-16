'use strict';

/* jshint ignore:start */
var expect = require('expect.js');
/* jshint ignore:end */
var _ = require('lodash');
var nj = require('../../src');

describe('images', function () {
    describe('read', function () {

        it('should exists', function(){
            expect(nj.images.read).to.be.ok();
        });

        it('should be able to convert Color images', function (done) {
            nj.images.read('data/five.png', function (err, img) {
                if (err){ return done(err); }
                expect(img).to.be.a(nj.NdArray);
                expect(img.shape).to.eql([28,28]);
                done();
            });
        });


        it('should be able to read PNG Color images from file', function (done) {
            nj.images.read('data/nodejs.png', function (err, img){
                if (err){ return done(err); }
                expect(img).to.be.a(nj.NdArray);
                expect(img.shape).to.eql([300, 600, 4]);
                done();
            });
        });
    });
});