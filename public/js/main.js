$.ajax({
  url: '/equipment/index'
  })
.done(function(data) {
  data.forEach(function(equipment) {
      $('#itemTitle').append('<li>' + equipment.itemTitle + '</li>');
      $('#serialNumber').append('<li>' + equipment.serialNumber + '</li>');
      $('#description').append('<li>' + equipment.description + '</li>');
      $('#available').append('<li>' + equipment.available + '</li>');  });
});


$('#submit1').on('click', function() {
  var val = $('#itemTitle').val();

  $.ajax({
    url: '/equipment/new',
    method: 'POST',
    data: {itemTitle: val},
    success: function(equipment) {
      $('#itemTitle').append('<li>' + equipment.itemTitle + '</li>');
      $('#serialNumber').append('<li>' + equipment.serialNumber + '</li>');
      $('#description').append('<li>' + equipment.description + '</li>');
      $('#available').append('<li>' + equipment.available + '</li>');
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
