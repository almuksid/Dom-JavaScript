// 🖱️ Mouse Events

const box = document.querySelector('.box');

box.addEventListener('click', () =>{
    box.style.backgroundColor = 'red';
    box.textContent = 'Clicked!';
    console.log('Box clicked');
    box.style.color = 'white';
});
box.addEventListener('dblclick', () =>{
    box.style.backgroundColor = 'green';
    box.textContent = 'Double Clicked!';
    console.log('Box double clicked');
    box.style.color = 'white';
});
box.addEventListener('mousedown', () =>{
    box.style.backgroundColor = 'blue';
    box.textContent = 'mouseDown';
    console.log('Mouse Down');
    box.style.color = 'white';
});
box.addEventListener('mouseup', () => {
    box.style.backgroundColor = 'pink';
    box.textContent = 'Mouse Up';
    console.log('Mouse Up');
    box.style.color = 'white';
});
box.addEventListener('mousemove', () => {
    box.style.backgroundColor = '#350028ff';
    box.textContent = 'Mouse Moved';
    console.log('mouseup event fired');
    box.style.color = '#bf9f9fff';
});
box.addEventListener('mouseenter', function(){
    box.style.backgroundColor = '#31cd55ff';
    box.textContent = 'Mouse Enter';
    console.log('Mouse Enter');
    box.style.color = '#ecc4c4ff';
});
box.addEventListener('mouseleave', function(){
    box.style.backgroundColor = '#203727ff';
    box.textContent = 'Mouse Leave';
    console.log('Mouse Leave');
    box.style.color = '#ffffffff';
});
box.addEventListener('mouseover', function(){
    box.style.backgroundColor = '#5324c7ff';
    box.textContent = 'mouseover';
    console.log('mouseover');
    box.style.color = '#ffffffff';
});
box.addEventListener('mouseout', function(){
    box.style.backgroundColor = '#6d5f2cff';
    box.textContent = 'mouseout';
    console.log('mouseout');
    box.style.color = '#ffffffff';
});
box.addEventListener('contextmenu', function(){
    box.style.backgroundColor = '#371b28ff';
    box.textContent = 'contextmenu';
    console.log('contextmenu');
    box.style.color = '#ffffffff';
});
// ----------------------------------------------


// ⌨️ Keyboard Events

const keyboardEvent = document.querySelector('#keyboardEvent');

document.addEventListener('keydown', (event) =>{
    keyboardEvent.textContent = `Key Down: ${event.key}`;
    keyboardEvent.style.color = 'orange';
});

document.addEventListener('keypress', (event) =>{
    keyboardEvent.textContent = `Key Press: ${event.key} `;
    keyboardEvent.style.color = 'green';
});

document.addEventListener('keyup', (event) =>{
    keyboardEvent.textContent = `Key Up ${event.key}`
    keyboardEvent.style.color = 'crimson';
});
// ----------------------------------------------


// 🖊️ Form / Input Events

const myForm = document.querySelector('#myForm')
const user = document.querySelector('#userName');
const email = document.querySelector('#emailAdd');
const focusInput= document.querySelector('#focusText')
const blurTest= document.querySelector('#blurTest')
const display = document.querySelector('#display');

user.addEventListener('input', () => {
    display.textContent = `Name: ${user.value}`;
    console.log(user.value);
});

email.addEventListener('change', () => {
    display.textContent = `Email: ${email.value}`;
    console.log(email.value);
});

focusInput.addEventListener('focus', () =>{
    display.style.backgroundColor = 'lightyellow';
    display.textContent = `Focus Text: ${focusInput.value}`;
    console.log(focusInput.value);
});

blurTest.addEventListener('blur', () => {
    display.style.backgroundColor = 'white';
    display.textContent = 'Input lost focus!';
    console.log('Input lost focus!');
});

myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    // const namea = myForm.user.value;
    const name = myForm.userName.value;
    const emailAdd = myForm.emailAdd.value;
    const focusText = myForm.focusText.value;
    const blurTest = myForm.blurTest.value;
    display.textContent = `Form Submited \n name: ${name}, email: ${emailAdd}, focus: ${focusText}, Blur: ${blurTest} `;
    console.log('Form Submited');
});

myForm.addEventListener('reset', (event) => {
    display.textContent = 'Form Reset';
    console.log('Form Reset');
})
// ----------------------------------------------


