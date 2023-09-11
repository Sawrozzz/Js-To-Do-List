const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const button = document.getElementById("btn");

function addTask() {
    if (inputBox.value === '') {
        alert("You must have to write something!!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        inputBox.value = ""; 
    }
    safe();
}


function handleKeyDown(event) {
    if (event.keyCode === 13) {
        event.preventDefault(); 
        button.click();
    }
}

document.addEventListener('keydown', handleKeyDown);

listContainer.addEventListener("click", function(e){
    if(e.target.tagName ==="LI"){
        e.target.classList.toggle("checked");
        safe();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        safe();
    }
}, false);

function safe(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function show(){
    listContainer.innerHTML = localStorage.getItem("data");
}

show();
