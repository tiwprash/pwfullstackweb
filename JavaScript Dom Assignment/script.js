// Question 1
const profile = document.getElementById("profile");
const img = document.getElementById("profileImg");

profile.onchange = () => {
  const selectFile = profile.files[0];
  console.log(selectFile);
  if (selectFile) {
    var imgURL = URL.createObjectURL(selectFile);
    img.src = imgURL;
    URL.revokeObjectURL(imgUrl);
  }
};

// Question 2
const themetext = document.querySelector(".themMode");
const toggleButton = document.querySelector(".themToggelbtn");
const themediv = document.querySelector(".theme");

toggleButton.addEventListener("click", toggleTheme);

function toggleTheme() {
  console.log(themetext.textContent);
  if (themetext.textContent == "This is Light Mode") {
    themetext.textContent = "This is Dark Mode";
  } else {
    themetext.textContent = "This is Light Mode";
  }
  themediv.classList.toggle("dark");
}

// Question 3
const add = document.querySelector(".add");
const sub = document.querySelector(".sub");
const count = document.querySelector(".count");

add.addEventListener("click", addcounter);
sub.addEventListener("click", subcounter);

function addcounter() {
  c = count.textContent;
  newcount = Number(c) + 1;
  count.textContent = newcount;
  console.log(count.textContent);
}

function subcounter() {
  if (count.textContent == 0) {
    alert("Count is going Beyond 0");
  }
  c = count.textContent;
  newcount = Number(c) - 1;
  count.textContent = newcount;
  console.log(count.textContent);
}

// Question 4
const name1 = document.getElementById("name");
const password = document.querySelector(".password");
const form = document.querySelector(".form1");

form.addEventListener("submit", formvalidation);

function formvalidation(event) {
  event.preventDefault();
  if (name1.value.length <= 3) {
    alert("validation failed !!!");
  } else if (password.value.length <= 8) {
    alert("validation failed !!!");
  } else {
    alert("Form Validation Successfull");
  }
}

// Question 5

const hidd = document.querySelector(".hidimg");
const imgtogglebtn = document.querySelector(".imgtogglebtn");
const imgstatus = document.querySelector(".imgstatus");

imgtogglebtn.addEventListener("click", hideimage);

function hideimage() {
  hidd.hidden = !hidd.hidden;
  if (hidd.hidden) {
    imgstatus.textContent = "Your Image is Hidden";
  } else {
    imgstatus.textContent = "Your Image is visible";
  }
}

// Question 6
const options = ["JavaScript", "Python", "C++", "JAVA", "R"];
const question = document.querySelector(".dropdownquestion");

const div = document.createElement("div");
const heading = document.createElement("h3");
heading.textContent =
  "Dropdown ExampleWhat is your Favorite Programming language : ";
div.insertAdjacentElement("beforebegin", question);
heading.insertAdjacentElement("afterbegin", question);

const dropdown = document.createElement("select");

options.forEach((optionText) => {
  const optionElement = document.createElement("option");
  optionElement.value = optionText.toLowerCase();
  optionElement.textContent = optionText;
  dropdown.appendChild(optionElement);
});

document.body.appendChild(heading);
document.body.appendChild(dropdown);

// Question 7

const inputFilter = document.querySelector(".filter");
const list = document.querySelector(".list");

inputFilter.addEventListener("input", filterFun);

function filterFun() {
  const inputtext = inputFilter.value.toLowerCase();
  const items = list.getElementsByTagName("li");

  Array.from(items).forEach((items) => {
    const itemname = items.textContent.toLowerCase();
    if (itemname.includes(inputtext)) {
      items.style.display = "block";
    } else {
      items.style.display = "none";
    }
  });
}

// Question 8

function RealTime() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");
  const time = hours + ":" + minutes + ":" + seconds;
  document.querySelector(".time").innerHTML = time;
}

setInterval(RealTime, 1000);

// Question 9
const login = document.querySelector(".login");
const logout = document.querySelector(".logout");

login.addEventListener("click", loggedin);
logout.addEventListener("click", loggedout);

function loggedin() {
  localStorage.setItem("Status", "Loggedin");
  let status = localStorage.getItem("Status");
  document.querySelector(".loginstatus").innerHTML = "User is Logged in";
}

function loggedout() {
  localStorage.removeItem("Status");
  document.querySelector(".loginstatus").innerHTML = "User Has Not Logged In";
}
