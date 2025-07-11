const todos = [
  {
    id: 1,
    title: "Run 5 k",
    completed: true,
  },
  {
    id: 2,
    title: "Swim 1000 m",
    completed: true,
  },
  {
    id: 3,
    title: "Do JS homework",
    completed: false,
  },
  {
    id: 4,
    title: "Do C# homework",
    completed: false,
  },
  {
    id: 5,
    title: "Take a nap",
    completed: false,
  },
  {
    id: 6,
    title: "Cook pasta",
    completed: false,
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

function toggleCompleted(id) {
  console.log(id);
  // toggling todo completed
  const todo = todos.find((todo) => todo.id === id);
  if (todo) {
    todo.completed = !todo.completed;
    displayToDos(todos);
  }
}

function deleteToDo(id) {
  const index = todos.findIndex((todo) => todo.id === id);

  if (index < 0) return; //todo not found

  todos.splice(index, 1);
  displayToDos(todos);
}

function displayToDos(todos) {
  if (todos.length === 0) {
    return;
  }

  const container = document.getElementById("todoList");
  let todosHtml = "<ul>";
  todos.forEach((todo) => {
    const className = todo.completed ? "strikeThrough" : "";
    const checked = todo.completed ? "checked" : "";
    todosHtml += `<li> 
      <input type="checkbox" ${checked} onChange="toggleCompleted(${todo.id})" />
      <span class="${className}">${todo.title}</span>
      <button class="delete-button" onClick="deleteToDo(${todo.id})">
        <i class="fa-solid fa-trash"></i>
      </button>
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

// https://www.w3schools.com/jsref/event_onkeyup.asp
function handleKeyUp(e) {
  console.log("onKeyUp", e.target.value);
  // e.target.style.backgroundColor = "red";
}

// https://www.w3schools.com/jsref/event_onkeypress.asp - DEPRECATED??
function handleKeyPress(e) {
  console.log("onKeyPress", e.key);
  // e.target.style.backgroundColor = "yellow";
}

// https://www.w3schools.com/jsref/event_onchange.asp
function handleOnChange(e) {
  console.log("onChange", e.target.value);
  // e.target.style.backgroundColor = "blue";
}

// homework: finish toggling todo completed - DONE
// add styles. Center todos form and view
// try out onChange onKeyUp, onKeyPress on title intput text and see the difference.
// You can either change background color for each diffrenet or simple alert or console

// add filter, sort, search
