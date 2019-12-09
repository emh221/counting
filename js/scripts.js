$(document).ready(function() {
  $("form#split").submit(function() {

    var countTo = parseInt($("input#countTo").val());

    var countBy = parseInt($("input#countBy").val());

    if (isNaN(countTo) || isNaN(countBy)) {
      alert("please enter real numbers");
    } else if (countTo < countBy) {
      alert("you cannot count up to a number by a number thats bigger")
    } else if (countBy <= 0 || countTo <= 0) {
      alert("you cant count like that... you're trying to count bt zero or by subtraction.")
    }
    else if(countTo > 0 && countBy > 0) {
      for (var index = 0; index <= countTo; index += countBy) {
        alert(index);
      }



    event.preventDefault();
  });
});
