const todos = [];
const render = function () {
    const parent_container = document.getElementById("list_container");
    parent_container.innerHTML = "";
    for (let i = 0; i < todos.length; i++) {
        const single_todo_item = todos[i];
        const new_li = document.createElement("li");
        new_li.style.fontSize="larger";
        new_li.innerText = single_todo_item;
        parent_container.appendChild(new_li);
        const hr = document.createElement("hr");
        hr.style.borderBottom="3px solid black";
        parent_container.appendChild(hr);
    }
}

const add_item = function () {
    const ip = document.getElementById("todo_input");
    const new_todo = ip.value;
    if (ip.value == "") 
    {
        ip.style.color = "red";
        ip.placeholder = "Please enter your to-do's";
    } 
    else 
    {
        ip.style.color = "#5E67E0"
        ip.placeholder = "Type your note";
        todos.push(new_todo);
        ip.value = "";
        render();
    }
}

const btn = document.getElementById("btn");
btn.addEventListener("click", add_item);