var fields={};

document.addEventListener("DOMContentLoaded", function() {
  fields.firstName = document.getElementById('fname');
  fields.lastName = document.getElementById('lName');
  fields.email = document.getElementById('subject');
  fields.address = document.getElementById('submit');
  fields.houseNumber = document.getElementById('houseNumber');


 })

 function isNotEmpty(value) {
  if (value == null || typeof value == 'undefined' ) return false;
  return (value.length > 0);
 }

 function isEmail(email) {
  let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  return regex.test(String(email).toLowerCase());
 }

 function fieldValidation(field, validationFunction) {
  if (field == null) return false;
 
  let isFieldValid = validationFunction(field.value)
  if (!isFieldValid) {
  field.className = 'placeholderRed';
  } else {
  field.className = '';
  }
 
  return isFieldValid;
 }

 function isValid() {
  var valid = true;
  
  valid &= fieldValidation(fields.firstName, isNotEmpty);
  valid &= fieldValidation(fields.lastName, isNotEmpty);
  valid &= fieldValidation(fields.email, isEmail);

 
  return valid;
 }