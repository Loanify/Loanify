console.log('hello')
$.ajax({
  url: '/equipment/index'
  })
.done(function(data) {
  data.forEach(function(data) {
    $('#printer').append('<li>' + equipment.itemTitle + '</li>');
  });
});
$('#submit1').on('click', function() {
  var val = $('#itemTitle').val();
  $.ajax({
    url: '/equipment/new',
    method: 'POST',
    data: {itemTitle: val},
    success: function(data) {
      $('#printer').append('<li>' + equipment.data '</li>');
    }
  });
});
