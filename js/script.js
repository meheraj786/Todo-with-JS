// Step 1: Select necessary elements from the HTML
const taskInput = document.getElementById("new-task"); // Input field
const addTaskButton = document.getElementById("add-task"); // "Add" button
const todoList = document.getElementById("todo-list"); // To-Do list (ul)
const doneList = document.getElementById("done-list"); // Done list (ul)

// Step 2: Create a function to add a new task
function addTask() {
    // Step 2.1: Get the text from the input field
    const taskText = taskInput.value;

    // Step 2.2: Check if the input is empty
    if (taskText.trim() === "") {
        alert("Please write something before adding!"); // Show a message
        return; // Stop the function if input is empty
    }

    // Step 2.3: Create a new list item (li) for the task
    const listItem = document.createElement("li");

    // Step 2.4: Create a checkbox for marking the task as done
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.style.marginRight = "10px"; // Add spacing
    checkbox.addEventListener("change", function () {
        // Move task to Done List if checked, or back to To-Do List if unchecked
        if (checkbox.checked) {
            doneList.appendChild(listItem);
        } else {
            todoList.appendChild(listItem);
        }
    });

    // Step 2.5: Create a delete button for the task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.style.marginLeft = "10px"; // Add spacing
    deleteButton.addEventListener("click", function () {
        // Remove the task when the delete button is clicked
        listItem.remove();
    });

    // Step 2.6: Add checkbox, task text, and delete button to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(document.createTextNode(taskText)); // Add task text
    listItem.appendChild(deleteButton);

    // Step 2.7: Add the list item to the To-Do List
    todoList.appendChild(listItem);

    // Step 2.8: Clear the input field for new tasks
    taskInput.value = "";
}

// Step 3: Connect the addTask function to the "Add" button
addTaskButton.addEventListener("click", addTask);
