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
      $('.questions').prepend('<p>' + response[i].title + '</p>');
    }
  });
  //    Ajax call for new question

 $('#question_submit').on("submit", function(event) {
    event.preventDefault();

    var request = $.ajax({
      url: $(this).attr('action'),
      method: 'post',
      dataType: 'json',
      data: $(this).serialize(),
    });

    request.done(function(response){
    debugger
    console.log(response)
    console.log('yay')
        $('.questions').prepend('<p>' + response.title + '</p>')
    });
    request.fail(function(res){
      console.log("no")
      console.log(res);
    })
 });

}); //document
