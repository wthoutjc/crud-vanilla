import { addCard } from "./inners.js";
import { defaultSETTINGS, getAllURL } from "./fetchSettings.js";
import { UXUI } from "./uxui.js";

//Global
let heros;
const $herosContainer = document.getElementById("heros-container");

const requestHero = async (
  url = getAllURL,
  settings = defaultSETTINGS,
  hero = null
) => {
  // Get all heros
  const response = await fetch(url, settings);
  if (response.status !== 200)
    return ["Falló el procesamiento de la solicitud", false];
  const data = await response.json();
  hero
    ? (heros = Object.entries({ Batman: data }))
    : (heros = Object.entries(data));
  heros?.map((data) => {
    // Normalize text
    const id = `card-${String(data[0])
      .toLocaleLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(" ", "")}`;

    // Inserting to DOM
    addCard({ data, id });
  });
  return [heros, true];
};

const requestIDHero = async (elementDOM, url, settings) => {
  const response = await fetch(url, settings);
  if (response.status === 200) {
    elementDOM.style.display = "none";
    $herosContainer.innerHTML = null;
    const request = await requestHero();
    if (request[1]) UXUI(request[0]);
  }
};

export { requestHero, requestIDHero };
