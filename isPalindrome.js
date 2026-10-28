let isPalindrome = function(s){
s = s.toLowerCase();
let filteredString = "";
for(let i=0; i<s.length;i++){
  if(s[i].match(/[a-z0-9]/i)){
    filteredString = filteredString + s[i]
  }
}
let rev = filteredString.split("").reverse().join("");
return filteredString == rev;
}

console.log(isPalindrome("a man nam: A"))

let isPalindrome2Pointer = function(s){
  for(let i=0; i<s.length / 2; i++){
    if(s[i] != s[s.length - 1 - i]){
      return false;
    }
  }
  return true
}


console.log("isPalindrome2Pointer",isPalindrome2Pointer("macarraca"))