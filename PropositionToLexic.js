var states = [
  ['p', 'q', 'r', 's'],
  ['not'], 
  ['and'], 
  ['or'], 
  ['xor'], 
  ['iff'],
  ['if'], 
  ['then'],
  ['('], 
  [')']
];

function splitDataWithSpace(data) {
  var newData = [];
  var temp = "";
  for (var i = 0; i < data.length; i++) {
    if (data[i] != " ") temp += data[i];
    else {
      newData.push(temp);
      temp = "";
    }
    if (i == (data.length - 1)) {
      newData.push(temp);
    }
  }
  return newData;
}

function encodeToLexic(data) {
  var cleanData = splitDataWithSpace(data);
  var encodeData = cleanData.map(function(item) {
    var temp = 0;
    states.forEach(function(params, index) {
      var status = false;
      for (var i = 0; i < params.length; i++) {
        if (params[i] == item) status = true;
      }
      if (status) temp = index;
    });
    return (temp + 1);
  });
  console.log(encodeData);
}

// Main
var input = "p and q or r";
encodeToLexic(input);
