import { addCard } from "./inners.js";
import { defaultSETTINGS, getAllURL } from "./fetchSettings.js";
import { UXUI } from "./uxui.js";

//Global
let heros;
const $herosContainer = document.getElementById("heros-container");

const normalizeString = (str) => {
  return String(str)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(" ", "");
};

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

  // Normalize Hero
  if (hero) {
    hero = normalizeString(hero);
    let aux = eval(`({${hero}:null})`);
    aux[hero] = data;
    heros = Object.entries(aux);
  } else heros = Object.entries(data);

  heros?.map((data) => {
    // Normalize text
    const id = `card-${normalizeString(data[0])}`;

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

export { requestHero, requestIDHero, normalizeString };
