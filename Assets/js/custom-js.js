$('button').sideNav({
    menuWidth:260,
    edge: 'left', // this is the horizontal origin 
    closeOnClick: false,/// close the side nav on <a>, useful for angular
    draggable: true// wheather you can drag to open touch screens 
});

$('.modal').modal({
    dismissible: true, //Modals can be dismissed by clicking the the outside of the model 
    opacity: .5, // this handles the opacity 
    inDuration: 300,// transition duration 
    outDuration: 200, // transition duration 
    startingTop: '4%', // starting top style attributes
    endingtop: '10%',
    ready: function (modal, trigger) { // here we will call back for the model and trigger parameters that available

    },
    complete: function () { } // call back for the modal to close
});

$('.collapsible').collapsible({

    accordion: false,  // a setting that changes the collapsible behavior of the expandable accordion style.
    onOpen: function (el) { }, // callback for collapsable open
    onClose: function (el) { } //callback for collapsable close 

});
$(document).ready(function () {

    $('select').material_select();

});
$('#feedback').val(' ');
$('#feedback').trigger('autoresize');


$("#search").on("keyup", function () {
    var value = $(this).val();

    $("table tr").each(function (index) {
        if (index !== 0) {

            $row = $(this);

            var id = $row.find("td:first").text();

            if (id.indexOf(value) !== 0) {
                $row.hide();
            }
            else {
                $row.show();
            }
        }
    });
});