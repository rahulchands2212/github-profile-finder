const username = document.getElementById("username");
const form = document.getElementsByTagName("form")[0];
const loader = document.getElementsByClassName("loader")[0];
form.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = username.value;
  //temp store in browser;
  sessionStorage.setItem("username",name);
  //redirect to result page
  window.location.href="../resultPage/result.html"; 
});


