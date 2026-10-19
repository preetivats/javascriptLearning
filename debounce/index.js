let counter = 0;
let getData = (e) => {
    console.log('Hi', e)
};

let debounce = function(fn,d){
    let timer;
    let context = this;
    return function(args){
    clearTimeout(timer);
     timer = setTimeout(()=>{
            fn.call(context, args)
        }, d)


    }
}


let betterFunction = debounce(getData , 1000);

