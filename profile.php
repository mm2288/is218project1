<?php
// Check if the form is submitted
if ( isset( $_POST['submit'] ) ) {
  // retrieve the form data by using the element's name attributes value as key
  $email = $_POST['email'];
  $password = $_POST['password'];
  $fname = $_POST['fname'];
  $lname = $_POST['lname'];
  $college = $_POST['college'];
  $major = $_POST['major'];

  // display the results
  echo '<h3>Form POST Method</h3>';
  echo 'Your user name is ' . $email;
  echo 'Your password is ' . $password;
  echo 'Your first name is ' . $fname;
  echo 'Your last name is ' . $lname;
  echo 'You go to ' . $college;
  echo 'Your major is ' . $major;
  exit;
}
?>
