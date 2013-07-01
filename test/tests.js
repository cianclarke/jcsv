var jcsv = require ('../index.js'),
assert = require('assert'),
data = require('./data.json');

jcsv(data, { separator : ',', newline : ";\n", headers : true }, function(err, res){
  assert.ok(!err);
  assert.ok(typeof res === "string");
  var resStr = "a,b,c;\n1,2,;\n3,4,5;\n";
  assert.ok(res === resStr);

  console.log(res);

  console.log("Tests passed ok!");
});