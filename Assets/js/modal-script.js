// signup modal
document.querySelector('#submit-sign').addEventListener('click', (event) => {

  event.preventDefault();
  
    let userName = document.querySelector('#aligned-name').value;
    let userPass = document.querySelector('#aligned-password').value;
    let userMail = document.querySelector('#aligned-email').value;
    let userNum = document.querySelector('#aligned-num').value;
    let userDob = document.querySelector('#aligned-dob').value;
    
    console.log(userName, userPass, userMail, userNum, userDob);

  });

// login modal 
  document.querySelector('#submit-log').addEventListener('click', (event) => {

    event.preventDefault();
    
      let userName = document.querySelector('#aligned-name').value;
      let userPass = document.querySelector('#aligned-password').value;
      
      console.log(userName, userPass, userMail, userNum, userDob);
    });