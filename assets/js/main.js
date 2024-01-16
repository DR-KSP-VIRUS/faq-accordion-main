'use strict';
const openAccordion = document.querySelectorAll(".info");

openAccordion.forEach(element =>{
    element.addEventListener("click", ()=>{
        console.log(element.lastChild.previousSibling.classlist.remove('text-content'));
    })
})