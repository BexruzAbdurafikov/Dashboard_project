const container = document.querySelector('.container');
const showTable = document.querySelector('.showTable');
const showDivs = document.querySelector('.showDivs');

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