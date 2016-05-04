
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
    tr.append($('<td>').text('Show item').addClass('btn btn-success btn-xs'));
    tr.append($('<td>').text('Edit item').addClass('btn btn-warning btn-xs'));
    tr.append($('<td>').text('Delete').addClass('btn btn-danger btn-xs'));
  $('tbody').append(tr);
  })
});





// <tr>
//   <td id="itemTitle">Item title</td>
//   <td id="serialNumber">Serial</td>
//   <td id="description">Description</td>
//   <td id="available">Availability</td>
//   <td class="btn btn-success btn-xs">Show Item</td>
//   <td class="btn btn-warning btn-xs">Edit Item</td>
//   <td class="btn btn-danger btn-xs">Edit Item</td>
// </tr>
