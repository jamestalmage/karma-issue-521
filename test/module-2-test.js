if (typeof define !== 'function') {
    var define = require('amdefine')(module);
}

define(['chai','module-2'],
function(chai,module2){
    'use strict';

    var expect = chai.expect;

    describe('module 2',function(){

        it('should be goodbye',function(){
            expect(module2).to.equal('goodbye');
        });

    });



});
