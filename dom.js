// Before es6, there were several methods to select DOM elements. Here are the most commonly used ones:

// document.getElementById -single element 
// document.getElementsByTagName - multiple elements or element collection - html collection - array like object 
// document.getElementsByClassName - multiple elements or element collection - html collection - array like object 

// After es6, two new methods were introduced that are more versatile and easier to use:

// single - querySelector
// multiple - querySelectorAll - node list - array like object - can use forEach loop directly

// Nav design pattern
console.log('DOM selection methods');


// const mainCon = document.querySelector('mainContainer');
// mainCon.style.width = '80%'; mainCon.style.margin = '0 auto';
// mainCon.style.border = '2px solid black'; mainCon.style.padding = '10px';

const bdy = document.querySelector('body');
bdy.style.margin = '0';
bdy.style.fontFamily = 'Arial, sans-serif';
bdy.style.color = '#0b0028ff';

const navTop = document.querySelector('.navTop');
navTop.style.backgroundColor = '#2f2f2fff';
navTop.style.height = '60px';
navTop.style.lineHeight = '60px';
navTop.style.color = 'white';
navTop.style.overflow = 'auto'; // clear float  

const navTopa = document.querySelector('.navTop img');
navTopa.style.float = 'left';
navTopa.style.width = '60px';


const navTopForm = document.querySelectorAll('.navTop form');
navTopForm.forEach(el =>{
    el.style.float = 'left';
    el.style.display = 'contents';
})

const navTopFormButton = document.querySelectorAll('.navTop button');
navTopFormButton.forEach(el =>{
    // el.style.float = 'left';
})



const navTopInput = document.querySelector('.navTop input');
navTopInput.style.height = '35px';
navTopInput.style.width = '60%';

// navTopInput.style.width = '500px';
navTopInput.style.marginTop = '15px';
navTopInput.style.marginLeft = '10px';
navTopInput.style.paddingLeft = '10px';
navTopInput.style.fontSize = '16px';

const navTopSearch = document.querySelector('.navTop form button');
navTopSearch.style.height = '34px';
navTopSearch.style.marginTop = '13px';
// navTopSearch.style.marginLeft = '10px';
navTopSearch.style.padding = '0 15px';
navTopSearch.style.fontSize = '16px';
// 


const navTopLoginBtn = document.querySelector('.navTopBtn');
navTopLoginBtn.style.height = '34px';
navTopLoginBtn.style.color = 'red';
navTopLoginBtn.style.marginTop = '13px';
// navTopSearch.style.marginLeft = '10px';
navTopLoginBtn.style.padding = '0 15px';
navTopLoginBtn.style.fontSize = '16px';


const navTopLoginBtnA = document.querySelector('.navTopBtn a');
navTopLoginBtnA.style.textDecoration = 'none';
navTopLoginBtnA.style.color = 'Black';

// Nav Container

const navContainer1 = document.querySelector('.navContainer1');
navContainer1.style.width = "80%";
navContainer1.style.margin = "0 auto";
navContainer1.style.overflow = "auto"; 

const navContainer2 = document.querySelector('.navContainer2');
navContainer2.style.width = "80%";
navContainer2.style.margin = "0 auto";
navContainer2.style.overflow = "auto"; 

// Item List 

const navItems = document.querySelectorAll('.navItems');
navItems.forEach(el => {
    el.style.backgroundColor = "#333333ff";
    el.style.height = "50px";
    el.style.lineHeight = "50px";
})

const navItemsul = document.querySelectorAll('.navItems ul');
navItemsul.forEach(el =>{
    el.style.listStyleType = "none";
    el.style.padding = "0";
    el.style.margin = "0";
    
})

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


// Body style


// JavaScript Color Changer
const titleContainer = document.querySelector('.titleContainer');
titleContainer.style.width = '80%';
titleContainer.style.margin = '0 auto';
titleContainer.style.textAlign = 'center';

const titleCon = document.querySelectorAll('.titleContent');
const colBtn = document.querySelectorAll('.colorBtn');


colBtn.forEach((el, ind) =>{
    el.addEventListener('click', function(){
        titleCon.forEach(el =>{
            if(ind === 0) el.style.color = '#760000';
            else if(ind === 1) el.style.color = 'green';
            else if(ind === 2) el.style.color = '#000053';
        })
    })
})
// colBtn[0].addEventListener('click', function(){
//     titleCon.forEach(el =>{
//         el.style.color = '#760000';
//     })
// })
// colBtn[1].addEventListener('click', function(){
//     titleCon.forEach(el =>{
//         el.style.color = 'green';
//     })
// })

const title = document.querySelector('#title');
const btn = document.querySelector('#btn');
// title.textContent = 'React js'; -> Everything as text
// title.innerText = 'django'; -> Visible text only
// title.innerHTML =  'Featured  Products'; -> Can add html tags

// console.log(title.innerText);
title.innerHTML = 'Hi this is <b> Al Muksid </b>.';

// Method to work with attributes.
// getAttribute
// setAttribute
// hasAttribute
// removeAttribute

// console.log(title.getAttribute('id')); // id
// title.setAttribute('class', 'col_cls'); // add class attribute

// objective: add class "text-decoration" to the title using setAttribute method
// title.setAttribute('class', 'text-decoration');

title.classList.add('col_cls', );
title.classList.remove('col_cls');

btn.addEventListener('click', function(){
    title.classList.toggle('col_cls');
})


// console.log(title.classList);

// // section4-----------------------------

// const imgC = document.querySelector('#imageLst');
// const imageBtn = document.querySelector('#imageBtn');

// // imgC.setAttribute
// function changeImg() {
//     imgC.setAttribute('src', 'https://media.newindianexpress.com/newindianexpress%2F2025-03-06%2Fiqckg3wi%2FMushfiqur-Rahim.jpg?w=1024&auto=format%2Ccompress&fit=max');
// }
// imageBtn.addEventListener('click', changeImg);
// // imageBtn.addEventListener('click', () => {
// //     imageLst.setAttribute('src', 'https://media.newindianexpress.com/newindianexpress%2F2025-03-06%2Fiqckg3wi%2FMushfiqur-Rahim.jpg?w=1024&auto=format%2Ccompress&fit=max')
// // })

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