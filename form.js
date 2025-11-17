// const formCon = document.querySelector('#selectText');
// const clickBtn = document.querySelector('#selectBtn');
// const selectColor = document.querySelector('#selectColor');
// const newText = document.createElement('h2');

// selectColor.addEventListener('input', () => {
//     formCon.style.color = selectColor.value
// })
// // const color = selectColor.value;
// // formCon.style.color = color;

// // newText.textContent = "Hello Rafi"
// clickBtn.addEventListener('click', () => {
//     newText.textContent = 'Hello Rafi';
//     newText.style.color = selectColor.value;
// })
// document.body.append(newText);


// const form = document.querySelector('#evForm');
// const inputE = document.querySelectorAll('#evInput');
// const ul = document.querySelector('#evUl');

// form.addEventListener('submit', (event) => {
//     event.preventDefault();
//     const li = document.createElement('li');
//     const checkbox = document.createElement('input');
//     checkbox.type = 'checkbox';
//     checkbox.checked = false;

//     checkbox.addEventListener('click', () =>{
//         if(checkbox.checked){
//             li.style.color = 'red'
//         }
//         else{
//             li.style.color = 'black'
//         }
//     })
//     // createInput.

//     li.textContent = inputE[0].value;
//     li.append(checkbox);

//     ul.append(li);

// })


// const grandparent = document.querySelector('.grandparent');
// const parent = document.querySelector('.parent');
// const child = document.querySelector('.child');

// grandparent.addEventListener('click', () => {
//     console.log('Grandparent');
// });

// parent.addEventListener('click', () => {
//     console.log('Parent');
// });

// child.addEventListener('click', () => {
//     console.log('child');
// }, {once:true});

// grandparent.addEventListener('click', (event) => {
//     event.stopPropagation();
//     console.log('Grandparent');
// }, {capture: true});

// parent.addEventListener('click', () => {
//     console.log('Parent');
// }, {capture: true});

// child.addEventListener('click', () => {
//     console.log('child');
// }, {capture: true});

// let counter = 0;
// function sayRafi(){
//     console.log('Welcome Rafi');
//     counter++
//     if(counter == 3){
//         child.removeEventListener('click', sayRafi)
//     }
// }

// child.addEventListener('click', sayRafi);

// setTimeout(() => {
//     child.removeEventListener('click', sayRafi);
// }, 3000);

// event delegation

const div = document.querySelectorAll('div');

// div.forEach(el => {
//     el.addEventListener('click', (event) => {
//         console.log(event.target);
        
//     })
// });
document.body.addEventListener('click', (e) => {
    if(e.target.matches('div')){
        console.log('Hello Rafi')
    }
});

const newDiv = document.createElement('div');
newDiv.style.width = '150px';
newDiv.style.height = '150px';
newDiv.style.background = 'green';
newDiv.style.color = 'white';
document.body.append(newDiv)


