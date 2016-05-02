var main = function(){

  $('form').submit(function(event){
    var $input = $(event.target).find('input');
    var listItem = $input.val();

    if (listItem != "") {
      var html = $('<li>').text(listItem);
      html.prependTo('#items');
      $input.val("");
    }

    return false;
  });

}

$(document).ready(main);
