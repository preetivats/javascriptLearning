let pr1 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("Pr1 Success"), 3000)
})

let pr2 = new Promise((resolve, reject)=>{
    setTimeout(()=>reject("Pr2 Success"), 1001)
})

let pr3 = new Promise((resolve, reject)=>{
    setTimeout(()=>resolve("Pr3 Fails"), 1000)
})


Promise.all([pr1,pr2,pr3])
.then(res=>{
   console.log(res);
})
.catch(err=>{
   console.error(err)
})
console.log("1. Script Start");

// 1. Event Listener Setup
// document.querySelector("button").addEventListener("click", () => {
//  console.log("Button Clicked!");
// });

// 2. Timeout Setup
setTimeout(() => {
  console.log("2. Timeout");
}, 5000);
// 2. Timeout Setup
setTimeout(() => {
  console.log("3. Timeout");
}, 5000);

// 3. Fetch Setup
//fetch('https://corsproxy.io?https://namastedev.com/api/v1/listRestaurants').then(() => console.log("3. Fetch Promise"));

// 4. Interval Setup
// let count = 0;
// const intervalId = setInterval(() => {
// count++;
//   console.log("4. Interval Tick", count);
//   if (count === 4) clearInterval(intervalId); // Stops after 1 tick
// }, 1000);
console.log("5. Script End1");
