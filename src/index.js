import { createTask } from "./task-logic.js";

//Grabbing user inputs and assigning them to variables
const addForm = document.forms["add-form"];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskTitle = addForm.querySelector('input[name="title"]').value;
    const taskDescription = addForm.querySelector('input[name="description"]').value;
    const taskDueDate = addForm.querySelector('input[name="dueDate"]').value;
    createTask(taskTitle, taskDescription, taskDueDate);
});

//default page opens with sample task below
createTask("Sample Task", "Sample task description", "10/07/22");
createTask("Sample Task", "Sample task description", "10/07/22");
createTask("Sample Task", "Sample task description", "10/07/22");