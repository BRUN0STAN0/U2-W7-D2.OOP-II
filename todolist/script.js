// * La todolist deve:
// * Tenere traccia di una lista di stringhe
// * Permettere di aggiungere un elemento all'elenco
// * Permettere di markare un elemento come "Done"
// * Permettere di vedere l'elenco delle cose da fare
// * Permettere di vedere le cose gia fatte (quelle cestinate)

class Todolist {
    tasksToDo = []
    tasksDone = []

    constructor(tagId){
        this.attachTo(tagId)
    }

    addTodo(task) {
        this.tasksToDo.push(task);
        this.visualizeAllTasks();
    }
    completeTodo(task) {
        let index = this.tasksToDo.indexOf(task);
        let doneTask = this.tasksToDo[index];
        this.tasksDone.push(doneTask);
        this.tasksToDo.splice(index, 1);
        this.visualizeAllTasks();
    }

    visualizeAllTasks() {
        this.tasksOl.innerHTML = '';
        for (let task  of this.tasksToDo) {
            let taskLi = document.createElement("li");
            taskLi.innerText = task;
            taskLi.addEventListener("click", () => this.completeTodo(task))
            this.tasksOl.appendChild(taskLi)
        }
    }

    attachTo(tagId) {
        let tagWhereToDisplay = document.getElementById(tagId);
        let taskInput = document.createElement("input");
        taskInput.type = "text";
        let addTaskButton = document.createElement("button");
        addTaskButton.innerText = "Add Task";
        addTaskButton.onclick = () => this.addTodo(taskInput.value);
        this.tasksOl = document.createElement("ol")
        tagWhereToDisplay.appendChild(taskInput);
        tagWhereToDisplay.appendChild(addTaskButton);
        tagWhereToDisplay.appendChild(this.tasksOl);
    }
}

let todoBruno = new Todolist("todo");