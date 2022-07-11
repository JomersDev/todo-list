import { createTask } from "./task-logic.js";
import { closeUserInput, displayTasksOnPage } from "./dom-manipulation.js";

//Grabbing user inputs and assigning them to variables
const addForm = document.forms["add-form"];

//event listener for user input form that takes the value and and calls createTask funciton
addForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const taskTitle = addForm.querySelector('input[name="title"]').value;
    const taskDescription = addForm.querySelector('input[name="description"]').value;
    const taskDueDate = addForm.querySelector('input[name="dueDate"]').value;
    createTask(taskTitle, taskDescription, taskDueDate);
    closeUserInput();
});

//event listener for close button on user input form
const closeUserInputBtn = document.querySelector('.close');
closeUserInputBtn.addEventListener('click', closeUserInput);

//calling this function initally as the "Add Task" button is tied to this function - refactor to remove this
displayTasksOnPage();
