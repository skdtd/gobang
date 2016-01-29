var e = require("../js/evaluate.js");
var S = require("../js/score.js");
var assert = require('assert');

var b

describe('test evalute', function() {
  it(`test one`, function() {
    b = [
      [0, 0, 0],
      [0, 2, 0],
      [0, 0, 0],
    ];
    assert.equal(e(b), 4*S.ONE);

    b = [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    assert.equal(e(b), 4*S.ONE * -1);

    b = [
      [0, 2, 0],
      [0, 1, 0],
      [0, 0, 0],
    ];
    assert.equal(e(b), (S.ONE + 2*S.BLOCKED_ONE) - (3*S.ONE + S.BLOCKED_ONE));
  });

  it(`test two`, function() {
    b = [
      [0, 0, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b), S.TWO + 6*S.BLOCKED_ONE);

    b = [
      [0, 0, 0, 0, 0, 0],
      [0, 0, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b), S.TWO + 6*S.ONE);
  });

  it(`test three`, function() {
    b = [
      [0, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b), S.THREE + 9*S.BLOCKED_ONE);

    b = [
      [0, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b), S.THREE + 9*S.ONE);
  });


  it(`test four `, function() {
    b = [
      [0, 2, 2, 2, 2, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b), S.FOUR + 12*S.BLOCKED_ONE);

    b = [
      [0, 0, 0, 0, 0, 0],
      [0, 2, 2, 2, 2, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b), S.FOUR + 12*S.ONE);
  });



  it(`test five`, function() {
    b = [
      [0, 2, 2, 2, 2, 2],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
    ];
    assert.equal(e(b), S.FIVE + 14*S.BLOCKED_ONE);

  });
});
