$(document).ready(function(){
     $(".popup_zee").hide(); 
    $( ".popup_elle" ).hide();
    $( ".popup_vee" ).hide();
    $( ".popup_eff" ).hide();
    $( ".popup_kay" ).hide();
 });

$( ".close_window_link" ).click(function() {
  $( ".popup_zee" ).hide();
    $( ".popup_elle" ).hide();
    $( ".popup_vee" ).hide();
    $( ".popup_eff" ).hide();
    $( ".popup_kay" ).hide();
});

$( ".addtocart" ).click(function() {
  $( ".popup_zee" ).hide();
    $( ".popup_elle" ).hide();
    $( ".popup_vee" ).hide();
    $( ".popup_eff" ).hide();
    $( ".popup_kay" ).hide();
});

$( ".addtocart_zee" ).click(function() {
  $( ".popup_zee" ).show();
});

$( ".addtocart_elle" ).click(function() {
  $( ".popup_elle" ).show();
});

$( ".addtocart_vee" ).click(function() {
  $( ".popup_vee" ).show();
});

$( ".addtocart_kay" ).click(function() {
  $( ".popup_kay" ).show();
});

$( ".addtocart_eff" ).click(function() {
  $( ".popup_eff" ).show();
});