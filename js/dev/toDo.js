export function toDoBase() {
    const todoListInput = document.querySelector('.todo-list-input');
    const todoDueDate = document.querySelector('.todo-due-date');
    const todoActionBtn = document.querySelector('.todo-action-btn');
    const todoListItems = document.getElementById('todoListItems');
    const todoMessage = document.getElementById('todoMessage');

    const todoList = [];

    function renderTodoList() {

        const todoListItemsContainer = document.createElement('div');
        todoListItemsContainer.id = 'todoListItemsContainer';

        todoList.forEach((item, index) => {

            const todoItem = document.createElement('div');
            todoItem.className = 'todo-item';

            const task = document.createElement('p');
            task.textContent = item.name;

            const dt = document.createElement('p');
            dt.className = 'todo-date';
            dt.textContent = `📅 ${item.date}`;

            const actions = document.createElement('div');
            actions.className = 'todo-actions';

            // Edit button
            const editBtn = document.createElement('button');
            editBtn.className = 'todo-edit-btn';
            editBtn.textContent = '✏️';

            editBtn.addEventListener('click', () => {
                editInPlace(task, item.name, editBtn, index);
            });

            // Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.className = 'todo-delete-btn';
            deleteBtn.textContent = '🗑️';

            deleteBtn.addEventListener('click', () => {
                todoList.splice(index, 1);
                showMessage('⛔ Task Deleted', 'danger');
                renderTodoList();
            });

            //displaying items
            actions.append(editBtn, deleteBtn);
            todoItem.append(task, dt, actions);
            todoListItemsContainer.prepend(todoItem);

        });

        todoListItems.innerHTML = ''; //reset list
        todoListItems.appendChild(todoListItemsContainer);

    }

    function showMessage(text, type = 'success') {

        const msg = document.createElement('p');
        msg.className = `todo-message todo-message-${type}`;

        msg.textContent = text;

        todoMessage.appendChild(msg);

        setTimeout(() => {
            msg.classList.add('fade');

            setTimeout(() => {
                msg.remove();
            }, 500);

        }, 3000);
    }

    const today = new Date().toISOString().split('T')[0]
    todoDueDate.min = today;

    todoActionBtn.addEventListener('click', () => {
        addTodo();
    });

    todoListInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter') addTodo();
    });

    function addTodo() {

        const trimmedTask = todoListInput.value.trim();
        const trimmedDate = todoDueDate.value || today;

        if (trimmedTask === '') {
            return;
        }

        todoList.push({
            name: trimmedTask,
            date: trimmedDate
        });
        showMessage('✅ New Task Added', 'success');

        todoListInput.value = '';
        todoListInput.focus();

        renderTodoList();
    }


    function editInPlace(replace, val, editBtn, index) {

        const input = document.createElement('input');
        input.className = 'task-edit-input';
        input.value = val;

        replace.replaceWith(input);
        input.select();

        editBtn.disabled = true;

        input.addEventListener('keydown', (e) => {

            if (e.key === 'Enter') {
                const updated = input.value.trim();

                if (updated !== '' && updated !== val) {
                    todoList[index].name = updated;
                    showMessage('✅ Task Updated', 'success');
                }

                renderTodoList();
            }
        });
    }

}