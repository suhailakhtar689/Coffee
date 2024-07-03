let nav = document.querySelector('.nav');

document.querySelector('#menu-btn') .onclick = () =>{
    nav.classList.toggle('active');
     searchForm.classList.remove('active');
    cartItem.classList.remove('active');

}

let  searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn') .onclick = () =>{
    searchForm.classList.toggle('active');
    nav.classList.remove('active');
     cartItem.classList.remove('active');

}


let cartItem = document.querySelector('.cart-items-container');

document.querySelector('#menu-btn') .onclick = () =>{
    cartItem.classList.toggle('active');
    nav.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    nav.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}
