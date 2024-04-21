// script.js

document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('taskForm');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            addTaskToList(taskText);
            taskInput.value = '';
        }
    });

    function addTaskToList(taskText) {
        const li = document.createElement('li');
        li.textContent = taskText;
        taskList.appendChild(li);
    }
});
"" 
