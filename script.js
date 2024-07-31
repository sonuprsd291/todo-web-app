const myInput = document.getElementById("myInput");
const btn = document.getElementById("btn");
const todoLists = document.querySelector(".todoLists");


//Does what it says
const addingTodoDynamicallyToHTML = (todoItem) => {
    const divElem =document.createElement("div");
    divElem.classList.add("todo");
    divElem.innerHTML = `<li>${todoItem}</li><button class="deleteBtn btn">Delete ToDo</button>`;
    todoLists.append(divElem);
};

// Getting todos from localStorage
const getTodoListFromLocal = () => {
  return  JSON.parse(localStorage.getItem("todoItems"));
}

//If initially there is existing todo in localStorage this will add that in Todo Array otherwise it will be empty.
let localTodoListArray = getTodoListFromLocal() || [];


//This will now iterate todos from Todo Array and passes it through the function addingTodoDynamicallyToHTML
const showTodo = () => {
    localTodoListArray.forEach((todoItem)=> {
        addingTodoDynamicallyToHTML(todoItem);
    });
};

showTodo();


const addTodo = (e) => {
    e.preventDefault();
    
    
    
    // Adding todos list in array form in localStorage
    const todoItem = myInput.value.trim();
    localTodoListArray = [... new Set(localTodoListArray)];
    localTodoListArray.push(todoItem);
    localStorage.setItem("todoItems", JSON.stringify(localTodoListArray));


    addingTodoDynamicallyToHTML(todoItem);

};


btn.addEventListener("click", (e)=> {
    addTodo(e);
})