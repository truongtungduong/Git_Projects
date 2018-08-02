
/*Code fixed cho logo*/
var logo = document.querySelector(".logosite");
 // Return the pixels the current page has been 
 // 180 is height which size of logo reduce
 // with width and height of logo: 93px, 70px
window.onscroll = function(){
    if (window.pageYOffset >0) {
        logo.style.width = "44px";
        logo.style.height = "31px";
    }else{
        logo.style.width = "88px";
        logo.style.height = "63px";
    }  
}

// Code menu toggle, thiết lập Open and Close cho Toggle và menu
var menu = document.querySelector(".menu");
var menutoggle = document.getElementById("menu-toggle");
var linetoggle = document.getElementById("linetoggle");

menutoggle.addEventListener("click", function(){ 
    /*Chạy điều kiện else trước*/   
    if (menu.style.display === "block") {
        linetoggle.classList.remove("open");
        menu.style.display = "none";
       
    }else{
        linetoggle.classList.add("open");        
         menu.style.display = "block";      
    }      
});

// Code downmenu
/*Lấy class icon-menu*/
var iconsub1 = document.querySelector(".iconsub1");
/*Lấy id submenu1*/
var subnav1 = document.querySelector("#sub-nav-item-1");
subnav1.addEventListener("click", function(){
    var submenu1 = document.querySelector("#ul-sub-1");
    if (submenu1.style.display === "block") {
        submenu1.style.display = "none";
        iconsub1.classList.remove("multi");
    }else{
        submenu1.style.display = "block";
        iconsub1.classList.add("multi");
    }    
});


/*Lấy class icon-menu*/
var iconsub2 = document.querySelector(".iconsub2");
// Lay id submenu 2
var subnav2 = document.querySelector("#sub-nav-item-2");
subnav2.addEventListener("click", function(){
    var submenu2 = document.querySelector("#ul-sub-2");
    if (submenu2.style.display === "block") {
        submenu2.style.display = "none";
        iconsub2.classList.remove("multi");
    }else{
        submenu2.style.display = "block";
        iconsub2.classList.add("multi");
    }
});





