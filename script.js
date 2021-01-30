

const right_arrow = document.getElementsByClassName("right-arrow")[0];
const currency_table = document.getElementById('currency-table');
const second_table = document.getElementById("second-table");
const left_arrow = document.getElementsByClassName('left-arrow')[0];

right_arrow.addEventListener("click", ()=>{
    currency_table.classList.add('hide');
    second_table.classList.remove('hide');
});

left_arrow.addEventListener("click", ()=>{
    second_table.classList.add('hide');
    currency_table.classList.remove('hide');
});