$(function() {
 $('.shopping-item-toggle').click(function(){
    $(this).closest('.shopping-item').toggleClass('shopping-item__checked');
    alert('script loaded');
 })

    $('.shopping-item-delete').click(function() {
     $(this).parent(this).parent().remove();
     alert('clicked delete');
  })
 }); 


/* possible path for delete function...

    $('ul').on('click', '.shopping-item-delete', function() {
        $(this).closest("li").remove("li");
    })

or 
    $('.shopping-item-delete').click(function() {
        this.closest('li').remove();
    })


or I also tried this...

    $('.shopping-item-delete').click(function() {
      this.remove().parent('li');
  })


*/


/*
Beginning of my thoughts for adding other items to list...


$(".submit").click(function(event) {
event.preventDefault();
    $("ul").append(
"<li>" + <span class="shopping-item">this.text(`${event.key}`)</span>
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
