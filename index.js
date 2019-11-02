$(function() {

  $('js-shopping-list-form').on('submit', function () {
    $(this).preventDefault();
    alert('submit');
    let addNewItem = $('shopping-list-entry').val();
    $('ul').append('<li><span class="shopping-item"></span> 
    <div class = "shopping-item-controls"> 
      <button class="shopping-item-toggle"> 
        <span class="button-label">check</span> 
      </button> 
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button> 
    </div> 
    </li>');
  
  })


 $('ul').on('click', '.shopping-item-toggle', function() {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('ul').on('click', '.shopping-item-delete', function(){
  $(this).closest('li').remove();
});
})