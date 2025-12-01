function validateForm() {
  event.preventDefault(); // Stop page reload
  let x = document.forms["myForm"]["fname"].value;

  if (x === "") {
    alert("Name must be filled out");
    return;
  }

  let y = document.forms["myForm"]["lname"].value;

  if (y === "") {
    alert("Name must be filled out");
    return;
  }

  let email = document.forms["myForm"]["email"].value;

  if (email === "") {
    alert("Email must be filled out");
    return;
  }

  let country = document.forms["myForm"]["country"].value;

  if (country === "") {
    alert("Country must be selected");
    return;
  }

  let subject = document.forms["myForm"]["subject"].value;

  if (subject === "") {
    alert("What is your message?");
    return;
  }

  // validating email format using a simple regular expression
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
  }

  console.log(x);
  console.log(y);
  console.log(email);
}
