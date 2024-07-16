// Создаем контейнер для TODO
const todoContainer = document.createElement("div");
todoContainer.id = "todo-container";

// Создаем кнопку для создания TODO
const createTodoBtn = document.createElement("button");
createTodoBtn.id = "create-todo-btn";
createTodoBtn.textContent = "Create TODO";

// Создаем контейнер для отображения TODO
const container = document.createElement("div");
container.id = "container";

// Создаем элементы для отображения TODO
const div1 = document.createElement("div");
div1.className = "div-container";
const h2 = document.createElement("h4");
h2.textContent = "Morning";
const p = document.createElement("p");
p.textContent = "have breakfast";
const deleteBtn = document.createElement("button");
deleteBtn.className = "delete-btn";
deleteBtn.textContent = "Delete";
deleteBtn.onclick = function () {
  div1.remove();
};
div1.appendChild(h2);
div1.appendChild(p);
div1.appendChild(deleteBtn);

const div2 = document.createElement("div");
div2.className = "div-container";
const h2_2 = document.createElement("h4");
h2_2.textContent = "mid dat";
const p_2 = document.createElement("p");
p_2.textContent = "walking on the street";
const deleteBtn_2 = document.createElement("button");
deleteBtn_2.className = "delete-btn";
deleteBtn_2.textContent = "Delete";
deleteBtn_2.onclick = function () {
  div2.remove();
};
div2.appendChild(h2_2);
div2.appendChild(p_2);
div2.appendChild(deleteBtn_2);

container.appendChild(div1);
container.appendChild(div2);

// Добавляем контейнер для TODO к document.body
document.body.appendChild(todoContainer);

// Добавляем кнопку для создания TODO к document.body
document.body.appendChild(createTodoBtn);

// Добавляем контейнер для отображения TODO к document.body
document.body.appendChild(container);

let clickCount = 0;

createTodoBtn.addEventListener("click", () => {
  if (clickCount === 0) {
    const todoTitleInput = document.createElement("input");
    todoTitleInput.type = "text";
    todoTitleInput.id = "todo-title";

    const todoTitleLabel = document.createElement("div");
    todoTitleLabel.textContent = "TODO Title";
    todoTitleLabel.id = "todo-label";

    todoContainer.appendChild(todoTitleLabel);
    todoContainer.appendChild(todoTitleInput);

    clickCount++;
  } else if (clickCount === 1) {
    const todoTextInput = document.createElement("input");
    todoTextInput.type = "text";
    todoTextInput.id = "todo-text";

    const todoTextLabel = document.createElement("div");
    todoTextLabel.textContent = "TODO Text";
    todoTextLabel.id = "todo-label";
    todoTextLabel.style.marginTop = "10px";

    todoContainer.appendChild(todoTextLabel);
    todoContainer.appendChild(todoTextInput);

    createTodoBtn.disabled = true;
  }
});
