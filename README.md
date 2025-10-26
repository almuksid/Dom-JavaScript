# JavaScript Dom

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

## 2. Asynchronous Example: setTimeout()

```js
console.log('Dom JavaScript');
setTimeout(function(){
    console.log('Dom SetTimeOut');
}, 4000);
console.log('Insha Allah Islamik Khalafat');
```
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