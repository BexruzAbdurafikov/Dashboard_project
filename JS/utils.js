const container = document.querySelector('.container');
const showTable = document.querySelector('.showTable');
const showDivs = document.querySelector('.showDivs');
const modalWindow = document.querySelector('.modal');
const addTaskBtn = document.querySelector('.add-task');
const closeBtn = document.querySelector('.close');
const modal_content = document.querySelector('.modal__content');

class Modal {
    element = null;
    constructor(element) {
        this.element = element;
    }
    open() {
        this.element.style.display = 'flex';
    }
    close() {
        this.element.style.display = 'none';
    }
}

function showTab(show) {
    if (!show) {
        showDivs.classList.add('active');
        showTable.classList.remove('active');
        divs.classList.add('active');
        table.classList.remove('active');
        drawDivs(data);
        return;
    }

    showTable.classList.add('active');
    showDivs.classList.remove('active');
    table.classList.add('active');
    divs.classList.remove('active');
    drawTable(data);
}

function deletTask(index) {
    data.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(data));
    draw(data);
}

function editTask(item) {
    const closeBtn = document.querySelector('.close');
    const editModal = document.querySelector('.editModal');
    const task_title = document.querySelector('#task-title');
    const task_desc = document.querySelector('#task-desc');
    const task_date = document.querySelector('#task-date');
    const task_time = document.querySelector('#task-time');
    const task_status = document.querySelector('#task-status');
    const editTaskModal = new Modal(editModal);

    task_title.value = item.title;
    task_desc.value = item.desc;
    task_date.value = item.date;
    task_time.value = item.time;
    task_status.value = item.isDone;

    editTaskModal.open();

    const editForm = document.forms.editForm;
    editForm.onsubmit = (event) => {
        event.preventDefault();

        item.title = task_title.value;
        item.desc = task_desc.value;
        item.date = task_date.value;
        item.time = task_time.value;
        item.isDone = task_status.value;

        localStorage.setItem('tasks', JSON.stringify(data));
        draw(data);
        editTaskModal.close();
    }
}