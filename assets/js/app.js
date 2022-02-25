// $('document').ready(function(){
//     $("a#icon-menu-respon").click(function(){
//       $("ul.respon-main-menu").stop().slideToggle();
//       return false;
//     });
   
// });

// // ============================end================================
// $('document').ready(function(){
//   $("a .icon-angle").click(function(){
//   $("ul.list-info").stop().slideToggle();
//  return false;
//   });
//   });
//   // ===================end==============================

$(document).ready(function(){
$('.list-nav ul li a').click(function(){
  $('ul.sub-list-nav').stop().slideToggle(1000);
  return false;
});
});


