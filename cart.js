import {createPara} from "./create.js";
import {
    items
} from "./data.js";

let cartDisplay = document.querySelector("#cartDisplay");
let keys = Object.keys(localStorage);

const itemCount = createPara("", []);
cartDisplay.append(itemCount);

let count = 0;
for (let key of keys) {
    const itemStore = createPara("", []);
    for (let i = 0; i < items.length; i++) {
        if (items[i].id == key) {
            itemStore.textContent = items[i].product_name + "  :  " + localStorage.getItem(key);
        }
        cartDisplay.append(itemStore);
    }
    count = count + Number(localStorage.getItem(key));
}
itemCount.textContent = "Items : " + count;
