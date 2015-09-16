
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
    var fontMeta = $(this).data("font-meta");
    var fontUnicode = $(this).data("font-unicode");
    var fontCreated = $(this).data("font-created");
    var fontCategories = $(this).data("font-categories");


    var iconCode = '<code>&lt;i class="fa fa-' +fontId+ '"&gt;&lt;/i&gt;</code>';
    var iconMeta = fontMeta;

    $("#font-icon-title").html(fontName);
    $("#icon-code").html(iconCode);
    $("#font-icon-id").html(fontId);
    $("#fontawesome-url").attr("href", "http://fortawesome.github.io/Font-Awesome/icon/" +fontId+ "/");
    $('#font-icon').html('<i class="fa fa-' +fontId+ ' fa-5x"></i>');
    $("#font-icon-details").html("Unicode: " +fontUnicode+ " · Created: " +fontCreated+ " · Categories: " +fontCategories);
    $("#font-icon-meta").html(iconMeta);

    $('#font-modal').modal({show:true});
    e.preventDefault();
  });
});
