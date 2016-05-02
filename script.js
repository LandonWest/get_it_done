var main = function(){
  // append list items from the form
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

  $(".btn").mouseup(function(){
    $(this).blur();
  })

  //strikethrough/italicise items when clicked
  $(document).on('click', 'li', function(){
    $(this).addClass('completed');
  })

  // remove completed items on click
  $(document).on('click', '.completed', function(){
    $(this).remove();
  });
}

$(document).ready(main);
