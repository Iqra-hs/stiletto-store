
       
        fadeOut();
       
       //    menu bar js 

let menuBar = document.querySelector('#menu-bars');
let navBar = document.querySelector('.navbar');

menuBar.onclick = () =>{
    menuBar.classList.toggle('fa-times');
    navBar.classList.toggle('active');
}

window.onscroll = () =>{
    menuBar.classList.remove('fa-times');
    navBar.classList.remove('active');

   
}

        //    shoping cart js 

        let shoppingCart = document.querySelector('.shopping-cart');
        
        document.querySelector('#cart').onclick = () =>{
            shoppingCart.classList.toggle('active');
            searchBar.classList.remove('active');
            loginBox.classList.remove('active');
        }
        
        window.onscroll = () =>{
            shoppingCart.classList.remove('active');
        }

          //    search bar js 

          let searchBar = document.querySelector('.search-form');
        
          document.querySelector('#search').onclick = () =>{
              searchBar.classList.toggle('active');
              loginBox.classList.remove('active');
              shoppingCart.classList.remove('active');
          }
          
          window.onscroll = () =>{
              searchBar.classList.remove('active');
          }

            //    login form js 

            let loginBox = document.querySelector('.login');
        
            document.querySelector('#user').onclick = () =>{
                loginBox.classList.toggle('active');
                searchBar.classList.remove('active');
                shoppingCart.classList.remove('active');
            }
            
            window.onscroll = () =>{
                loginBox.classList.remove('active');
            }
  

            // slider bar js 

         var swiper = new Swiper(".arrival-slider", {
            loop:true,
            spaceBetween: 20,
            centeredSlides: true,
            autoplay: {
              delay: 2500,
              disableOnInteraction: false,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },

            breakpoints: {
                640:{
                    slidesPerView:1,
                },

                768:{
                    slidesPerView:2,
                },
            
                1024:{
                    slidesPerView:3,
                },
            }
    
          });

                 //featured slider bar js 

         var swiper = new Swiper(".featured-slider", {
            loop:true,
            spaceBetween: 20,
            centeredSlides: true,
            autoplay: {
              delay: 9500,
              disableOnInteraction: false,
            },

            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },

            breakpoints: {
                640:{
                    slidesPerView:1,
                },

                768:{
                    slidesPerView:2,
                },
            
                1024:{
                    slidesPerView:3,
                },
            }
    
          });


// review slider 

        var swiper = new Swiper(".review-slider", {
            loop:true,
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            autoplay: {
                      delay: 2500,
                       disableOnInteraction: false,
                    },
            coverflowEffect: {
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            },
           
          });


          function setUpTabs (){
              document.querySelectorAll(".tabs-btn").forEach(button =>{
                  button.addEventListener("click", () => {
                      const tabHeader = button.parentElement;
                      const tabsContainer = tabHeader.parentElement;
                      const tabNumber = button.dataset.foaTab;
                      const tabToActivate = tabsContainer.querySelector('.tabs-content[data-tab="${tabNumber}"]');

                     tabHeader.querySelectorAll(".tabs-btn").forEach(button =>{
                         button.classList.remove(".tabs-button-active");
                     });

                     tabsContainer.querySelectorAll(".tabs-content").forEach(tab =>{
                        tab.classList.remove(".content-active");
                    });

                  });
              });
          }

          document.addEventListener ("DomContentLoaded", () => {
            setUpTabs ();
          });

       
        // scroll top 

        const toTop = document.querySelector("#scroll-top");

        window.addEventListener("scroll", () => {
            if(window.pageYOffset > 100) {
                toTop.classList.add("active");
            }else{
                toTop.classList.remove("active");
            }
        });


        function loader(){
            document.querySelector(".loader").classList.add("active");
        }

        function fadeOut(){
            setTimeout(loader, 4000);
        }


 