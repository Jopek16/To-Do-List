const inputtext = document.getElementById("inputtext");
const listbox = document.getElementById("listbox");
function addNewTask(){
    if(inputtext.value === ''){
        inputtext.placeholder="You need to name ur task";
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputtext.value;
        listbox.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputtext.value="";
}
listbox.addEventListener("click",function(event){
if(event.target.tagName === "LI"){
    event.target.classList.toggle("checked");
}
else if(event.target.tagName==="SPAN"){
    event.target.parentElement.remove();
}
},false)
