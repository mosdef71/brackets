module.exports = function heck(str, bracketsConfig){
  const OPEN_BRACKETS = ["(", "[", "{"];
  const BRACKETS_DICT = {
    ")" : "(",
    "}" : "{",
    "]" : "[",
    "|" : "|",
  };
  let stack = [];
  let consolidStr = [str, bracketsConfig].flat(Infinity).join("");

  for (let i = 0; i < consolidStr.length; i++){
    let currSymbol = consolidStr[i];
    if (OPEN_BRACKETS.includes(currSymbol)){
      stack.push(currSymbol);
    } else {
        if (stack.length === 0) {
          return false;
        }
        let lastSymbol = stack[stack.length - 1];
        if (BRACKETS_DICT[currSymbol] === lastSymbol) {
          stack.pop();
        } else { 
          return false
        }
    }
  }
  return stack.length === 0;
}