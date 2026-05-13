console.log(
    (BigInt(require('fs').readFileSync(0, 'utf8').trim()) ** 2n).toString()
);
