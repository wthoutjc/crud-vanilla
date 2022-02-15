// import './modules/uxui'
// Efectos CCS: UX/UI
const $card = document.getElementById("card");
const $effect1 = document.getElementById("effect1");
const $effect2 = document.getElementById("effect2");
const $infoButton = document.getElementById("info-button");
const $cardInfo = document.getElementById("card-info");
const $addButton = document.getElementById("add-button");
const $closeButton = document.getElementById("close-button")
const $addHeroeForm = document.getElementById("add-heroe-form")
const $editHeroe = document.getElementById("edit-heroe")
const $deleteHeroe = document.getElementById("delete-heroe")
const $editHeroeForm = document.getElementById("edit-heroe-form")
const $deleteHeroeForm = document.getElementById("delete-heroe-form")

$card.onmouseenter = () => {
  $effect1.style.display = "block";
  $effect2.style.display = "flex";
  $infoButton.style.transform = "translateY(0px)";
  $infoButton.style.transition = "transform 0.4s";
};

$card.onmouseleave = () => {
  $effect1.style.display = "none";
  $effect2.style.display = "none";
  $infoButton.style.transform = "translateY(40px)";
  $infoButton.style.transition = "transform 0.6s";
  $cardInfo.style.transform = "translateY(40px)";
};

$infoButton.onclick = () => {
  $infoButton.style.transform = "rotate(180deg)";
  $cardInfo.style.transform = "translateY(0px)";
  $cardInfo.style.transition = "transform 0.6s";
};

$closeButton.onclick = (e) => {
    e.preventDefault()
    $addHeroeForm.style.display = 'none'
    $deleteHeroeForm.style.display = "none"
    $editHeroeForm.style.display = "none"
}

$addButton.onclick = (e) => {
    e.preventDefault()
    $addHeroeForm.style.display = 'flex'
}

$editHeroe.onclick = () => {
    $editHeroeForm.style.display = "flex"
}

$deleteHeroe.onclick = () => {
    $deleteHeroeForm.style.display = "flex"
}