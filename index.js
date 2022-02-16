import {
  requestHero,
  requestIDHero,
  normalizeString,
} from "./modules/fetch.js";
import { UXUI } from "./modules/uxui.js";
import {
  globalURL,
  defaultSETTINGS,
  putSETTINGS,
  deleteSETTIGNS,
} from "./modules/fetchSettings.js";

const $herosContainer = document.getElementById("heros-container");

//serch-hero
const $searchHeroButton = document.getElementById("search-hero");
const $searchHeroInput = document.getElementById("hero");

//edit-hero
const $editHeroButton = document.getElementById("edit-hero");
const $nameHeroInput = document.getElementById("name-hero");
const $ageHeroInput = document.getElementById("age-hero");
const $imageHeroInput = document.getElementById("image-hero");

//delete-hero
const $deleteHeroButton = document.getElementById("delete-button");

//add-hero
const $addHeroButton = document.getElementById("add-hero-button");
const $inputName = document.getElementById("add-name");
const $inputAlterEgo = document.getElementById("add-alter-ego");
const $inputAge = document.getElementById("add-age");
const $inputImage = document.getElementById("add-image");

const request = await requestHero();
if (request[1]) UXUI(request[0]);

$addHeroButton.onclick = async (e) => {
  e.preventDefault();
  const $addHeroForm = document.getElementById("add-hero-form");
  if (
    $inputName.value &&
    $inputAlterEgo.value &&
    $inputAge.value &&
    $inputImage.value
  ) {
    const nameHero = normalizeString($inputName.value);
    const nombre = $inputAlterEgo.value;
    const edad = $inputAge.value;
    const image = $inputImage.value;
    const hero = {
      nombre,
      edad,
      image
    }
    requestIDHero(
      $addHeroForm,
      `${globalURL}/${nameHero}.json`,
      putSETTINGS(hero)
    );
  }
};

$searchHeroButton.onclick = async (e) => {
  e.preventDefault();
  if ($searchHeroInput.value) {
    $herosContainer.innerHTML = null;
    const request = await requestHero(
      `${globalURL}/${$searchHeroInput.value}.json`,
      defaultSETTINGS,
      $searchHeroInput.value
    );
    if (request[1]) UXUI(request[0]);
  }
};

$editHeroButton.onclick = async (e) => {
  e.preventDefault();
  const $editForm = document.getElementById("edit-hero-form");
  // Get ID Hero
  const id = document.getElementById("hero-id").innerHTML;
  const url = `${globalURL}/${id}.json`;
  const hero = {
    nombre: $nameHeroInput.value,
    edad: $ageHeroInput.value,
    image: $imageHeroInput.value,
  };
  requestIDHero($editForm, url, putSETTINGS(hero));
};

$deleteHeroButton.onclick = async (e) => {
  e.preventDefault();
  const $deleteForm = document.getElementById("delete-hero-form");
  // Get ID Hero
  const id = document.getElementById("delete-id").innerHTML;
  const url = `${globalURL}/${id}.json`;
  requestIDHero($deleteForm, url, deleteSETTIGNS);
};
