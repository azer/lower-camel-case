var test = require("prova");
var lcc = require('./');

test('lower camel case', function (t) {
  t.plan(3);
  t.equal(lcc('some words'), 'someWords');
  t.equal(lcc('dashed-words'), 'dashedWords');
  t.equal(lcc('under_scored_words'), 'underScoredWords');
});
