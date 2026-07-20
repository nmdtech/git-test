import {setPageTitle} from "../components/core/page.js";
import {print} from "../components/core/utils.js";
import {toDoBase} from "../dev/toDo.js";

export function toDoPage() {
    setPageTitle('Tasks');

    print(`
        <div class="todo-1">
            <input placeholder="ToDo Name" class="todo-list-input">
            <input type="date" class="todo-due-date" id="dueDate">
            <button class="todo-action-btn">Add</button>
        </div>
        <div id="todoMessage"></div>
        <div id="todoListItems"></div>
    `);

    toDoBase();

}