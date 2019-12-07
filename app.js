$(document).ready(function(){
    
  $(".burger").click(function()
        {
            $("#side-tabs").css("width", "200px");
            $("#row").css("margin-left", "200px");
            $("header").css("margin-left", "200px");
            $(".content").css("margin-left", "200px");

        });
   
});
const cartSlide = () => {
  const cart = document.queryselector(".cart");
  const cartTab = document.queryselector(".cart-tab");

  cart.addEventListiner('click', ()=> {
      cartTab.toggle('.tab-active');
  });

}

cartSlide();