let pr1 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("Pr1 Success"), 3000)
})

let pr2 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject("Pr2 Fails"), 2000)
})

let pr3 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject("Pr3 Fails"), 1000)
})


Promise.allSettled([pr1,pr2,pr3])
.then(res=>{
    console.log(res);
})
.catch(err=>{
    console.error(err)
})