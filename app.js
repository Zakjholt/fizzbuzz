var body = $("body");

var fizzBuzz = function(num) {
    for (i = 1; i <= num; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            body.append("<p>fizzbuzz</p>");
        } else if (i % 3 === 0) {
            body.append("<p>fizz</p>");
        } else if (i % 5 === 0) {
            body.append("<p>buzz</p>");
        } else {
            body.append("<p>" + i + "</p>");
        }
    }
};


var userNum;
$(document).ready(function() {
    userNum = parseInt(prompt("Choose a number!"));
    if (userNum % 1 === 0) {
        fizzBuzz(userNum);
    }
});
