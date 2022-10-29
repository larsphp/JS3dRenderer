import "./style.css";

const body = document.body;
const menu = document.getElementById("menu");

var punkte = [];
var linien = [];
var b = 0;
var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

body.addEventListener("keydown", (v) => {
  if (v.key != " ") return 0;
  if (menu.style.display != "none") {
    menu.style.display = "none";
  } else {
    menu.style.display = "block";
  }
});
document.querySelector("#neuerLinienInput").addEventListener("click", () => {
  let neuI = menu.children[3].children[1].appendChild(
    linienInput.cloneNode(true)
  );
});
document.querySelector("#neuerPunkteInput").addEventListener("click", () => {
  if (b >= 26) return 0;
  let neuI = menu.children[1].children[1].appendChild(
    punktInput.cloneNode(true)
  );
  let buchstabe = neuI.prepend(document.createElement("span"));
  neuI.children[0].innerText = alphabet[b++] + " ";
});

const punktInput = document.createElement("div");
punktInput.innerHTML = `
<input placeholder="y" type="number">
<input placeholder="z" type="number">
<input placeholder="x" type="number">
`;
const linienInput = document.createElement("div");
linienInput.innerHTML = `
<input placeholder="Von " type="text">
<input placeholder="Nach" type="text">
`;

document.querySelector("#rendern").addEventListener("click", () => {
  linien = [];
  punkte = [];
  Array.from(document.querySelector("#punkteInputs2").children).forEach((v) => {
    punkte.push([
      v.children[1].valueAsNumber,
      v.children[2].valueAsNumber,
      v.children[3].valueAsNumber,
    ]);
  });

  Array.from(document.querySelector("#linienInputs2").children).forEach((v) => {
    linien.push(
      v.children[0].value.toUpperCase() + v.children[1].value.toUpperCase()
    );
  });

  console.log(punkte, linien);
  render(punkte, linien);
});

function render(p, l) {}
