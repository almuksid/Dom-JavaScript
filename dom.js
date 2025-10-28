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
        el.style.color = 'white';
        el.style.textDecoration = "underline";
        el.style.float = "left";
        el.style.fontSize = '18px';
        el.style.paddingRight = '20px';
    })
    el.addEventListener('mouseout', () => {
        el.style.color = 'white';
        el.style.textDecoration = 'none';
        el.style.float = "left";
        el.style.fontSize = '18px';
        el.style.paddingRight = '20px';
    })
});


// Body style

const titleContainer = document.querySelector('.titleContainer');
titleContainer.style.width = '80%';
titleContainer.style.margin = '0 auto';
titleContainer.style.textAlign = 'center';

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