function sum(...a){
  
  return (...b)=>{
    return b.length === 0 ? a.reduce((k,l)=>k+l,0) : sum(...a,...b)
  }
}

console.log(sum(1,2)(3,7)())


function sumWithoutBracket(...a){
  let currentSum = a.reduce((acc,curr)=>acc+curr,0);
  function nextSum(...b){
    return sumWithoutBracket(currentSum, ...b);
  }
nextSum.toString = ()=> currentSum;
nextSum.valueOf = ()=> currentSum;

return nextSum;
}
let result = sumWithoutBracket(1)(1,4);
console.log(result+0)
