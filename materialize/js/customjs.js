$(document).ready(function(){
     $('.parallax').parallax();
     $('.button-collapse').sideNav({
         menuWidth: 300, // Default is 300
         edge: 'left', // Choose the horizontal origin
         closeOnClick: false, // Closes side-nav on <a> clicks, useful for Angular/Meteor
         draggable: true // Choose whether you can drag to open on touch screens
     });
     $(".dropdown-button").dropdown();
     $('.chips').material_chip();
     $('.collapsible').collapsible();
   });