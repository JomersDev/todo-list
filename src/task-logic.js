import { displayTasksOnPage } from "./dom-manipulation";

//assigning local storage key
const LOCAL_STORAGE_LIST_KEY = "task.list";

//Storage array that checks localStorage on inital load or defaults to an empty array
export let taskStorage = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

//function that saves the contents of the the current task list to localStorage
export function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(taskStorage));
}

//Class for todo tasks
export class Task {
    constructor(title, description, dueDate) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
  }
}
//function that creates a new task and adds it to the storage array
export function createTask(title, description, dueDate) {
    let task = new Task(title, description, dueDate);
    taskStorage.push(task);
    displayTasksOnPage();
  }
