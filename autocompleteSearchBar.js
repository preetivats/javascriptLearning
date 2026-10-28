// Autocomplete Search bar feature

let root = document.getElementById("root");

let debounceFunc = (fn,delay, data)=>{
  //console.log(data)
  let timer;
  return function(args){
    clearTimeout(timer);
    timer = setTimeout(()=>{
      fn.call(this,args);
    }, delay)
  }
}

let input = document.getElementById("inputText");
let optimizedFetch =   debounceFunc(fetchData, 100);
input.addEventListener("input", (event)=>{
  optimizedFetch(event.target.value);
//  fetchData(event.target.value);
});

 let controller  = null;
async function fetchData(query){
 // console.log(query)
if(controller){
  controller.abort();
}

 if(!query || query.trim() === "")
  root.innerHTML = "";
  return;
}
 controller = new AbortController();
 let signal = controller.signal;
try{
  let res = await fetch(`https://dummyjson.com/recipes/search?q=${query}`, {signal})
  if(!res.ok){
    throw new Error("Server Error")
  }
  let data = await res.json();

  showProductList(data)

}catch(error){
  if(error.name==='AbortError'){
    console.log("Fetch Aborted for query", query)
  }else{
    console.log(error)
  }
}


function showProductList(data){  
  if (data?.recipes?.length === 0) {
    root.innerHTML = "<li>No recipes found</li>";
    return;
  }
  let itemsList =  data.recipes.map(item=>`<li>${item.name}</li>`).join("");
  root.innerHTML = itemsList
}