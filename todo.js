// get item
var txtTask=document.getElementById('task');

function addItem(){
    document.getElementById("task-list").innerHTML+=`
    <ul>${txtTask.value}</ul>
    `
}

function removeItem(){
    $("#task-list ul:first").remove();
}
