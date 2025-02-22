const table = document.querySelector('table');
const tableBody = document.querySelector('tbody');
const divs = document.querySelector('.divs');

function drawTable(arr) {
    tableBody.innerHTML = ''
    arr.forEach((item, index) => {
        const actions = document.createElement('td');
        const delet = document.createElement('div');
        const edit = document.createElement('div');
        const title = document.createElement('td');
        const desc = document.createElement('td');
        const date = document.createElement('td');
        const time = document.createElement('td');
        const isDone = document.createElement('td');
        const tr = document.createElement('tr');

        delet.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="" viewBox="0 0 24 24">
<path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
</svg>`;
        edit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="" viewBox="0 0 24 24">
    <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"></path>
</svg>`;
        title.textContent = item.title;
        desc.textContent = item.desc;
        date.textContent = item.date;
        time.textContent = item.time;
        isDone.textContent = item.isDone;

        if (item.isDone === 'Готово') {
            isDone.classList.add('done');
        } else if (item.isDone === 'В процессе') {
            isDone.classList.add('in-progress');
        } else if (item.isDone === 'Не выполнено') {
            isDone.classList.add('not-done');
        }
        actions.classList.add('actions');

        delet.onclick = () => {
            deletTask(index);
        }

        edit.onclick = () => {
            const editModal = document.querySelector('.editModal');
            const editTaskModal = new Modal(editModal);
            editTask(item);

            window.addEventListener("click", (event) => {
                if (event.target === editModal) {
                    editTaskModal.close();
                }
            })

            closeBtn.onclick = () => {
                editTaskModal.close();
            }
        };
        actions.append(delet, edit);
        tr.append(title, desc, date, time, isDone, actions);
        tableBody.append(tr);

        table.append(tableBody);
    })
};

function drawDivs(arr) {
    divs.innerHTML = '';
    arr.forEach((item, index) => {
        const actions = document.createElement('div');
        const delet = document.createElement('div');
        const edit = document.createElement('div');
        const task = document.createElement('div');
        const title = document.createElement('h3');
        const desc = document.createElement('p');
        const time = document.createElement('div');
        const date = document.createElement('p');
        const timeP = document.createElement('p');
        const isDone = document.createElement('span');

        actions.classList.add('actions', 'divs_actions');
        task.classList.add('task');
        time.classList.add('time');

        delet.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="" viewBox="0 0 24 24">
<path d="M 10 2 L 9 3 L 4 3 L 4 5 L 5 5 L 5 20 C 5 20.522222 5.1913289 21.05461 5.5683594 21.431641 C 5.9453899 21.808671 6.4777778 22 7 22 L 17 22 C 17.522222 22 18.05461 21.808671 18.431641 21.431641 C 18.808671 21.05461 19 20.522222 19 20 L 19 5 L 20 5 L 20 3 L 15 3 L 14 2 L 10 2 z M 7 5 L 17 5 L 17 20 L 7 20 L 7 5 z M 9 7 L 9 18 L 11 18 L 11 7 L 9 7 z M 13 7 L 13 18 L 15 18 L 15 7 L 13 7 z"></path>
</svg>`;
        edit.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="26" height="" viewBox="0 0 24 24">
    <path d="M 18 2 L 15.585938 4.4140625 L 19.585938 8.4140625 L 22 6 L 18 2 z M 14.076172 5.9238281 L 3 17 L 3 21 L 7 21 L 18.076172 9.9238281 L 14.076172 5.9238281 z"></path>
</svg>`;
        title.textContent = item.title;
        desc.textContent = item.desc;
        date.textContent = item.date;
        timeP.textContent = item.time;
        isDone.textContent = item.isDone;

        if (item.isDone === 'Готово') {
            isDone.classList.add('done');
        } else if (item.isDone === 'В процессе') {
            isDone.classList.add('in-progress');
        } else if (item.isDone === 'Не выполнено') {
            isDone.classList.add('not-done');
        }

        delet.onclick = () => {
            deletTask(index);
        }

        edit.onclick = () => {
            const editModal = document.querySelector('.editModal');
            const editTaskModal = new Modal(editModal);
            editTask(item);

            window.addEventListener("click", (event) => {
                if (event.target === editModal) {
                    editTaskModal.close();
                }
            });  
            closeBtn.onclick = () => {
                editTaskModal.close();
            }  
        };
        
        actions.append(delet, edit);
        time.append(date, timeP);
        task.append(title, desc, time, isDone, actions);
        divs.appendChild(task);
    })
}

function draw(arr) {
    const tab = localStorage.getItem('tab') || 'table';

    if (tab === 'table') {
        showTab(true);
        drawTable(arr);
    } else {
        showTab(false);
        drawDivs(arr);
    }
}

draw(data);