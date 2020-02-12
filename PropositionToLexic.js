// State Group For Tokenize
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

console.log(states[1][0]);
function splitDataWithSpace(data) {
  var newData = [];
  var temp = '';
  for (var i = 0; i < data.length; i++) {
    if (data[i] != ' ') temp += data[i];
    else {
      newData.push(temp);
      temp = '';
    }
    if (i == data.length - 1) {
      newData.push(temp);
    }
  }
  return newData;
}

// Encode Data From Input To Token Lexic
function encodeToLexic(data) {
  var cleanData = splitDataWithSpace(data);
  var encodeData = cleanData.map(function(item) {
    var temp = -1;
    states.forEach(function(params, index) {
      var status = false;
      for (var i = 0; i < params.length; i++) {
        status = stateValidation(params[i], item);
      }
      if (status) temp = index;
    });
    return temp + 1;
  });

  var lexicFixed = [];
  for (var i = 0; i < encodeData.length; i++) {
    if (encodeData[i] != -1) lexicFixed.push(encodeData[i]);
    else {
      lexicFixed.push('Error');
      break;
    }
  }
  return lexicFixed;
}

// Check Is Validate For State Or Not
function stateValidation(data, inputs) {
  var status = true;
  if (data.length == inputs.length) {
    for (var i = 0; i < inputs.length; i++) {
      if (data[i] != inputs[i]) {
        status = false;
        break;
      }
    }
  } else {
    status = false;
  }
  return status;
}

// Check Is Validate From Tokenize

// Main
var input = 'p and q or r';
encodeToLexic(input);
