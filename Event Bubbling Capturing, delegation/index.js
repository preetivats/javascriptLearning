console.log('grandparent')
document.querySelector('#grandparent').addEventListener('click', (e)=>{
     
    console.log('Grand Parent Clicked')
}, true)

document.querySelector('#parent').addEventListener('click', ()=>{
    console.log('Parent Clicked')
}, true)

document.querySelector('#child').addEventListener('click', (e)=>{
    console.log('Child Clicked')
    console.log(e)
    e.stopPropagation();
}, true)