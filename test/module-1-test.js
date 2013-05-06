if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['chai','module-1'],
function(chai,module1){
    'use strict';

    var expect = chai.expect;


    describe('module 1',function(){

        it('should be hello',function(){
            expect(module1).to.equal('hello');


        })

    });



});
