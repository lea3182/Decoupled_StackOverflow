$(document).ready(function() {
  // This is called after the document has loaded in its entirety
  // This guarantees that any elements we bind to will exist on the page
  // when we try to bind to them

  // See: http://docs.jquery.com/Tutorials:Introducing_$(document).ready()
  $.ajax({
    url: 'http://localhost:3000/questions',
    dataType: 'JSON',
    method: 'get'
  }).done(function(response){
    console.log(response)
    for (var i = 0; i < response.length; i++) {
      $('div').append('<p>' + response[i].title + '</p>');
    }
  })

});
