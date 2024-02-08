
function myFunction() {
  let x = document.getElementById("myInput");
  x.innerText = "2";
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

