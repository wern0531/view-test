export const body = document.querySelector('.body');
export const header = document.createElement("div");

header.classList.add("header");

body.appendChild(header);

const character = document.createElement("div");
const introduce = document.createElement("div");

character.classList.add("character");
introduce.classList.add("introduce");

header.appendChild(character);
header.appendChild(introduce);

const characterImage = '<img src="./images/18d9e1307018dbc76750ca7d5124fccd.png">';

character.innerHTML = characterImage;

introduce.innerHTML = `
<h1>小智</h1>
<span>來自真新鎮的10歲寶可夢訓練家</span>
<h2>經歷<br>
    寶可夢世界錦標賽（大師淘汰賽） ：世界冠軍<br>
    阿羅拉聯盟（瑪納羅大會）：冠軍<br>
    卡洛斯聯盟（密阿雷大會）：亞軍<br>
</h2>
`