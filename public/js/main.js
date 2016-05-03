 console.log("hello");

//  $('#submitBtn').click(function() {
//   console.log('button clicked');
//    urlPost($('#urlBar').val());
// });

// var itemTitleHere = $('.itemTitleHere');
// var serialNumberHere = $('.serialNumberHere');
// var descriptionHere = $('.descriptionHere');
// var availabilityHere = $('.availabilityHere');


// function equipmentPost(inputValue) {
// $.ajax({
//   method: 'POST',
//   url: '/index',
//   data: { url: inputValue }
// }).done(function( data ) {
//     console.log( data );
//     itemTitleHere.append($('<td>' + data.itemTitle + '</td>'));
//     serialNumberHere.append($('<td>' + data.serialNumber + '</td>'));
//     descriptionHere.append($('<td>' + data.description + '</td>'));
//     availabilityHere.append($('<td>' + data.availability + '</td>'));
//     alert( "Item Created: " + data );
//   });
// }


// // this code does event delegation, so that event listeners won't stack on themselves
// $('body').on('click', '.urlsHere li',  function() {
//   console.log($(this).text());
// });

// function inputedEquipment() {
//   $.ajax({
//     url: "/index"
//   }).done(function( data ) {
//     console.log(data);
//       for(var i = 0; i < data.length; i++) {
//         itemTitleHere.append($('<td>' + data.itemTitle + '</td>'));
//         serialNumberHere.append($('<td>' + data.serialNumber + '</td>'));
//         descriptionHere.append($('<td>' + data.description + '</td>'));
//         availabilityHere.append($('<td>' + data.availability + '</td>'));
//         console.log(data[i].url);
//       }
//   });
// }

// inputedEquipment();
