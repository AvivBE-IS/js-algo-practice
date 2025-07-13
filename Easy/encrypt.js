function encrypt(str) {
  if (str === '') return str;

  const vowelMap = {
    a: '0',
    e: '1',
    i: '2',
    o: '2',
    u: '3'
  };

  let newStr = ``;

  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i]; 
    if (vowelMap.hasOwnProperty(char)) {
      newStr += vowelMap[char];
    } else {
      newStr += char;
    }
  }

  return newStr + "aca";
}

exports.solution = encrypt;
