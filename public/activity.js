
const navBarList = ['Features', 'Company', 'Careers', 'About', 'Login', 'Register'];
document.getElementById('features').innerHTML = navBarList[0];
document.getElementById('company').innerHTML = navBarList[1];
document.getElementById('career').innerHTML = navBarList[2];
document.getElementById('about').innerHTML = navBarList[3];
document.getElementById('login').innerHTML = navBarList[4];
document.getElementById('register-block').innerHTML = navBarList[5];


const dropDownListCompany = ['History', 'Our Team', 'Blog'];
document.getElementById('history').innerHTML = dropDownListCompany[0];
document.getElementById('ourTeam').innerHTML = dropDownListCompany[1];
document.getElementById('blog').innerHTML = dropDownListCompany[2]; 


const anchorTagToDo = document.getElementById("toDo");
const textNodeToDo = document.createTextNode("Todo List");
anchorTagToDo.appendChild(textNodeToDo);

const anchorTagCalendar = document.getElementById("calendar");
const textNodeCalendar = document.createTextNode("Calendar");
anchorTagCalendar.appendChild(textNodeCalendar);

const anchorTagReminder = document.getElementById("reminders");
const textNodeReminder = document.createTextNode("Reminder");
anchorTagReminder.appendChild(textNodeReminder);

const anchorTagPlanning = document.getElementById("planning");
const textNodePlanning = document.createTextNode("Planning");
anchorTagPlanning.appendChild(textNodePlanning);

const newRemoteWork = "Make<br>remote work";
document.getElementById("size1").innerHTML = newRemoteWork;

const newParagraph = "Get your team in sync, no matter your location.<br>Streamline processes, create team rituals, and <br>watch productivity soar.";
document.getElementById("welcome-page").innerHTML = newParagraph;

const featuresButtonText = document.getElementById("features");
const arrowDownImg = document.getElementById("arrowDownIcon");
const arrowUpImg = document.getElementById("arrowUpIcon");

function showArrowUpImg() {
    arrowDownImg.style.display = "none";
    arrowUpImg.style.display = "inline-block";
}

function showArrowDownImg() {
    arrowDownImg.style.display = "inline-block";
    arrowUpImg.style.display = "none";
}

featuresButtonText.addEventListener("mouseenter", showArrowUpImg);
featuresButtonText.addEventListener("mouseleave", showArrowDownImg);


const companyButtonText = document.getElementById("company");
const arrowDownCom = document.getElementById("arrowDownIconCom");
const arrowUpCom = document.getElementById("arrowUpIconCom");

function showArrowUpCom() {
    arrowDownCom.style.display = "none";
    arrowUpCom.style.display = "inline-block";
}

function showArrowDownCom() {
    arrowDownCom.style.display = "inline-block";
    arrowUpCom.style.display = "none";
}

companyButtonText.addEventListener("mouseenter", showArrowUpCom);
companyButtonText.addEventListener("mouseleave", showArrowDownCom);

const newLearnMore = "Learn more";
document.getElementById("learn").innerHTML = newLearnMore;

const newAtribution = "Bootcamp 2023 by";
document.getElementById("attributi").innerHTML = newAtribution;


  const firebaseConfig = {
    apiKey: "AIzaSyCBxzRw_9EROmJrvsMbZ2UuUsg9dxor0iI",
    authDomain: "snap-task4.firebaseapp.com",
    databaseURL: "https://snap-task4-default-rtdb.firebaseio.com",
    projectId: "snap-task4",
    storageBucket: "snap-task4.appspot.com",
    messagingSenderId: "318304798390",
    appId: "1:318304798390:web:fb41a097c9504d06ac0817",
    measurementId: "G-K65YB7SLWP"

  };









