import { createTask } from "./task-logic.js";
import { closeUserInput } from "./dom-manipulation.js";

//Grabbing user inputs and assigning them to variables
const addForm = document.forms["add-form"];

addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskTitle = addForm.querySelector('input[name="title"]').value;
    const taskDescription = addForm.querySelector('input[name="description"]').value;
    const taskDueDate = addForm.querySelector('input[name="dueDate"]').value;
    createTask(taskTitle, taskDescription, taskDueDate);
    closeUserInput();
});

const closeUserInputBtn = document.querySelector('.close');
closeUserInputBtn.addEventListener('click', closeUserInput);

//default page opens with sample task below
createTask("Gym", "Upper body day", "11/07/22");