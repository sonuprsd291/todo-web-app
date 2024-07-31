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

const addTodoListLocalStorage = (localTodoListArray) => {
    localStorage.setItem("todoItems", JSON.stringify(localTodoListArray))
};

// Getting todos from localStorage
const getTodoListFromLocal = () => {
  return  JSON.parse(localStorage.getItem("todoItems"));
}

//If initially there is existing todo in localStorage this will add that in Todo Array otherwise it will be empty.
let localTodoListArray = getTodoListFromLocal() || [];


//This will now iterate todos from Todo Array and passes it through the function addingTodoDynamicallyToHTML
const showTodo = () => {
    console.log(localTodoListArray);
    localTodoListArray.forEach((todoItem)=> {
        addingTodoDynamicallyToHTML(todoItem);
    });
};

showTodo();


const removeTodoLists = (event) => {
    const todoToRemove = event.target;
    let todoItemText = todoToRemove.previousElementSibling.innerText;
    let parentElem = todoToRemove.parentElement;

    localTodoListArray = localTodoListArray.filter((curTodo) => {
        return curTodo !== todoItemText;
    });

    addTodoListLocalStorage(localTodoListArray);

    parentElem.remove();
};


const addTodo = (e) => {
    e.preventDefault();
    
    //Cleaning the input value and store that to a constant then deleting the value
    const todoItem = myInput.value.trim();
    myInput.value = "";

    if(!localTodoListArray.includes(todoItem) && todoItem !== ""){

    // Adding todos list in array form in localStorage
    localTodoListArray = [... new Set(localTodoListArray)];
    localTodoListArray.push(todoItem);
    localStorage.setItem("todoItems", JSON.stringify(localTodoListArray));

    
    addingTodoDynamicallyToHTML(todoItem);

    }    
};


todoLists.addEventListener('click', (event) => {
   event.preventDefault();
   if(event.target.classList.contains('deleteBtn')){
   removeTodoLists(event);}

})



btn.addEventListener("click", (e)=> {
    addTodo(e);
});