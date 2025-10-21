const fs = require('fs');
const [a, b] = fs.readFileSync(0, 'utf8').trim().split(' ').map(Number);

console.log(a + b);

/*

  Mobodo o'zingizni qiynamoqchi bo'lsangiz:

  let i = a.length - 1;
  let j = b.length - 1;
  let carry = 0;
  let result = [];

  while (i >= 0 || j >= 0 || carry) {
      const aDigit = i >= 0 ? +num1[i--] : 0;
      const bDigit = j >= 0 ? +num2[j--] : 0;

      const sum = aDigit + bDigit + carry;
      result.push(sum % 10);
      carry = Math.floor(sum / 10);
  }

  console.log(result.reverse().join(''));

*/
