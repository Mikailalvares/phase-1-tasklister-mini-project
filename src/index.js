document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('create-task-form');
  const taskList = document.getElementById('tasks');

  function createTaskItem(taskDescription, priority) {
    const taskItem = document.createElement('li');
    taskItem.textContent = taskDescription;

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', function () {
      taskItem.remove();
    });

    const priorityDropdown = document.createElement('select');
    const priorityOptions = ['Low', 'Medium', 'High'];

    priorityOptions.forEach((optionText, index) => {
      const option = document.createElement('option');
      option.value = index; 
      option.textContent = optionText;
      priorityDropdown.appendChild(option);
    });

    priorityDropdown.value = priority;

    priorityDropdown.addEventListener('change', function () {
      updateTaskPriority(taskItem, priorityDropdown.value);
    });

    taskItem.appendChild(deleteButton);
    taskItem.appendChild(priorityDropdown);

    updateTaskPriority(taskItem, priority);

    return taskItem;
  }

  function updateTaskPriority(taskItem, priorityIndex) {
    const priorityColors = ['green', 'yellow', 'red'];
    const textColor = priorityColors[priorityIndex];

    taskItem.style.color = textColor;
  }

  form.addEventListener('submit', function (event) {
    event.preventDefault();

    const taskDescription = document.getElementById('new-task-description').value;
    const priorityDropdown = document.getElementById('task-priority');

    if (taskDescription.trim() !== '') {
      const taskItem = createTaskItem(taskDescription, priorityDropdown.value);

      taskList.appendChild(taskItem);
      
      document.getElementById('new-task-description').value = '';
    }
  });
});
