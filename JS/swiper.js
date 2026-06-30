G.F.setup_swiper=function(nomezin,delay=2500,custom){
  if(!custom){
    G.swiper_actives.push(
      new Swiper(nomezin, {
        loop: true,
      
        slidesPerView: 3,
        spaceBetween: 20,
      
        autoplay: {
          delay: delay,
          disableOnInteraction: false,
        },
      
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      
        breakpoints: {
          0: {
            slidesPerView: 1
          },
      
          768: {
            slidesPerView: 2
          },
      
          1100: {
            slidesPerView: 3
          }
        }
      })
    )
  }else{
    G.swiper_actives.push(
      new Swiper(nomezin,custom)) 
  }
}