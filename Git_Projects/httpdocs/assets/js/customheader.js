    //Lấy id section news
var news = document.getElementById("news");
    //Lấy id footer
var footer = document.getElementById("footer");
var menutoggle = document.getElementById("menu-toggle");
var linetoggle = document.getElementById("linetoggle");

menutoggle.addEventListener("click", function(){
    /*Chạy điều kiện else trước*/
    if (menu.style.display === "block") { 
        news.style.display = "block";
        footer.style.display = "block";      
    }else{  
        news.style.display = "none";
        footer.style.display = "none";      
    }  
});