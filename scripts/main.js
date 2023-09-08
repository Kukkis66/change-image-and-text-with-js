const myImage = document.querySelector("img");
const myBody = document.querySelector("body");
let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
myImage.onclick = () => {
    
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
    myBody.style.backgroundColor = 'white';
    myHeading.textContent = "Is Brave even Cooler?"
  } else {
    myImage.setAttribute("src", "images/firefox-icon.png");
    myBody.style.backgroundColor = 'orange';
    myHeading.textContent = "Mozilla is cool"
  }
  
};


function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }
  

myButton.onclick = () => {
    setUserName();
  };
  



function helloWorld() {
    myHeading.textContent = "Hello world";
};

myImage.onmouseover = () => {
    helloWorld();
  };

myImage.onmouseleave = () => {
    if (myBody.backgroundColor == 'orange'){
        myHeading.textContent = "Mozilla is cool";

    } else {
        myHeading.textContent = "Is Brave even cooler?";
    }
}
