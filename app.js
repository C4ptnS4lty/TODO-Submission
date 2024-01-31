/*JavaScript for todo project
Written by: Jonathan Lahmann
Date: 1/30/2024
*/
const submit = document.querySelector('#addToList');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
const list = document.querySelector('#currentTasks');

//retrieval from LocalStorage
for (let i = 0; i < tasks.length; i++) {
    let task = document.createElement('li');

    task.innerText = tasks[i].task;
    task.completed = tasks[i].completed ? true: false;

    if (task.completed) {
        task.style.textDecoration = "line-through";
    }
    list.appendChild(task);
}


submit.addEventListener('click', function(e) {
    e.preventDefault();

    const newAddition = document.querySelector('#newTask');
    
    if (newAddition.value.length > 0) {
    

    let li = document.createElement('li');
    
    
    li.innerText = newAddition.value;
    li.completed = false;
    
    //adds input from user into array and sets status
    tasks.push({task: li.innerText, completed: false});

    list.appendChild(li);

    }

    localStorage.setItem('tasks', JSON.stringify(tasks));
    newAddition.value = '';
});




list.addEventListener('click', function(event) {
    const task = event.target;
    if (!task.completed) {
        task.style.textDecoration = "line-through";
        task.completed = true;
      //task inside array tasks is completed but not removed
      for (let i = 0; i < tasks.length; i++) {
        if(tasks[i].task == task.innerText) {
            tasks[i].completed = true;
            i = tasks.length;
        } 
      }
    } else {

    for (let i = 0; i < tasks.length; i++) {
            if(tasks[i].task == task.innerText) {
                tasks.splice(i, 1);
                task.remove();
                i = tasks.length;
            }
        }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
});
