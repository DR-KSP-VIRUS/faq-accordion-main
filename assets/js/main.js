'use strict';
const openAccordion = document.querySelectorAll(".topic");

openAccordion.forEach(element =>{
    element.addEventListener("click", function(){
        let contentText = this.nextElementSibling;
        if (contentText.style.maxHeight){
            contentText.style.maxHeight = null;
        }else{
            contentText.style.maxHeight = `${contentText.scrollHeight}px`;
        }
    })
})