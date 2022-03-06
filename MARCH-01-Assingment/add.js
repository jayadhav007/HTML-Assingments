function ADD() {
  console.log("clicked");
  var firstInput = document.getElementById("first_number");
  var newFirstInput = firstInput.value;
  var secondInput = document.getElementById("second_number");
  var newSecondInput = secondInput.value;
  
  var output = Number(newFirstInput) + Number(newSecondInput);
 // alert(output);
 document.write(output);
}