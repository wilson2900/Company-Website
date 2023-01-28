// Search Form section code
let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
}
window.onscroll = () => {
    searchForm.classList.remove('active');
}

$(document).ready(function(){

    $(window).scroll(function(){
        // NAvbar bottom scrolling
        if(this.scrollY > 5){
            $('.navbar-bottom').addClass("sticky");
        } else{
            $('.navbar-bottom').removeClass("sticky");
        }
        // scroll button btn
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        } else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slide up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop:0});
    });
    // owl owlcarousel 
    $('.owl-carousel').owlCarousel({
        margin:5,
        navigation: true,
        loop:true,
        autoplay:true,
        autoplayTimeOut: 2000,
        autoplayHooverPause:true,

        responsive:{
            0: {
                items:1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav:false
            }
        }
    });
});


// Pop UP ad
const loginPopup = document.querySelector(".login-popup");
const close = document.querySelector(".close");


window.addEventListener("load",function(){

 showPopup();
 // setTimeout(function(){
 //   loginPopup.classList.add("show");
 // },5000)

})

function showPopup(){
      const timeLimit = 5 // seconds;
      let i=0;
      const timer = setInterval(function(){
       i++;
       if(i == timeLimit){
        clearInterval(timer);
        loginPopup.classList.add("show");
       } 
       console.log(i)
      },1000);
}


close.addEventListener("click",function(){
  loginPopup.classList.remove("show");
})

