$('#checkinButton').on('click', function(){
      console.log(equipment._id + "clicked")
      $.ajax({
        url: '/equipment/' + equipment._id,
        method: 'DELETE',
        success: function(){
          console.log("deleted")
          tr.remove();
        }
      })
