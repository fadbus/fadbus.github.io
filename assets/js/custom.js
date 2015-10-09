
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

    var iconCode = '&lt;i class="fa fa-' +fontId+ '"&gt;&lt;/i&gt;';
    var iconMeta = fontMeta;
    var iconDetails = "";

    $("#font-icon-meta").empty();
    $("#font-icon-details").empty();

    if(fontUnicode.length > 0){
      iconDetails += "<li><b>Unicode:</b>&nbsp;"+fontUnicode+"</li>";
    }

    if(fontCreated.length > 0){
      iconDetails += "<li><b>Created:</b>&nbsp;"+fontCreated+"</li>";
    }

    if(fontCategories.length > 0){
      iconDetails += "<li><b>Categories:</b>&nbsp;"+fontCategories+"</li>";
    }

    $("#font-icon-title").html(fontName);
    $("#font-icon-code").html(iconCode);
    $("#font-icon-id").html(fontId);
    $("#fontawesome-url").attr("href", "http://fortawesome.github.io/Font-Awesome/icon/" +fontId+ "/");
    $('#font-icon-icon').html('<i class="fa fa-' +fontId+ ' fa-5x"></i>');
    $("#font-icon-details").html(iconDetails);

    if(iconMeta.length > 0){
      $("#font-icon-meta").html("<b>Meta:</b>&nbsp;"+iconMeta);
    }

    $('#font-modal').modal({show:true});
    e.preventDefault();
  });
});
