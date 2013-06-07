var width = $(window).width();
  
if (width > 401) {
    $("#booking li:last-child").mouseover(function(){
      $("#booking").css("left", "0px");
    });
    $("#booking").mouseleave(function(){
      $("#booking").css("left", "-460px");
    });
} else {
    $("#booking li:first-child").mouseover(function(){
      $("#booking").css("bottom", "0px");
    });
    $("#booking").mouseleave(function(){
      $("#booking").css("bottom", "-510px");
    });
}

