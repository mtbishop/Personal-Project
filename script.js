function greetingAlert() {
  var person = prompt('Please enter your name', 'Matthew');
  if (person != null) {
    document.getElementById('demo').innerHTML =
      'Hello ' +
      person +
      '! How are you today? Are you ready to look at some juicy bois?';
  }
}
greetingAlert();
