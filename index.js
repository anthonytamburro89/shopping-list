$(function() {

  $('form').click($(this).closest(':button'), function () {
        alert('submit');
        $(':button').preventDefault();
  });

/*
$('form').on('click',$(this).closest(':button'), function () {
        alert('submit');
        $(this).preventDefault();
  });
  */


/*
      $('ul').append('<li><span class="shopping-item">$(('shopping-list-entry').val(''))</span> 
    <div class = "shopping-item-controls">
      <button class="shopping-item-toggle"> 
        <span class="button-label">check</span> 
      </button> 
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button> 
    </div> 
    </li>');
  
  })*/


 $('ul').on('click', '.shopping-item-toggle', function() {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('ul').on('click', '.shopping-item-delete', function(){
  $(this).closest('li').remove();
});
})
