let btn = document.querySelector("button");
let input = document.querySelector("input");
let ul = document.querySelector("ul");

btn.addEventListener("click", function(){
    let item = document .createElement("li");
    item.innerText=input.value;
let dltbtn = document.createElement("button");
dltbtn.innerText="delete";
dltbtn.classList.add("delete");
item.appendChild(dltbtn);

    ul.appendChild(item);
    input.value="";
   

});

ul.addEventListener("click",function(event){
    if (event.target.nodeName=="BUTTON"){
        let listItem= event.target.parentElement;
        listItem.remove();
        console.log("item deleted");
    }

});
