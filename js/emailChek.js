// function ValidateEmail(inputText) {
// //   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   if (inputText.value.match(mailformat)) {
// alert("Valid email address!");
// document.form1.text1.focus();
// return true;
//   } else {
// alert("You have entered an invalid email address!");
// document.form1.text1.focus();
// return false;
//   }
// }

function emailCheck() {
  let email = document.getElementById("email").value;
  let formatcheck = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (email.match(formatcheck)) {
    alert("Great, we will answer you soon");
    return true;
  } else {
    alert("You enter wrong Email, Please fix it!");
    return false;
  }
}
