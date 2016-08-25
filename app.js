var content = $(".content");

var fizzBuzz = function(num) {
    for (i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            content.append("<p>fizzbuzz</p>");
        } else if (i % 3 === 0) {
            content.append("<p>fizz</p>");
        } else if (i % 5 === 0) {
            content.append("<p>buzz</p>");
        } else {
            content.append("<p>" + i + "</p>");
        }
    }
};


var userNum;
$(document).ready(function() {
    $('#number-form').submit(function(e) {
      e.preventDefault();
      $(".content").empty();
      userNum = parseInt($('#number-entry').val());
      if (userNum % 1 === 0) {
        fizzBuzz(userNum);
      } else {
        content.append("<p>Input must be an integer</p>");
      }
      $(this)[0].reset();
    });
    // userNum = parseInt(prompt("Choose a number!"));
    // if (userNum % 1 === 0) {
        // fizzBuzz(userNum);
    // }
});
