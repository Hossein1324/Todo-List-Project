const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

document.addEventListener('DOMContentLoaded', getTodos);
todoButton.addEventListener('click', addTodo);

todoList.addEventListener('click', deleteCheck);



function addTodo(event) {
    event.preventDefault();
// creat div item of ul
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
// creat li inside of the div
     const newTodo = document.createElement('li');
     newTodo.innerText = todoInput.value;
     newTodo.classList.add('todo-item');
     todoDiv.appendChild(newTodo);
    //  localstoreg save
    saveTodos(todoInput.value);
    //  creat check button
    const checkButton = document.createElement('button');
    checkButton.innerText = 'done';
    checkButton.classList.add('check-btn');
    todoDiv.appendChild(checkButton);
        //  creat delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        deleteButton.classList.add('delete-btn');
        todoDiv.appendChild(deleteButton);
        // append to ul tag
        todoList.appendChild(todoDiv);
        // clear input text
        todoInput.value = '';
}

function deleteCheck (e) {
    // delete button
const item = e.target;

if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    // Animition
    todo.classList.add('delet-tr');
    removeSave(todo);
    todo.addEventListener('transitionend', function() {
        todo.remove()
    });
}
// check button

if (item.classList[0] === 'check-btn') {
    const todo = item.parentElement;
    todo.classList.toggle('line-check')

}

}

function saveTodos(todo) {
    let todos;

    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}

function getTodos (){
    
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }

    todos.forEach(function (todo){
        // creat div item of ul
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
// creat li inside of the div
     const newTodo = document.createElement('li');
     newTodo.innerText = todo;
     newTodo.classList.add('todo-item');
     todoDiv.appendChild(newTodo);
    
    //  creat check button
    const checkButton = document.createElement('button');
    checkButton.innerText = 'done';
    checkButton.classList.add('check-btn');
    todoDiv.appendChild(checkButton);
        //  creat delete button
        const deleteButton = document.createElement('button');
        deleteButton.innerText = 'delete';
        deleteButton.classList.add('delete-btn');
        todoDiv.appendChild(deleteButton);
        // append to ul tag
        todoList.appendChild(todoDiv);
    });


}

function removeSave (todo) {
    let todos;
    if (localStorage.getItem('todos') === null) {
        todos = [];
    }else {
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
    console.log('ok');
    
}
