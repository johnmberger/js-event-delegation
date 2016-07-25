// ** globals ** //

var seed = [
  'Sing happy birthday',
  'Wash the car',
  'Watch the Avalanche win',
  'Look at Wes'
];

// ** dom manipulation ** //

$(document).on('ready', function() {
  // Post seeded to-dos to the dom
  for (var i = 0; i < seed.length; i++) {
    appendToDom(seed[i]);
  }
  // Grab new to-dos from the form and post to the dom
  $('form').on('submit', function(e) {
    e.preventDefault();
    var $newListItem = $('#todoInput').val();
    appendToDom($newListItem);
    $('form').trigger('reset');
  });

  $('ol').on('click', 'span', function() {
    $(this).parent().remove();
  });
});

// ** helper functions ** //
function appendToDom(seed) {
  $('#all-todos').append('<li>' + seed + ' <span class="glyphicon glyphicon-remove-sign"><span></li>');
}
