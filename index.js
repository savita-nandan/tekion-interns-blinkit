import {items, categories} from './data.js';

function createPara(text, style){
    const para = document.createElement("p");
    para.textContent = text;
    style.forEach(element => {
        para.classList.add(element);
    });
    return para;
}

function createImage(url, style){
    const img = document.createElement("img");
    img.src = url;
    style.forEach(element => {
        img.classList.add(element);
    });
    return img;
}

function createBtn(text){
    const btn = document.createElement("button");
    btn.textContent = text;
    return btn;
}

function createContainer(style){
    const container = document.createElement("div");
    style.forEach(element => {
        container.classList.add(element);
    });
    return container;
}


function makeGrid(items){
    const innerDiv = createContainer(["flex"]);
    const iconDiv = createContainer(["card", "flex",  "flex__column",  "flex__center__cross-axis"]);
    const div1 = createContainer([]);
    const div2 = createContainer(["container__btn", "flex__center__main-axis", "flex__center__cross-axis"]);
    const text = createPara("10% off", []);
    div2.appendChild(text);
    const img = createImage(items.image_url, ["container__icon"]);
    div1.append(div2,img);

    const para1 = createPara("Sourced at 5 AM", ["para2"]);
    const para2 = createPara(items.product_name, ["para1"]);
    const para3 = createPara("1 kg", ["para1", "gray"]);

    const bottomDiv = createContainer(["cardBottom", "flex",  "flex__center__cross-axis"]);
    const div4 = document.createElement("div");
    const p1 = createPara(`₹${items.discount_price}`, []);
    const p2 = createPara(`₹${items.price}`, ["gray"]);
    div4.append(p1,p2);
    const btn = createBtn("ADD");
    btn.classList.add("innerbtn");
    bottomDiv.append(div4, btn);

    iconDiv.append(div1, para1, para2, para3,bottomDiv);
    innerDiv.append(iconDiv);

    return innerDiv;
}

function makeCategory(category){
    const section = createContainer(["asideMenu", "flex"]);
    const img = createImage(category.image_url, ["asideMenu__icon"]);
    const text = createPara(category.display_text, []);
    section.append(img, text);
    return section;
}


const gridContainer = document.getElementById("gridContainer");
gridContainer.classList.add("grid__container", "flex", "flex__column");

for(let i=0;i<items.length;i+=4)
{
    const row = createContainer(["flex"]);
    for(let j=i;j<i+4;j++)
    {
        const div = makeGrid(items[j]);
        row.append(div);
    }
    gridContainer.append(row);
}

const asideBar = document.getElementById("asideBar");

categories.forEach(element => {
    const category = makeCategory(element);
    asideBar.appendChild(category);
});
asideBar.appendChild(category);








