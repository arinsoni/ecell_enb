
$('.inpage_link').first().addClass('active_2');

$('.inpage_link').click(function () {
  var $this = $(this);
  $siblings = $this.parent().children(),
    position = $siblings.index($this);
  console.log(position);

  $('.page').removeClass('active_2').eq(position).addClass('active_2');

  $siblings.removeClass('active_2');
  $this.addClass('active_2');
});
//# sourceURL=pen.js
