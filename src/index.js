module.exports = function check(str, bracketsConfig) {
  // return str === str.split('').reverse().join('') 
  // 9 из 20 метод полиндрома 

for(let i = 0; i < str.length; i++) {
  bracketsConfig.forEach( el => {
    if(str[i] === el[0] && str[i + 1] === el[1]) {
      str = str.slice(0, i) + str.slice(i + 2, str.length)
      i -= 2
    }
  })
}

if (str.length === 0) {
  return true;
} else {
  return false;
}

}
