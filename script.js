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


  // display tooltip on ul hover
  var $tt = $('#li-tooltip')
  $(document).on({
    mouseenter: function(){
      $tt.fadeTo('slow', 1);
    },
    mouseleave: function(){
      $tt.fadeTo('slow', 0);
    }
  }, "#items"); //pass the element as an argument to .on


  // strikethrough/italicise items when clicked
  $(document).on('click', 'li', function(){
    $(this).addClass('completed');
  });

  // remove completed items on click
  $(document).on('click', '.completed', function(){
    $(this).remove();
  });

  // reorder list items
  $('#items').sortable();

}

$(document).ready(main);
