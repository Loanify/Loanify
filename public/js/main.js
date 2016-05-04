<<<<<<< HEAD
console.log('hello')
=======
>>>>>>> master
$.ajax({
  url: '/equipment/index'
  })
.done(function(data) {
<<<<<<< HEAD
  data.forEach(function(data) {
    $('#printer').append('<li>' + equipment.itemTitle + '</li>');
  });
});
$('#submit1').on('click', function() {
  var val = $('#itemTitle').val();
=======
  data.forEach(function(equipment) {
    $('#printer').append('<li>' + equipment.itemTitle + '</li>');
  });
});


$('#submit1').on('click', function() {
  var val = $('#itemTitle').val();

>>>>>>> master
  $.ajax({
    url: '/equipment/new',
    method: 'POST',
    data: {itemTitle: val},
<<<<<<< HEAD
    success: function(data) {
      $('#printer').append('<li>' + equipment.data '</li>');
    }
  });
});
=======
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
>>>>>>> master
