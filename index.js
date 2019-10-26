$(function() {
 $('.shopping-item-toggle').click(function(){

    
    $(this).prev('shopping-item').toggleClass('shopping-item__checked');
    alert('script loaded');


    
    $('.shopping-item-delete').click(function() {
        this.closest('li').remove();
    })

 }); 
});

/* possible path for delete function...

    $('ul').on('click', '.shopping-item-delete', function() {
        $(this).closest("li").remove("li");
    })

*/

/*

Beginning of my thoughts for adding other items to list...

$(function() {
$(".submit").click(function(event) {
event.preventDefault();
    $("ul").append(
"<li>" + <span class="shopping-item">apples</span>
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
}); */

/*
 $('.shopping-item-toggle').click(function(){
        console.log('this', this)
      
        $(this).toggleClass('shopping-item__checked');
    
 }); 
});*/

/*
$('.shopping-item-toggle').on('click',function(){

    
    $('.shopping-item').toggleClass('shopping-item__checked');
    alert('script loaded');
*/

$('.shopping-item-delete').click(function() {
    this.remove();
})