$(function() {

  $('body').find('form').submit(function (e) {
    alert('submit');
    e.preventDefault('submit');

    const newItemText = $(this).find('#shopping-list-entry');

$('ul').append("<li>"+
"<span class= 'shopping-item'>"+`${newItemText.val()}`+
"</span>" +
"<div class = 'shopping-item-controls'>" +
"<button class='shopping-item-toggle'>" + 
"<span class='button-label'>check</span>" +
"</button>" +
"<button class='shopping-item-delete'>" +
"<span class='button-label'>delete</span>" +
"</button>"+
"</div>"+ 
"</li>");
  });

 $('ul').on('click', '.shopping-item-toggle', function() {
  $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
});

$('ul').on('click', '.shopping-item-delete', function(){
  $(this).closest('li').remove();
});
})
