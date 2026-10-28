let largestOddNumber = function(num){
//num = num.split("")
  let n = num.length - 1;
  for(let i=n; i>=0; i--){
    if(Number(num[i])%2 === 1){
      return num.substring(0, i+1);
    }
  }
return "";
}

console.log(largestOddNumber("2801"))