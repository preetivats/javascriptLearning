function findMaxFrequesncy(word){
  let lettersFre = 0;
  let R = 0;
  let L =0;
  for(let i=0; i<word.length; i++){
  if(word[i]==="R" ){
    R++
  } else{
    L++
  }
  console.log("R -" + R,"L -"+L)
  if(R===L){
    lettersFre++;
    R=0;
    L=0;
  }

}
  

  return lettersFre
}

console.log(findMaxFrequesncy("RLRRRLLRLL"))