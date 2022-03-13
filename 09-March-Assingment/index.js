const text_fields = [];
const render = function() {
    const text_container = document.getElementById('list_container');
    text_container.innerHTML = "";

    for(let i = 0; i < text_fields.length; i++) 
    {
        const new_li = document.createElement('li');
        new_li.style.display="inline-block";
        new_li.style.height="300px";
        new_li.style.width="370px"
        new_li.style.backgroundColor="#03e8fc";
        new_li.style.color="#black";
        new_li.style.fontSize="larger";
        new_li.style.fontWeight="bolder";
        new_li.style.listStyleType="none";
        new_li.style.position="relative";
        new_li.style.marginTop="20px";
        new_li.style.border="5px solid white";
        new_li.innerText=text_fields[i] ;
        text_container.appendChild(new_li);
    }
}
const add_item = function() {
    const cp = document.getElementById('text_input');
    const new_text = cp.value;
    text_fields.push(new_text);
    render();
}
const bt = document.getElementById('add_btn');
bt.addEventListener('click', add_item);