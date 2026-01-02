

let ice_creem = document.getElementById('ice_creem');
let ice_creem1 = document.getElementById('item1');
let ice_creem2 = document.getElementById('item2');
let ice_creem3 = document.getElementById('item3');
let ice_creem4 = document.getElementById('item4');
let logo = document.getElementById('logo');
const search = document.getElementById('search');
const searchBox = document.getElementById('search-btn');
const password = document.getElementById('password');
const eyePassword = document.getElementById('togglePassword');

const menu = document.getElementById('menu');
const contact = document.getElementById('contact');

ice_creem1.addEventListener("click", () => {
    ice_creem.style.backgroundImage = "url('starberry.jpg')";
});
ice_creem2.addEventListener("click", () => {
    ice_creem.style.backgroundImage = "url('pistha.png')";
});
ice_creem3.addEventListener("click", () => {
    ice_creem.style.backgroundImage = "url('chocolet.png')";
});
ice_creem4.addEventListener("click", () => {
    ice_creem.style.backgroundImage = "url('mango.png')";
});

logo.addEventListener("click", () => {
    ice_creem.style.backgroundImage = "url('ice1.png')";
});


menu.addEventListener("click", () => {
    document.getElementById('ices-menu').scrollIntoView({ behavior: "smooth" });
});

contact.addEventListener("click", () => {
    document.getElementById('form').scrollIntoView({ behavior: "smooth" });
});

search.addEventListener("click", () => {

    if (searchBox.style.display === "none") {
        searchBox.style.display = "block";
    } else {
        searchBox.style.display = "none";
    }
});


eyePassword.addEventListener("click",()=>{
    if(password.type === "password"){
        password.type ="text";
        
    }else{
        password.type = "password";
    }
})










// let input = createElement('input');
// input.type = "text";
// input.placeholder = "Search Here";
// input.style.padding ="20px";
// input.style.marginleft = "10px";


// search.addEventListener("click",()=>{
//   if(!document.body.contains(input)){
//     document.body.appendChild(input);
//   }
// });






