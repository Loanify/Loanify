
$.ajax({
  url: '/equipment/index'
  })
.done(function(data) {
  data.forEach(function(equipment) {


    var tr = $('<tr>');
    tr.append( $('<td>').text(equipment.itemTitle) );
    tr.append($('<td>').text(equipment.serialNumber));
    tr.append($('<td>').text(equipment.description));
    tr.append($('<td>').text(equipment.available));
    var a = $('<a>').text('Show Item').attr( 'href', '/equipment/' + equipment._id);
    tr.append($('<td>').append(a).addClass('btn btn-success btn-xs'));
    // <td>show item</td>
    // make an anchor tag, set the text and href for it
    // append that to the td

    tr.append($('<td>').text('Edit item').addClass('btn btn-warning btn-xs'));
    var $deletebutton = $('<td>').text('Delete').addClass('btn btn-danger btn-xs');
    tr.append($deletebutton);
    $deletebutton.on('click', function(){
      console.log(equipment._id + "clicked")
      $.ajax({
        url: '/equipment/' + equipment._id,
        method: 'DELETE',
        success: function(){
          console.log("deleted")
          tr.remove();
        }
      })

    })
  $('tbody').append(tr);
  })
});



// <td><a href="/equipment/2343">Show Item</a></td>

// target the button
// put an event listener on the button
// prove it works
// get a particular id for the button to delete
// $('.btn-danger').on('click', function(){
//   console.log("delete clicked")
// })






