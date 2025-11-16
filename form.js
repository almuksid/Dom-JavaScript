const formTitle = document.createElement('h2');
const clickBtn = document.querySelector('#clickBtn');
const clickColor = document.querySelector('#clickColor');
const formCon = document.querySelector('#formCon');

clickColor.addEventListener('input', () => {
    // formCon.style.color = clickColor.value;
    const color = clickColor.value;
    formCon.style.color = color;
})

// formCon.style.color = 'red'
clickBtn.addEventListener('click', () =>{
    formTitle.textContent = 'Welcome Bangladesh';
    // formTitle.classList.add('color');
    let color = clickColor.value;
    formTitle.style.color = color;
})
document.body.append(formTitle);


const form = document.querySelector('#evForm');
const ul = document.querySelector('#evUl');
const inputev = document.querySelectorAll('#inputEv');


form.addEventListener('submit', (event) => {
    event.preventDefault();
    // create li 
    const li = document.createElement('li');

    // create checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = false;

    // add text
    li.textContent = inputev[0].value;

    checkbox.addEventListener('change', () => {
        if(checkbox.checked){
            li.style.textDecoration = 'underline';
            li.style.color = 'red';
        }
        else{
            li.style.textDecoration = 'none';
        }
    });


    li.append(checkbox);
    
    ul.append(li);

    // const li = document.createElement('li');
    // li.textContent = inputev[0].value
    // ul.append(li);

});








