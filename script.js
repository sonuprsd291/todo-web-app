const myinput = document.getElementById("myinput");
const btn = document.getElementById("btn");
const todoLists = document.querySelector(".todoLists");

const addTodo = (e) => {
    e.preventDefault();

    const divElem =document.createElement("div");
    divElem.classList.add("todo");
    divElem.innerHTML = `<li>${myinput.value}</li><button class="deleteBtn btn">Delete ToDo</button>`;
    todoLists.append(divElem);


};

btn.addEventListener("click", (e)=> {
    addTodo(e);
})