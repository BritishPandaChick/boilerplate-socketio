$( document ).ready(function() {
  
  
   
  // Form submittion with new message in field with id 'm'
  $('form').submit(function(){
    var messageToSend = $('#m').val();
    //send message to server here?
    $('#m').val('');
    return false; // prevent form submit from refreshing page
  });
  
  /* Global io */
  var socket = io();

  socket.on('user count', function(data){
    console.log(data);
  });
  
});
