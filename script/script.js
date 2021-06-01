var burger = document.querySelector('.burger');
burger.addEventListener('click',()=>{
    document.querySelector('.fa-bars').classList.toggle('fa-rotate-90');
    document.querySelectorAll('.social-media').forEach(e => e.classList.toggle('header-icon'));
    document.querySelector('.fa-bars').classList.toggle('fa-rotate-90');
    document.querySelector('.connect').classList.toggle('hidden');

})
