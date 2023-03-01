function createPara(text, style) {
    const para = document.createElement("p");
    para.textContent = text;
    style.forEach(element => {
        para.classList.add(element);
    });
    return para;
}

function createImage(url, style) {
    const img = document.createElement("img");
    img.src = url;
    style.forEach(element => {
        img.classList.add(element);
    });
    return img;
}

function createBtn(text) {
    const btn = document.createElement("button");
    btn.textContent = text;
    return btn;
}

function createContainer(style) {
    const container = document.createElement("div");
    style.forEach(element => {
        container.classList.add(element);
    });
    return container;
}

export {
    createPara,
    createImage,
    createBtn,
    createContainer
};