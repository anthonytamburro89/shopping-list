$(function() {
 $('.shopping-item-toggle').click(function(){

    $('.shopping-item').closest('span').toggleClass('shopping-item__checked');
    alert('script loaded');

    
 }); 
});

/*
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