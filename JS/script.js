const container = document.querySelector('.container');
const showTable = document.querySelector('.showTable');
const showDivs = document.querySelector('.showDivs');
const modalWindow = document.querySelector('.modal');
const addTaskBtn = document.querySelector('.add-task');
const closeBtn = document.querySelector('.close');
const modal_content = document.querySelector('.modal__content');

const addTaskModal = new Modal(modalWindow);

showTable.onclick = () => {
    showTable.classList.add('active');
    showDivs.classList.remove('active');
    table.classList.add('active');
    divs.classList.remove('active');
    drawTable(data)
}

showDivs.onclick = () => {
    showDivs.classList.add('active');
    showTable.classList.remove('active');
    divs.classList.add('active');
    table.classList.remove('active');
    drawDivs(data)
}

addTaskBtn.onclick = () => {
    addTaskModal.open();
}

closeBtn.onclick = () => {
    addTaskModal.close();
}

window.addEventListener("click", (event) => {
    if (event.target === modalWindow) {
        addTaskModal.close();
    }
});

const taskForm = document.forms.taskForm;
taskForm.onsubmit = (ev) => {
    ev.preventDefault();
    const task = {};
    const fm = new FormData(taskForm);
    fm.forEach((value, key) => {
        task[key] = value;
    });
    data.push(task);
    localStorage.setItem('tasks', JSON.stringify(data));
    drawTable(data);
    taskForm.reset();
};