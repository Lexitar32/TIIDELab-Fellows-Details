tiidelabFellow = [
  {
    "picture": "./assets/img/Arimoro Olamilekan.jpeg",
    "fullName": "Arimoro Olamilekan Ezekiel",
    "emailAddress": "arimoroolamilekan1@gmail.com",
    "phoneNumber": "07082158660",
    "stack": "Frontend Developer",
    "location": "Lagos",
    "articleLink": "https://medium.com/@arimoroolamilekan1/my-tiidelab-experience-1-0-97f8a853c230",
    "popularQuote": "The training process is always hard because it is to make you mature!"
  }
];

tiidelabFellow = JSON.parse(localStorage.getItem('store'));
if (tiidelabFellow == null) {
  tiidelabFellow = [];
}

// What to display
let displayFellow = () => {
  user = '';

  for (let i = 0; i < tiidelabFellow.length; i++) {
    user += `
      <div class="fellow">
        <img src="${tiidelabFellow[i].picture}" style="max-height:300px;"> <br>
        <strong>Full Name</strong> : ${tiidelabFellow[i].fullName} <br>
        <strong>Email Address</strong> : ${tiidelabFellow[i].emailAddress} <br>
        <strong>Phone Number</strong> : ${tiidelabFellow[i].phoneNumber} <br>
        <strong>Stack</strong> : ${tiidelabFellow[i].stack} <br>
        <strong>Location</strong> : ${tiidelabFellow[i].location} <br>
        <a href="${tiidelabFellow[i].articleLink}" target="_blank"><strong>Article Link</strong></a> <br>
        <strong>Popular Quote</strong> : "${tiidelabFellow[i].popularQuote}" <br>
      </div>
     `
  }

  localStorage.setItem('store', JSON.stringify(tiidelabFellow));

  const showHtml = document.querySelector("#allFellows");
  showHtml.innerHTML = user;
}

// tiidelabFellows = JSON.parse(localStorage.getItem('save'));
// if (tiidelabFellows == null) {
//   tiidelabFellows = [];
// } 


// Add a Fellow
let addUser = (e) => {
  e.preventDefault();

  newFellow = {
    "picture": prompt("Enter your Picture Name"),
    "fullName": prompt("Enter your Full Name"),
    "emailAddress": prompt("Enter Your Email Address"),
    "phoneNumber": prompt("Enter your Mobile Number"),
    "stack": prompt("Enter your Stack"),
    "location": prompt("Enter your Location"),
    "articleLink": prompt("Enter your Article Link"),
    "popularQuote": prompt("Enter your Best Quote")
  }

  tiidelabFellow.push(newFellow);

  localStorage.setItem('store', JSON.stringify(tiidelabFellow));

  displayFellow();
}

const userButton = document.querySelector('#btnUser').addEventListener('click', addUser);

displayFellow();