const todos = [];
function addToDo(e) {
    e.preventDefault();
    //console.log(e)
    const form = e.target;
    const title = form.elements['title'].value;

    if (!title || title.length < 2){
        console.log("invalid input, title must be at least 2 chars");
        return;
    }

    todos.push({id: todos.length+1, title, completed: false});
    displayToDos(todos)
}

function displayToDos(todos) {
    if (todos.length === 0){
        return;
    }

    const container = document.getElementById("todoList");
    container.innerHTML = "Hello there";
}