
$(document).ready(function(){

  $("[rel=tooltip]").tooltip({
    animation: true,
  });

  // find filter
  $('input#font-filter-box').quicksearch('.card-column', {
    'delay': 500,
    'bind': 'keyup keydown',
    'onBefore': function () {
      clearDisplay();
    }
  });

  function clearDisplay () {
    // $('.something').empty().hide();
  }

  $('.link-div').click(function(e){
    var fontId = $(this).data("font-id");
    var fontName = $(this).data("font-name");

    var fontCode = '<code>&lt;i class="fa fa-' +fontId+ '"&gt;&lt;/i&gt;</code>';

    $("#font-icon-title").html(fontName);
    $("#icon-code").html(fontCode);
    $("#fontawesome-url").attr("href", "http://fortawesome.github.io/Font-Awesome/icon/" +fontId+ "/");
    $('#font-icon').html('<i class="fa fa-' +fontId+ ' fa-5x"></i>');

    $('#font-modal').modal({show:true});
    e.preventDefault();
  });
});
