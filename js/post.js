const body = document.querySelector('.body');

// 建立content區域
export const content = document.createElement("div");

content.classList.add("content");

body.appendChild(content);

// 建立content內部的item
const item1 = document.createElement("div");
const item2 = document.createElement("div");
const item3 = document.createElement("div");
const item4 = document.createElement("div");
const item5 = document.createElement("div");
const item6 = document.createElement("div");

const itemData = [item1, item2, item3, item4, item5, item6]

itemData.forEach(function (item) {
    item.classList.add("item");
    content.appendChild(item);
})

// item插入圖片
const itemImage1 = '<img src="./images/2b3f6ff00db7a1efae21d85cfb8995eaff2da8d8.png">';
const itemImage2 = '<img src="./images/600318f01f6fb95bbdaaebfd21644d1caefd43a7.png">';
const itemImage3 = '<img src="./images/70a91d7bed9893ec5e1bff2f44c52178a41f74e0.png">';
const itemImage4 = '<img src="./images/a9a6aa931b7d14263c3119287c1313523463326b.png">';
const itemImage5 = '<img src="./images/ecdc5527d67488c92c242e34458844fe2afac525.png">';
const itemImage6 = '<img src="./images/fd3052b825dd7dc2d4f78043ecd94b57f9cad36a.png">';

const imageData = [itemImage1, itemImage2, itemImage3, itemImage4, itemImage5, itemImage6]

itemData.forEach(function (item, index) {
    item.innerHTML = imageData[index]
})


