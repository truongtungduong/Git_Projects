/*50% Reduce when scroll logo*/
// Solution 1: Javascript
/*

var logo = document.querySelector(".c-logopc__img");
window.onscroll =function(){
  if (window.pageYOffset >113) {
     logo.style.width = "98px";
      logo.style.height = "70px";
  }else{
    logo.style.width = "196px";
      logo.style.height = "140px";
  }
  
};*/

// Solution 2: Jquery
$(document).scroll(function(){
    $(".c-logopc__img").css({width:$(this).scrollTop() > 113? "50%":"100%"});
    /*Explain: If scroll page > 113px then 
    (".c-logopc__img") reduce 50% else will be 100% initial*/
});


/*Code Active color menu*/



/*Slide show*/
$(document).ready(function(){
   $('.c-slides').owlCarousel({
        items:1,
        loop:true,    
        nav:false,
        //dots: false,
        autoplay: false,
    });

    var owl = $('.c-slides1');
    owl.owlCarousel();
    $('.c-owl_next1').click(function() {
        owl.trigger('next.owl.carousel');
    })
    $('.c-owl_prev1').click(function() {
        owl.trigger('prev.owl.carousel', [300]);
    }); 
})


// Submenu PC
/*$(".c-sublinkpc").click(function(){
   if ($(this).children(".c-navipc__sub").hasClass("c-menuopenpc--sub")){
        $(this).children(".c-navipc__sub").removeClass("c-menuopenpc--sub"); 
               
    }else{
         $(this).children(".c-navipc__sub").addClass("c-menuopenpc--sub");
       
    }  
})*/


// Open menu SP
$("#c-menutoggle").click(function(){  
    if($(".c-linetoggle").hasClass("c-menuopen")){
        $(".c-linetoggle").removeClass("c-menuopen");
        $(".c-navisp").hide();
        $(".p-index__1").show();
        $(".c-footer").show();

    }else{
        $(".c-linetoggle").addClass("c-menuopen");
        $(".c-navisp").show(); 
         $(".p-index__1").hide();
        $(".c-footer").hide();       
        
    }   
});


// Open submenuSP

$(".c-sublinksp").click(function(){
    if ($(this).children(".c-navisp__sub").hasClass("c-menuopensp--sub")){
        $(this).children(".c-navisp__sub").removeClass("c-menuopensp--sub"); 
        $(this).find(".c-plus").removeClass("c-multi");       
    }else{
         $(this).children(".c-navisp__sub").addClass("c-menuopensp--sub");
         $(this).find(".c-plus").addClass("c-multi");
    } 

});

    
   





