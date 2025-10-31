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
# 6. addEventListener: JavaScript Color Changer


```js
// addEventListener: First Method

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
