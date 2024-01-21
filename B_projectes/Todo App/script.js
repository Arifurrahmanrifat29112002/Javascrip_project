//find
const mainDiv = document.querySelector(".container");
const form = mainDiv.querySelector("form");
const todoInput = mainDiv.querySelector("input");
const message = mainDiv.querySelector("#showMessage");
const todoLists = mainDiv.querySelector("#ul");



//getTodosFormLocalStorage
const getTodosFormLocalStorage = () => localStorage.getItem("taskTodos") ? JSON.parse(localStorage.getItem("taskTodos")) : [];

//create todo
const createTodo = (todoValue,todoId) =>{
    const li = document.createElement('li');
    li.id = todoId;
    li.innerHTML = `
    <span>${todoValue}</span>
    <span><button id="delete"><i class="fa-solid fa-delete-left"></i></button>
    </span>
    `;
    todoLists.appendChild(li);

    //delete 
    const deleteButton = li.querySelector("#delete");
    deleteButton.addEventListener("click",deleteTodo);
}

//deleteTodo
const deleteTodo = (e) =>{
    const selectTodo = e.target.parentElement.parentElement.parentElement;
    todoLists.removeChild(selectTodo);


    //delete todo form localStorage
    let todos = getTodosFormLocalStorage();
    todos = todos.filter((item) => item.todoId != selectTodo.id);
    localStorage.setItem("taskTodos",JSON.stringify(todos));

    sendMessage("Select Todo Delete","danger");
}

//add function
const add = (e) =>{
    e.preventDefault();

    const todoValue = todoInput.value;

    if (todoValue) {
        //unique id
        const todoId = Date.now().toString();
        createTodo(todoValue,todoId); 

        //localStorage
        const todos = getTodosFormLocalStorage();
        todos.push({todoId,todoValue});
        localStorage.setItem("taskTodos",JSON.stringify(todos));

        //clear input value after adding a new item
        todoInput.value ="";

        //message show and hide
        sendMessage("Todo created successfulliy","success")

    }else{
        sendMessage("Please enter your task!","danger")
    }
}
//message 
const sendMessage = (text,status) => {
    message.textContent = text;
    message.classList.add(`bg-${status}`);

    setTimeout(() => {
        message.textContent = " ";
        message.classList.remove (`bg-${status}`);
    },500);
}

//loadContent
const loadContent = () =>{
  const todos = getTodosFormLocalStorage();
  todos.map((item) => {
    createTodo(item.todoValue,item.todoId);
  })
}

//Event Listener
form.addEventListener("submit",add);
window.addEventListener("DOMContentLoaded",loadContent)