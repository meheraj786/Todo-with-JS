const taskInput = document.getElementById("new-task"); 
const addTaskButton = document.getElementById("add-task"); 
const todoList = document.getElementById("todo-list"); 
const doneList = document.getElementById("done-list"); 

addTaskButton.addEventListener("click", function () {
    const taskText = taskInput.value;
    if (taskText == "") {
        alert("Please write something before adding!");
    }else{
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <input type="checkbox" class="task-checkbox" style="margin-right: 10px;">
            ${taskText}
            <button class="delete-button" style="margin-left: 10px;">Delete</button>
        `;
        todoList.appendChild(listItem);
        taskInput.value = "";

        const checkbox = listItem.querySelector(".task-checkbox");
        checkbox.addEventListener("input", function () {
            if (checkbox.checked) {
                doneList.appendChild(listItem);
                listItem.style.textDecoration="line-through"
            } else {
                todoList.appendChild(listItem);
                listItem.style.textDecoration="none"
            }
        });
        const deleteButton = listItem.querySelector(".delete-button");
        deleteButton.addEventListener("click", function () {
            listItem.remove(); 
        });
    }
});
