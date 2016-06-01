$(function() {
  $("#blanks form").submit(function(event) {
    var nameInput = $('input#name').val();
    var homeInput = $('input#home').val();
    var foodInput = $("input:radio[name=food]:checked").val();
    var musicInput = $("#music").val();

    $(".name").text(nameInput);
    $(".home").text(homeInput);
    $(".food").text(foodInput);
    $(".music").text(musicInput);
    $('#surveyResults').show();
    event.preventDefault();
  });
});
