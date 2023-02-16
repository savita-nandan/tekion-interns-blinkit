import {items, categories} from './data.js';

function createPara(text){
    const para = document.createElement("p");
    para.textContent = text;
    return para;
}

function createImage(url){
    const img = document.createElement("img");
    img.src = url;
    return img;
}

function createBtn(text){
    const btn = document.createElement("button");
    btn.textContent = text;
    return btn;
}



function makeGrid(items){
    const innerDiv = document.createElement("div");
    innerDiv.classList.add("flex");
    const iconDiv = document.createElement("div");
    iconDiv.classList.add("card", "flex",  "flex__column",  "flex__center__cross-axis");
    const div1 = document.createElement("div");
    const div2 = document.createElement("div");
    div2.classList.add("container__btn", "flex__center__main-axis", "flex__center__cross-axis");
    const text = createPara("10% off");
    div2.appendChild(text);
    const img = createImage(items.image_url);
    img.classList.add("container__icon");
    div1.append(div2,img);

    const para1 = createPara("Sourced at 5 AM");
    para1.classList.add("para2");
    const para2 = createPara(items.product_name);
    para2.style.fontWeight = "bold";
    para2.classList.add("para1");
    const para3 = createPara("1 kg");
    para3.classList.add("para1", "gray");

    const bottomDiv = document.createElement("div");
    bottomDiv.classList.add("cardBottom", "flex",  "flex__center__cross-axis");
    const div4 = document.createElement("div");
    const p1 = createPara(`₹${items.discount_price}`);
    const p2 = createPara(`₹${items.price}`);
    p2.classList.add("gray");
    div4.append(p1,p2);
    const btn = createBtn("ADD");
    btn.classList.add("innerbtn");
    bottomDiv.append(div4, btn);

    iconDiv.append(div1, para1, para2, para3,bottomDiv);
    innerDiv.append(iconDiv);

    return innerDiv;
}

function makeCategory(category){
    const section = document.createElement("section");
    const img = createImage(category.image_url);
    img.classList.add("asideMenu__icon");
    const text = createPara(category.display_text);
    section.append(img, text);
    section.classList.add("asideMenu", "flex");
    return section;
}


const gridContainer = document.getElementById("gridContainer");
gridContainer.classList.add("grid__container", "flex", "flex__column");

for(let i=0;i<items.length;i+=4)
{
    const row = document.createElement("div");
    row.classList.add("flex");
    for(let j=i;j<i+4;j++)
    {
        const div = makeGrid(items[j]);
        row.append(div);
    }
    gridContainer.append(row);
}

const asideBar = document.getElementById("asideBar");
for(let i=0;i<categories.length;i++)
{
    const category = makeCategory(categories[i]);
    asideBar.appendChild(category);
}








