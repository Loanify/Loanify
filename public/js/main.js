$.ajax({
  url: '/equipment/index'
  })
.done(function(data) {
  data.forEach(function(equipment) {
    $('#printer').append('<li>' + equipment.itemTitle + '</li>');
  });
});


$('#submit1').on('click', function() {
  var val = $('#itemTitle').val();

  $.ajax({
    url: '/equipment/new',
    method: 'POST',
    data: {itemTitle: val},
    success: function(equipment) {
      $('#printer').append('<li>' + equipment.itemTitle + '</li>');
    }
  });
});

// var equipmentSchema = new mongoose.Schema({
//   itemTitle     : String,
//   serialNumber  : String,
//   description   : String,
//   loanedTo      : [ Person.schema ],
//   available     : { type: Boolean, default: false }
// });
