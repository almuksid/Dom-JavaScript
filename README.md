# JavaScript Dom
### Want to know
```js
// Common addEventListener() Event Types
```
## JavaScript DOM Basic Reference

| Term / Keyword       | Type     | Description |
|-----------------------|----------|--------------|
| **document**          | Object   | Represents the whole HTML document; allows access to all elements inside it. |
| **getElementById()**  | Method   | Used to find and access an element by its unique `id`. |
| **window**            | Object   | The global object representing the browser window. |
| **this**              | Keyword  | Refers to the current object in context (e.g., inside `window`, `this` → `window`). |


---

### Document Logging
```js
console.log(document);      // Shows HTML structure
console.dir(document);      // Shows JS object structure of the document
```
---

## 1. Synchronous Example — Change Element Text Based on User Input 

```js 
let title = document.getElementById('title');

const age = prompt('Enter your age: ');
if(age >= 18){
    title.textContent = 'Hello JavaScript Dom';
}else{
    title.textContent = 'Get Out';
}
```
---
---

## 2. Asynchronous Example: setTimeout()

```js
console.log('Dom JavaScript');
setTimeout(function(){
    console.log('Dom SetTimeOut');
}, 4000);
console.log('Insha Allah Islamik Khalafat');
```
---
---

# 3.I. DOM Selection Methods Overview Before es6

| Method | Description | Returns | Type | Example | Loopable |
|--------|--------------|----------|------|----------|-----------|
| `document.getElementById()` | Selects a **single element** by its ID | Single Element | `HTMLElement` | `document.getElementById('title')` | ❌ |
| `document.getElementsByTagName()` | Selects **all elements** with a given tag name | Collection | `HTMLCollection` | `document.getElementsByTagName('h1')` | ✅ |
| `document.getElementsByClassName()` | Selects **all elements** with a specific class name | Collection | `HTMLCollection` | `document.getElementsByClassName('listItem')` | ✅ |

---

### Style Elements by Tag Name

```js
let headings = document.getElementsByTagName('h1');
headings[0].style.paddingTop = 20 + 'px';

for(let i = 0; i < headings.length; i++){
    headings[i].style.color = "gray";
}
```
---

###  Use for in/of Loop for Simplicity

```js
for(let el of headings){
    el.style.color = 'gray';
}

console.log(headings);
```
---

### Style Elements by Class Name

```js
let items = document.getElementsByClassName('listItem');

for(let el of items){
    el.style.color = "green";
}
console.log(items);
```
---
---
 

# 4. After es6, two new methods were introduced that are more versatile and easier to use:
### NodeList
**element, text node, comment node**
### single - querySelector
### multiple - querySelectorAll - node list - array like object - can use forEach loop directly

## QuerySelector
```js
let titles = document.querySelector('h1:nth-child(2)');
titles.style.color ='black';
```
---

## QuerySelectorAll
```js
let items = document.querySelectorAll('li');
items[0].style.color = 'Green'; 
items.forEach((el) => {
    el.style.color = 'green';
})
console.log(items); 
```
---
--- 

# 5. Navigation Items Styling & Hover Effect
```js
const navItemsa = document.querySelectorAll('.navItems li a');
navItemsa.forEach(el =>{
    el.style.color = 'white';
    el.style.textDecoration = "none";
    el.style.float = "left";
    el.style.fontSize = '18px';
    el.style.paddingRight = '20px';

});

navItemsa.forEach(el =>{
    el.addEventListener('mouseover', () => {
        el.style.textDecoration = "underline";
    })
    el.addEventListener('mouseout', () => {
        el.style.removeProperty('text-decoration');

    })
});

```
---
---

# 6. addEventListener: JavaScript Color Changer

🧠 Shortcut Memory Trick

🔸 “Click = Element”
🔸 “Keyboard = Document”

## A.🖱️ Mouse Events 

**click**, **dblclick**, **mousedown**, **mouseup**, **mousemove**, **mouseenter**, **mouseleave**, **mouseover**, **mouseout**, **contextmenu**

```html
<div class="box section3">Hover, Click, or Move Here</div>
```

```js
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
```
---

## B.⌨️ Keyboard Events

**keydown**, **keypress**, **keyup**
```html
<div class="section4">
    <h2 class="keyboardEventTitle">Press any key on your keyboard</h2>
    <p id="keyboardEvent">Waiting for input...</p>
</div>
```
```js
const keyboardEvent = document.querySelector('#keyboardEvent');

document.addEventListener('keydown', (event) =>{
    keyboardEvent.textContent = `Key Down: ${event.key}`
    keyboardEvent.style.color = 'orange';
});

document.addEventListener('keypress', (event) =>{
    keyboardEvent.textContent = `Key Press: ${event.key} `
    keyboardEvent.style.color = 'green'
});

document.addEventListener('keyup', (event) =>{
    keyboardEvent.textContent = `Key Up ${event.key}`
    keyboardEvent.style.color = 'crimson';
});
```
---

## C.🖊️ Form / Input Events

**input**, **change**, **focus**, **blur**, **submit**, **reset**
```html
<form id="myForm" class="section5" style="height: 200px;">
    <h2>Type Your Name</h2>

    <label for="userName">Name:</label>
    <input type="text" id="userName" name="userName" placeholder="Enter your Name"><br>

    <label for="emailAdd">Email:</label>
    <input type="text" id="emailAdd" name="emailAdd" placeholder="Enter your Email"><br>

    <label for="focusText">Focus:</label>
    <input type="text" id="focusText" name="focusText" placeholder="Click Here"><br>

    <label for="blurTest">Blur:</label>
    <input type="text" id="blurTest" name="blurTest" placeholder="Click and then click outside"><br>

    <button type="submit">Submit</button>
    <button type="reset">Reset</button>

    <p id="display"></p>
</form>
```
```js
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
```
---

## D.📱 Window / Document Events

**load**, **resize**, **scroll**, **unload**, **DOMContentLoaded**
```html
<div class="section4">
    <p id="display"></p>
</div>
```
```js
window.addEventListener('load', function(){
    display.textContent = "Page Loaded";
    console.log('Page loaded');
});

window.addEventListener('resize', function(){
    display.textContent = 'Window Size changed';
    console.log('Window Size changed');
});

window.addEventListener('scroll', function(){
    display.textContent = 'Page Scrolled';
    console.log('Page Scrolled');
});

window.addEventListener('unload', function(){
    display.textContent = "Page Unloaded";
    console.log('Page Unloaded');
});

window.addEventListener('DOMContentLoaded', function(){
    display.textContent = 'Dom Content Loaded';
    console.log('Dom Console Loaded');
});

window.addEventListener('beforeunload', (event) =>{
    event.preventDefault();
    event.returnValue = '';
});
```
---
## D.1. 2nd method📱 Window / Document Events
```html
<h1>Window / Document Events Demo</h1>
<div id="output"></div>
```
```js
    // HTML
  <h1>Window / Document Events Demo</h1>
  <div id="output"></div>

    // script
    const output = document.getElementById('output');

    function showEvent(text) {
      const div = document.createElement('div');
      div.className = 'event';
      div.textContent = text;
      output.appendChild(div);
    }

    // 1 load event
    window.addEventListener('load', function(){
      showEvent('load event - Page fully loaded with all resources.');
    });
```
---
## E. 🧩 Clipboard Events

**copy**, **cut**, **paste**


| Direction | Method      | Meaning                                | Typical Event |
|-----------|------------|----------------------------------------|---------------|
| → Clipboard | `setData()` | Send data **into** the clipboard       | `copy` / `cut` |
| ← Clipboard | `getData()` | Take data **from** the clipboard       | `paste`        |

```html
<textarea name="" id="clipText">Hi this is Al Muksid</textarea>
```
```js
const clipboardText = document.querySelector('#clipText');

// Use case: You can modify clipboard content using event.clipboardData.setData().
clipboardText.addEventListener('copy',(event) =>{
    event.preventDefault();
    event.clipboardData.setData('text/plain', 'You have no permition to copy this text');
    alert('You have not good working to copy this text');
    console.log('Copy this text');
});

clipboardText.addEventListener('cut', (event)=>{
    // event.preventDefault(); // When use preventDefault it can't cut your text.
    // console.log("You can't cut this text");
    console.log("Cut this text");
});

clipboardText.addEventListener('paste', event =>{
    event.preventDefault()
    let pastData = event.clipboardData.getData('text').toUpperCase();
    clipboardText.value += pastData;
    alert('you paste: ' + pastData);
})
```
---
## F. 🧭 Drag & Drop Events

**drag**, **dragstart**, **dragend**, **dragenter**, **dragover**, **dragleave**, **drop**

```html
<h2 style="text-align:center;"> Drag & Drop Example </h2>
<div class="container">
    <div id="dragItem" class="box drag-item" draggable="true"> Drag Me </div>
    <div id="dropZone" class="box"> Drop Here </div>
</div>
```
```js
// cursor: grab; ***
const dragItem = document.querySelector('#dragItem');
const dropZone = document.querySelector('#dropZone');


dragItem.addEventListener('dragstart', () => {
    console.log("Drag start");
});

dragItem.addEventListener('drag', () => {
    console.log('Continue to druging')
});

dragItem.addEventListener('dragend', () => {
    console.log('Drag End');
});

dropZone.addEventListener('dragenter', () =>{
    dropZone.style.backgroundColor = 'orange';
    dropZone.style.color = 'white';
    console.log('Entered drop zone');
})

dropZone.addEventListener('dragover', (event) => {
    event.preventDefault();
    dropZone.style.backgroundColor = "green";
    dropZone.style.color = "white";
    console.log('Dragging over drop zone');
});


dropZone.addEventListener('drop', () => {
    dropZone.style.backgroundColor = 'Black';
    dropZone.style.color = 'white';
    console.log('Drop Done');
});
```
---

### Example
```js
// addEventListener: First Method

const titleCon = document.querySelectorAll('.titleContent');
const colBtn = document.querySelectorAll('.colorBtn');

colBtn[0].addEventListener('click', function(){
    titleCon.forEach(el =>{
        el.style.color = '#760000';
    })
})
colBtn[1].addEventListener('click', function(){
    titleCon.forEach(el =>{
        el.style.color = 'green';
    })
})

// addEventListener: Another Method

colBtn.forEach((el, ind) =>{
    el.addEventListener('click', function(){
        titleCon.forEach(el =>{
            if(ind === 0) el.style.color = '#760000';
            else if(ind === 1) el.style.color = 'green';
            else if(ind === 2) el.style.color = 'blue';
        })
    })
})
```
---
---
# 7. Difference Between textContent, innerText, and innerHTML
| Property       | Description              | Notes |
|----------------|--------------------------|--------|
| `textContent`  | Everything as text       | Includes hidden text and ignores HTML tags |
| `innerText`    | Visible text only        | Ignores hidden text and respects CSS styles |
| `innerHTML`    | Can add or get HTML code | Reads and writes HTML elements |

---
---
# 8. // Method to work with attributes
| Method          | Description |
|-----------------|-------------|
| **getAttribute()**  | Gets the value of an attribute. |
| **setAttribute()**  | Sets a new value for an attribute. |
| **hasAttribute()**  | Checks if an element has a specific attribute. |
| **removeAttribute()** | Removes an attribute from an element. |
---
---

# 9. Form Events in JavaScript
```html
<form id="newForm" action="" method="get">
    <label for="">Enter your Name: </label>
    <input type="text" name="text" id="inputa" />
    <br />
    <label for="">Enter your email: </label>
    <input type="email" name="email" id="inputa" />
    <br />
    <input type="color" name="color" id="inputa" />
    <br />
    <input type="submit" value="Submit" id="inputa" />
</form>
<h3 id="textForForm"> Your Name </h3>
```
```js
const newForm = document.querySelector('#newForm');
const input = document.querySelectorAll('#inputa');
const formText = document.querySelector('#textForForm');

newForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formText.textContent = input[0].value;
    let color = input[2].value;
    formText.style.color = color;
    // let val = input[0].value;
    // formText.textContent = val;
    console.log('Submit form');

});
```
---
---
# 10. Problem Solving 
## Challenge 1
```html
 <!-- challenge 1 -->
        <img id="setImage" class="container"
            src="https://zakirnaik.com/wp-content/themes/zakir/assets/img/content/about/intro_2.jpg" alt="" srcset="" />
        <br />
        <h2 id="setName" class="container txt">Enter Your Name</h2>
        <br />
        <input id="ChangeButton" class="container" type="submit" value="Change" />

```
```js
const images = [
    { name: "Mountain", url: "https://picsum.photos/id/1018/600/400" },
    { name: "Beach", url: "https://picsum.photos/id/1015/600/400" },
    { name: "Forest", url: "https://picsum.photos/id/1020/600/400" },
    { name: "City", url: "https://picsum.photos/id/1031/600/400" },
    { name: "Desert", url: "https://picsum.photos/id/1003/600/400" }
]

const setName = document.querySelector('#setName');
const setImage = document.querySelector('#setImage');
const changeButton = document.querySelector('#ChangeButton');

changeButton.addEventListener('click', () =>{
    const random =Math.floor(Math.random() * images.length);
    const selectedImage = images[random];

    setImage.src = selectedImage.url;
    setName.textContent = selectedImage.name;
    console.log(selectedImage);
    // setName.textContent = images[1].name;
    // setImage.src = images[1].url;
});
```
---

## Challenge 2
```js
<form id="calcForm">
    <label for="num1">Number 1:</label>
    <input type="number" id="num1" required>
    <br>
    <label for="operator">Operator:</label>
    <select id="operator">
        <option value="plus">+</option>
        <option value="minus">-</option>
        <option value="multiply">*</option>
        <option value="divide">/</option>
    </select>
    <br>
    <label for="num2">Number 2:</label>
    <input type="number" id="num2" required>
    <br>
    <button type="button" id="calculateBtn">Calculate</button>
</form>

<h2>Result: <span id="result">0</span></h2>
<script src="dom.js"></script>
```

```js
const calculateBtn = document.getElementById('calculateBtn');
const result = document.getElementById('result');

calculateBtn.addEventListener('click', function() {
  const num1 = parseFloat(document.getElementById('num1').value);
  const num2 = parseFloat(document.getElementById('num2').value);
  const operator = document.getElementById('operator').value;

  let output;

  if (isNaN(num1) || isNaN(num2)) {
    output = 'Please enter both numbers!';
  } else {
    switch (operator) {
      case 'plus':
        output = num1 + num2;
        break;
      case 'minus':
        output = num1 - num2;
        break;
      case 'multiply':
        output = num1 * num2;
        break;
      case 'divide':
        output = num2 !== 0 ? num1 / num2 : 'Cannot divide by zero';
        break;
      default:
        output = 'Invalid operator';
    }
  }

  result.textContent = output;
});
```

---
---