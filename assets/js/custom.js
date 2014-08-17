
// $(function () {
//   var options = {
//     valueNames: [ 'font-name', 'font-id', 'font-unicode', 'font-created', 'font-categories' ]
//   };

//   var fonts = new List('fonts', options);
// });



$(document).ready(function(){

    $("[rel=tooltip]").tooltip({
        animation: true,
    });

    // find filter
    $('input#font-filter-box').quicksearch('.list', {
        'delay': 500,
        'bind': 'keyup keydown',
        'onBefore': function () {
            clearDisplay();
        }
    });

    function clearDisplay () {
        // $('.something').empty().hide();
    }
});
