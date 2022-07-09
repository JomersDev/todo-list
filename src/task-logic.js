import { displayTasksOnPage } from "./render-tasks";

//Array to store todo tasks
export let taskStorage = [];

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
