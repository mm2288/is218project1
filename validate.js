function validate()
{
  var varFname = document.forms["form"]["fname"];
  var varLname = document.forms["form"]["lname"];
  var varEmail = document.forms["form"]["email"];
  var varCollege = document.forms["form"]["college"];
  var varMajor = document.forms["form"]["major"];
  var letters = /^[A-Za-z]+$/;
  if (varFname.value == "") {
    alert("Please enter your first name");
    return false;
  }
  if (varFname.value.match(letters)) {
    return true;
  } else {
    window.alert("Please enter a valid first name");
    return false;
  }
  if (varLname.value == "") {
    alert("Please enter your last name");
    return false;
  }
  if (varLname.value.match(letters)) {
    return true;
  } else {
    window.alert("Please enter a valid last name");
    return false;
  }
  if (varEmail.value == "") {
    window.alert("Please enter your email");
    return false;
  }
  if (varEmail.value.indexOf("@", 0) < 0) {
    window.alert("Please enter a valid email address");
    return false;
  }
  if (varEmail.value.indexOf(".", 0) < 0) {
    window.alert("Please enter a valid email address");
    return false;
  }
  if (varCollege.value == "") {
    window.alert("Please enter your hometown");
    return false;
  }
  if (varMajor.value == "") {
    window.alert("Please enter your major");
    return false;
  }
  return true;
}
