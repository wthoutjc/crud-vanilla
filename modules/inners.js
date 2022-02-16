// Global DOM
const $herosContainer = document.getElementById("heros-container");

const addCard = ({ data, id }) => {
  $herosContainer.innerHTML += `
    <div class="card" id=${id}>
      <img src=${data[1].image}
      alt="">
      <div class="effect1" id="effect1-${id}"></div>
      <div class="effect2" id="effect2-${id}">
        <h3>Hero's name</h3>
        <p>${data[0]}</p>
        <h3>Person's name</h3>
        <p>${data[1].nombre}</p>
        <h3>Age</h3>
        <p>${data[1].edad}</p>
      </div>
      <button class="info-button" id="info-button-${id}"><i class="fa-solid fa-angle-down"></i></button>
      <div class="card-info" id="info-${id}">
        <button id="edit-hero-${id}"><i class="fa-solid fa-pen-to-square"></i></button>
        <button id="delete-hero-${id}"><i class="fa-solid fa-delete-left"></i></button>
      </div>
    </div>
    `;
};

export { addCard };
