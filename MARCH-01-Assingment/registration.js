//alert("hii");
function submit(){
  var firstInput = document.getElementById("password");
  var newFirstInput = firstInput.value;
  var secondInput = document.getElementById("confirmPassword");
  var newSecondInput = secondInput.value;

  if(newFirstInput == newSecondInput)
  alert("ok");
 
  else
  alert("Please enter coreect password");
}