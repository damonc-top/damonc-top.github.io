!function(){var o,t;window.innerWidth<=770&&(o=document.querySelector("#headerMenu"),t=document.querySelector("#headerNav"),o.onclick=function(e){e.stopPropagation(),o.classList.contains("active")?(o.classList.remove("active"),t.classList.remove("nav-show")):(t.classList.add("nav-show"),o.classList.add("active"))},document.querySelector("body").addEventListener("click",function(){t.classList.remove("nav-show"),o.classList.remove("active")}))}(),function(){var e=document.querySelector(".back-to-top"),o=document.querySelector(".back-to-top a");window.addEventListener("scroll",function(){200<Math.max(document.documentElement.scrollTop,document.body.scrollTop)?e.classList.add("back-to-top-show"):e.classList.remove("back-to-top-show")}),o.addEventListener("click",function(e){e.preventDefault(),window.scrollTo({top:0,behavior:"smooth"})})}(),document.querySelectorAll(".grid-item");