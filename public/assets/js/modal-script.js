
// login modal
document.querySelector("#submit-log").addEventListener("click", (event) => {
  event.preventDefault();

  let userMail = document.querySelector("#aligned-name").value.trim();
  let userPass = document.querySelector("#aligned-password").value.trim();

// get nick's route name for url
fetch("/api/login", {
  method: "POST",
  headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
  body: JSON.stringify({email: userMail, password: userPass}),
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
});