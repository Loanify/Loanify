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
    tr.append($('<td>').append(a).addClass('btn btn-success btn-xs button'));
    // <td>show item</td>
    // make an anchor tag, set the text and href for it
    // append that to the td

    tr.append($('<td>').text('Edit item').addClass('btn btn-warning btn-xs button'));
    var $deletebutton = $('<td>').text('Delete').addClass('btn btn-danger btn-xs button');
    tr.append($deletebutton);
    $deletebutton.on('click', function(){
      console.log(equipment._id + "clicked");
      $.ajax({
        url: '/equipment/' + equipment._id,
        method: 'DELETE',
        success: function(){
          console.log("deleted");
          tr.remove();
        }
      });

    });
  $('tbody').append(tr);
  });
});



// <td><a href="/equipment/2343">Show Item</a></td>

// target the button
// put an event listener on the button
// prove it works
// get a particular id for the button to delete
// $('.btn-danger').on('click', function(){
//   console.log("delete clicked")
// })





// <tr>
//   <td id="itemTitle">Item title</td>
//   <td id="serialNumber">Serial</td>
//   <td id="description">Description</td>
//   <td id="available">Availability</td>
//   <td class="btn btn-success btn-xs">Show Item</td>
//   <td class="btn btn-warning btn-xs">Edit Item</td>
//   <td class="btn btn-danger btn-xs">Edit Item</td>
// </tr>
