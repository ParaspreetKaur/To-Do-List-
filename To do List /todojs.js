let inp=document.querySelector("input");
let lis= document.querySelector("ul");
let btn= document.querySelector("button");

btn.addEventListener("click",()=> {
    let item= document.createElement("li");
    item.innerText= inp.value;

    let delbtn= document.createElement("button");
    delbtn.innerText="delete";
    delbtn.classList.add("delete");

    item.appendChild(delbtn);
    lis.appendChild(item);
    inp.value="";
})
//let deletebtns= document.querySelectorAll(".delete");
//console.log(deletebtns)
//for(let btn of deletebtns){
//    btn.addEventListener("click",(e)=>
//    {
//        const item=e.target.parentElement;
//        item.remove();
//    })
lis.addEventListener("click",(e)=>{
     if(e.target.nodeName=="BUTTON"){
      let item= e.target.parentElement;
      item.remove();
   }
})