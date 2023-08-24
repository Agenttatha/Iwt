function display(value) {
  document.querySelector(".input").value += value;
}
function perform() {
  var inputField = document.querySelector(".input");
  var expression = inputField.value;

  var result = eval(expression);

  inputField.value = result;
}
