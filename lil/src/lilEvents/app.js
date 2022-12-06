const firebaseConfig = {
  apiKey: "AIzaSyC2K4QnA2vzZyB792vTRbUSjdLnB-OKLZ8",
  authDomain: "contactform-lilevents.firebaseapp.com",
  databaseURL: "https://contactform-lilevents-default-rtdb.firebaseio.com",
  projectId: "contactform-lilevents",
  storageBucket: "contactform-lilevents.appspot.com",
  messagingSenderId: "985981166236",
  appId: "1:985981166236:web:8b44d6527f319150524359"
};

firebase.initializeApp(firebaseConfig);

//ref database
const contactFormDB = firebase.database().ref('contactForm');

document.getElementById('contact').addEventListener('submit',submitForm);


function submitForm(e){
  e.preventDefault();

  var name = getElementVal('name');
  var email = getElementVal('email');
  var contry = getElementVal('country');
  var mmsg = getElementVal('message');

  saveMessages(name,email,contry,mmsg);

  document.querySelector(".alert").style.display = "block";

  setTimeout(()=> {
    document.querySelector(".alert").style.display = "none";
  }, 2000);

  document.getElementById('contact').reset();
}

const saveMessages = (name,email,contry,mmsg) =>{
   var newContactForm = contactFormDB.push();

   newContactForm.set({
    name : name,
    email : email,
    contry : contry,
    msg : mmsg,
   })
};

const getElementVal = (id) => {
 return document.getElementById(id).value;
};