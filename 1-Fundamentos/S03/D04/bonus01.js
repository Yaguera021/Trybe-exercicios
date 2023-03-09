let romaNumbers = {
    i: 1,
    v: 5,
    x: 10,
    l: 50,
    c: 100,
    d: 500,
    m: 1000, 
};
function romanoParaDecimal(number) {
    number = number.toLowerCase();
    let len = number.length;
    let add = romaNumbers[number[len - 1]];
    let current = romaNumbers[number[len - 1]];
  
    for (let i = 2; i <= len; i += 1) {
      let prox = romaNumbers[number[len - i]];
  
      if (current <= prox) {
        add += prox;
      } else {
        add -= prox;
      }
  
      current = prox;
    }
  
    return add;
  }
  console.log(romanoParaDecimal('VI')); // 6


