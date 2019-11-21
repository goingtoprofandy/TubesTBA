const allOfOperand = [
  'p',
  'q',
  'r',
  's',
  'not',
  'and',
  'or',
  'xor',
  'iff',
  'if',
  'then',
  '(',
  ')'
];

const operand = [
  ['p', 'q', 'r', 's'],
  'not',
  'and',
  'or',
  'xor',
  'iff',
  'if',
  'then',
  '(',
  ')'
];

function removeSpace(data) {
  const datas = [];
  let newData = data.split(' ');

  for (let index = 0; index < newData.length; index++) {
    const element = newData[index];
    if (element.length == 1) {
      if (operand[0].includes(element)) datas.push(1);
      else break;
    } else if (operand.includes(element)) {
      const tokenMin1 = operand.indexOf(element);
      datas.push(tokenMin1 + 1);
    } else break;
  }
  console.log(newData);
  console.log(datas);
}

removeSpace('p or or p');
// removeSpace('pq and rs');
