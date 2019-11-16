const assert = require('assert');
const arraysToTest = require('../arraysToTest.js');
describe('Array', function(){
    describe('#indexOf', function(){
        it('should return -1 when the value is not present', function(){
            assert.equal(arraysToTest.firstArray.indexOf(28), -1);
        });
    });
});

describe('Array', function(){
    describe('#indexOf', function(){
        it('should return the index of the value if present', function(){
            assert.equal(arraysToTest.firstArray.indexOf(15), 2)
        })
    })
})