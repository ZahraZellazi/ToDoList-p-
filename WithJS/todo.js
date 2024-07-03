document.getElementById('add-task-btn').addEventListener('click', function() {
    const taskInput = document.getElementById('new-task');
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        addTask(taskText);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskList = document.getElementById('task-list');
    const newTask = document.createElement('li');

    const taskCheckbox = document.createElement('input');
    taskCheckbox.type = 'checkbox';
    taskCheckbox.addEventListener('change', function() {
        newTask.classList.toggle('completed', this.checked);
    });

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;
    taskSpan.contentEditable = true;
    taskSpan.addEventListener('blur', function() {
        if (this.textContent.trim() === '') {
            this.textContent = taskText;
        }
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.classList.add('delete-btn');
    deleteBtn.addEventListener('click', function() {
        if (taskCheckbox.checked) {
            if (confirm('Are you sure you want to delete this completed task?')) {
                taskList.removeChild(newTask);
            }
        } else {
            alert('Task is not completed. Complete the task before deleting.');
        }
    });

    newTask.appendChild(taskCheckbox);
    newTask.appendChild(taskSpan);
    newTask.appendChild(deleteBtn);
    taskList.appendChild(newTask);
}
