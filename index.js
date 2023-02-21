import {
    items,
    categories
} from './data.js';
import {
    createPara,
    createImage,
    createBtn,
    createContainer
} from './create.js';

function makeGrid(items) {
    const innerDiv = createContainer(["flex"]);
    const iconDiv = createContainer(["card", "flex", "flex__column", "flex__center__cross-axis"]);
    const div1 = createContainer([]);
    const div2 = createContainer(["container__btn", "flex__center__main-axis", "flex__center__cross-axis"]);
    const text = createPara("10% off", []);
    div2.appendChild(text);
    const img = createImage(items.image_url, ["container__icon"]);
    div1.append(div2, img);

    const para1 = createPara("Sourced at 5 AM", ["para2"]);
    const para2 = createPara(items.product_name, ["para1"]);
    const para3 = createPara("1 kg", ["para1", "gray"]);

    const bottomDiv = createContainer(["cardBottom", "flex", "flex__center__cross-axis"]);
    const div4 = document.createElement("div");
    const p1 = createPara(`₹${items.discount_price}`, []);
    const p2 = createPara(`₹${items.price}`, ["gray"]);
    div4.append(p1, p2);
    const btn = createBtn("ADD");
    btn.classList.add("flex", "flex__center__main-axis", "flex__center__cross-axis", "innerbtn");
    btn.setAttribute("id", items.id);
    btn.addEventListener("click", handleCart);
    bottomDiv.append(div4, btn);

    iconDiv.append(div1, para1, para2, para3, bottomDiv);
    innerDiv.append(iconDiv);

    return innerDiv;
}

function makeCategory(category) {
    const section = createContainer(["asideMenu", "flex"]);
    const img = createImage(category.image_url, ["asideMenu__icon"]);
    const text = createPara(category.display_text, []);
    img.setAttribute("id", category.id);
    text.setAttribute("id", category.id);
    section.setAttribute("id", category.id);
    section.append(img, text);
    return section;
}


const gridContainer = document.getElementById("gridContainer");
gridContainer.classList.add("grid__container", "flex", "flex__column");

for (let i = 0; i < items.length; i += 4) {
    const row = createContainer(["flex"]);
    for (let j = i; j < i + 4; j++) {
        const div = makeGrid(items[j]);
        row.append(div);
    }
    gridContainer.append(row);
}

const asideBar = document.getElementById("asideBar");

categories.forEach(element => {
    const category = makeCategory(element);
    asideBar.appendChild(category);
    asideBar.addEventListener("click", onClick);
});

function removeGrid() {
    gridContainer.replaceChildren();
}

function buildGrid(id) {
    let container = createContainer(["flex"]);
    for (let i = 0, count = 0; i < items.length; i++) {
        if (items[i].categories.includes(id)) {
            const div = makeGrid(items[i]);
            container.append(div);
            count++;
        }
        if (count === 4) {
            gridContainer.append(container);
            count = 0;
            container = createContainer(['flex']);
        }
    }
    if (container.hasChildNodes())
        gridContainer.append(container);
}

// function 
function onClick(event) {
    const id = event.target.id;
    removeGrid();
    buildGrid(id);
}

const counter = new Map();

function handleCart(event) {
    let id = event.target.id;
    let countDisplay = createPara('0', ["flex"]);
    countDisplay.setAttribute("id", id);

    if (counter.has(id) == false) {
        counter.set(id, 0);
    }
    countDisplay.innerHTML = counter.get(id);
    let cartBtn = document.getElementById(id);
    let addBtn = createPara('+', ["flex"]);

    addBtn.setAttribute("id", id);
    addBtn.addEventListener("click", addCart);

    let subBtn = createPara('-', ["flex"]);
    subBtn.setAttribute("id", id);

    cartBtn.replaceChildren(subBtn, countDisplay, addBtn);
    subBtn.addEventListener("click", subCart);
    cartBtn.classList.add("flex");
}

let count = 0;
const addedToCart = document.getElementById("addedToCart");
addedToCart.classList.add("flex", "flex__column", "flex__center__cross-axis");
const p = createPara(count, []);

function addCart(event) {
    let id = event.target.id;

    count++;

    if (counter.has(id)) {
        counter.set(id, counter.get(id) + 1);
    }
    for (let i = 0; i < items.length; i++) {
        if (items[i].id == id) {
            let cart_item = createPara(items[i].product_name, ["flex", "flex__center__cross-axis"]);
            addedToCart.append(cart_item);
            break;
        }
    }
    p.replaceChildren(count);
}

function subCart(event, subBtn) {
    let id = event.target.id;
    if (counter.get(id) > 0) {
        counter.set(id, counter.get(id) - 1);
        count--;
    }
    let item = "";
    for (let i = 0; i < items.length; i++) {

        if (items[i].id == id) {
            item = items[i].product_name;
        }
    }
    for (let i = 0; i < addedToCart.children.length; i++) {
        if (addedToCart.children[i].textContent == item) {
            addedToCart.removeChild(addedToCart.children[i]);
            break;
        }
    }
    p.replaceChildren(count);
}
addedToCart.append(p);