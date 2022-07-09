import { taskStorage } from "./task-logic";

//function to render the contents of the storage array to the page
export function displayTasksOnPage() {
    const tasks = document.querySelector(".tasks");

    //remove the divs and reset the loop of the array so no double ups of book objects occur
    while (tasks.firstChild) {
        tasks.removeChild(tasks.firstChild);
    }

    //loop through the book object array and display the info on the screen
    let index = 0;
    taskStorage.forEach((taskStorages) => { 
        const card = document.createElement("div");
        card.classList.add("card");
        tasks.appendChild(card);

        //loop through the object properties, turning them into paragraphs that display on the card
        for (let key in taskStorages) {
            const paragraph = document.createElement("p");
            paragraph.textContent = `${taskStorages[key]}`
            card.appendChild(paragraph);
          }

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete";
        deleteBtn.classList.add("delete");
  
        deleteBtn.dataset.linkedArray = index;
        index++;
        card.appendChild(deleteBtn);
  
        deleteBtn.addEventListener('click', removeBook);
  
        function removeBook() {
            let bookToRemove = deleteBtn.dataset.linkedArray;
            taskStorage.splice(parseInt(bookToRemove), 1);
            card.remove();
            displayTasksOnPage();
        }

        card.firstChild.classList.add("task-title-card");
    })
}