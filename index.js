$(function() {/*
 $('.shopping-item-toggle').click(function(){
    $(this).closest('.shopping-item').toggleClass('shopping-item__checked');
    alert('script loaded');
 })*/

 $('ul').on('click', '.shopping-item-toggle', function() {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('ul').on('click', '.shopping-item-delete', function(){
  $(this).closest('li').remove();
});
/*
    $('.shopping-item-delete').click(function() {
     $(this).parent(this).parent().remove();
     alert('clicked delete');
  });
 
  $('.js-shopping-list-form').submit(function() {
    $(this).preventDefault();

    $('submit').click(function(){

    $('ul').append(
    "<li> " 
    <span class="shopping-item"> $(shopping-list-entry.val())</span> 
    <div class="shopping-item-controls"> 
      <button class="shopping-item-toggle"> 
        <span class="button-label">check</span> 
      </button> 
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button> 
    </div> 
    "</li>"
    );
    });
    })*/
  })

 /*
Beginning of my thoughts for adding other items to list...


$(".submit").click(function(event) {
event.preventDefault();

    $("ul").append(
"<li>" + <span class="shopping-item">`$(shopping-list-entry.val())`</span>
<div class="shopping-item-controls">
  <button class="shopping-item-toggle">
    <span class="button-label">check</span>
  </button>
  <button class="shopping-item-delete">
    <span class="button-label">delete</span>
  </button>
</div> + "</li>"
);
})
*/