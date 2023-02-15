const body = document.body;

//NavBar
const header = document.createElement("header");

const navBarLeft = document.createElement("div");
const icon = document.createElement("img");
icon.src = './images/blinkit.webp';
icon.classList.add("navBar__left__icon");
const navBarLeftDiv = document.createElement("div");
const text1 = document.createElement("p");
text1.textContent = "Delivery in 10 mins";
const text2 = document.createElement("p");
text2.textContent = "Ranchi, Jharkhand, India";
navBarLeftDiv.appendChild(text1);
navBarLeftDiv.appendChild(text2);
navBarLeftDiv.classList.add("navBar__left__content");
navBarLeft.classList.add("navBar__left", "flex", "flex__center__cross-axis");
navBarLeft.appendChild(icon);
navBarLeft.appendChild(navBarLeftDiv);

const navBarRight = document.createElement("div");
const text3 = document.createElement("p");
text3.textContent = "Login";
const btn = document.createElement("button");
const icon2 = document.createElement("img");
icon2.src = './images/icons8-shopping-cart-96.png';
icon2.classList.add("btn__icon");
const text4 = document.createElement("p");
text4.textContent = "My Cart";
text4.classList.add("btn_text");
btn.appendChild(icon2);
btn.appendChild(text4);

btn.classList.add("btn", "flex", "flex__center__cross-axis");

navBarRight.appendChild(text3);
navBarRight.appendChild(btn);

navBarRight.classList.add("flex", "navBar__right", "flex__center__cross-axis");

header.appendChild(navBarLeft);
header.appendChild(navBarRight);

header.classList.add("flex", "navBar", "flex__center__cross-axis");
body.appendChild(header);

//main
const main = document.createElement("main");
const belowNav = document.createElement("div");

const link1 = document.createElement("a");
const textLink1 = document.createElement("p");
textLink1.textContent = "Vegetables & Fruits";
link1.appendChild(textLink1);
const link2 = document.createElement("a");
const textLink2 = document.createElement("p");
textLink2.textContent = "Dairy & Breakfast";
link2.appendChild(textLink2);
const link3 = document.createElement("a");
const textLink3 = document.createElement("p");
textLink3.textContent = "Munchies";
link3.appendChild(textLink3);
const link4 = document.createElement("a");
const textLink4 = document.createElement("p");
textLink4.textContent = "Cold Drinks &  Juices";
link4.appendChild(textLink4);
const link5 = document.createElement("a");
const textLink5 = document.createElement("p");
textLink5.textContent = "Instant & Frozen Fruits";
link5.appendChild(textLink5);
const link6 = document.createElement("a");
const textLink6 = document.createElement("p");
textLink6.textContent = "Tea, Coffee & Health Drinks";
link6.appendChild(textLink6);
const link7 = document.createElement("a");
const textLink7 = document.createElement("p");
textLink7.textContent = "Bakery & Biscuits";
link7.appendChild(textLink7);
const link8 = document.createElement("a");
const textLink8 = document.createElement("p");
textLink8.textContent ="More";
link8.appendChild(textLink8);

belowNav.append(link1,link2,link3,link4,link5,link6,link7,link8);
belowNav.classList.add("belowNav", "flex", "flex__center__main-axis");
main.appendChild(belowNav);
body.appendChild(main);

aside = document.createElement("aside");







