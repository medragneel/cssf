//const navToggle = document.querySelector('#nav-toggle');
//const ul = document.querySelector('nav ul');
//navToggle.addEventListener('click',()=>{
//    navToggle.classList.toggle('active')
//    if(navToggle.classList.contains('active')){
//        ul.style.display = 'block'
//    }else{
//        ul.style.display = 'none'
//    }
//    
//})
// alert close btn
const closeBtn = document.querySelector('.close-btn');

closeBtn.addEventListener('click',()=>{
    closeBtn.parentElement.style.display = 'none'
})



