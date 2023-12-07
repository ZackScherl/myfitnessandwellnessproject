// signup modal
document.querySelector("#submit-sign").addEventListener("click", (event) => {
  event.preventDefault();

  let userName = document.querySelector("#aligned-name").value.trim();
  let userPass = document.querySelector("#aligned-password").value.trim();
  let userMail = document.querySelector("#aligned-email").value.trim();
  let userNum = document.querySelector("#aligned-num").value.trim();
  let userDob = document.querySelector("#aligned-dob").value.trim();

  console.log(userName, userPass, userMail, userNum, userDob);

  // get nick's route name for url
  fetch("url", {
    Method: "POST",
    Headers: {
      Accept: "application.json",
      "Content-Type": "application/json",
    },
    Body: JSON.stringify({username: userName, userpass: userPass, userMail, userNum, userDob}),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      for (var i = 0; i < data.length; i++) {}
    });
});

// login modal
document.querySelector("#submit-log").addEventListener("click", (event) => {
  event.preventDefault();

  let userName = document.querySelector("#aligned-name").value.trim();
  let userPass = document.querySelector("#aligned-password").value.trim();

  console.log(userName, userPass);

// get nick's route name for url
fetch("/login", {
  Method: "POST",
  Headers: {
    Accept: "application.json",
    "Content-Type": "application/json",
  },
  Body: JSON.stringify({username: userName, userpass: userPass}),
})
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (var i = 0; i < data.length; i++) {}
  });
});