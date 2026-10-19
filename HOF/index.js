let radius = [2,3,1,3];


let area = function(r){
    return Math.PI * r * r
}


const calculateArea = function(radius, logic){
    let output=[];

    for(let i=0; i<radius.length ; i++){
        output.push(logic(radius[i]))
    }

    return output
}

console.log(calculateArea(radius, area))