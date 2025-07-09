const todos = [
  {
    id: 1,
    title: "Run 5 k",
    completed: true,
  },
];
function addToDo(e) {
  e.preventDefault();
  //console.log(e)
  const form = e.target;
  const titleInput = form.elements["title"];
  const titleValue = titleInput.value;

  if (!titleValue || titleValue.length < 2) {
    console.log("invalid input, title must be at least 2 chars");
    return;
  }

  todos.push({ id: todos.length + 1, title: titleValue, completed: false });
  titleInput.value = "";
  displayToDos(todos); //update list with newly added todo
}

function handleTodoChange(id) {
  console.log(id);
}

function displayToDos(todos) {
  if (todos.length === 0) {
    return;
  }

  const container = document.getElementById("todoList");
  let todosHtml = "<ul>";
  todos.forEach((todo) => {
    const className = todo.completed? 'strikeThrough' : '';
    const checked = todo.completed ? 'checked' : '';
    todosHtml += `<li> 
      <input type="checkbox" ${checked} onChange="handleTodoChange(${todo.id})" />
      <span class="${className}">${todo.title}</span>
    </li>`;
  });
  todosHtml += "</ul>";
  container.innerHTML = todosHtml;
}

//window.onload = () => displayToDos(todos)
window.addEventListener("load", () => {
  console.log("Window has been loaded");
  displayToDos(todos);
});

// homework: finish toggling todo completed
// add styles. Center todos form and view
// try out onChange onKeyUp, onKeyPress on title intput text and see the difference. 
// You can either change background color for each diffrenet or simple alert or console