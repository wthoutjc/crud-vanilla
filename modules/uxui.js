const UXUI = (request) => {
  if (request) {
    //GLOBALS
    const $herosContainer = document.getElementById("heros-container");
    const $closeButton = document.getElementById("close-button");
    const $closeButton2 = document.getElementById("close-button2");
    const $closeButton3 = document.getElementById("close-button3");
    const $addHeroForm = document.getElementById("add-hero-form");
    const $editHeroForm = document.getElementById("edit-hero-form");
    const $deleteHeroForm = document.getElementById("delete-hero-form");
    const $addButton = document.getElementById("add-button");

    for (let i = 0; i < $herosContainer.children.length; i++) {
      const $card = $herosContainer.children[i];

      /**
       * $card.children[1] EFFECT 1
       * $card.children[2] EFFECT 2
       * $card.children[3] INFO BUTTON
       * $card.children[4] CARD INFO
       */

      /**
       * $card.children[4].children[0] EDIT
       * $card.children[4].children[1] DELETE
       */

      $herosContainer.children[i].onmouseenter = () => {
        $card.children[1].style.display = "block";
        $card.children[2].style.display = "flex";
        $card.children[3].style.transform = "translateY(0px)";
        $card.children[3].style.transition = "transform 0.4s";
      };

      $herosContainer.children[i].onmouseleave = () => {
        $card.children[1].style.display = "none";
        $card.children[2].style.display = "none";
        $card.children[3].style.transform = "translateY(40px)";
        $card.children[3].style.transition = "transform 0.6s";
        $card.children[4].style.transform = "translateY(40px)";
      };

      $herosContainer.children[i].onclick = () => {
        $card.children[3].style.transform = "rotate(180deg)";
        $card.children[4].style.transform = "translateY(0px)";
        $card.children[4].style.transition = "transform 0.6s";
      };

      $card.children[4].children[0].onclick = (e) => {
        e.preventDefault();
        $editHeroForm.style.display = "flex";
        const $editForm = $editHeroForm.children[0];
        const $title = $editForm.children[0].children[0];
        const $inputs = $editForm.children[1].children;
        /**
         * $inputs[0] nombre
         * $inputs[1] edad
         * $inputs[3] BUTTON
         */
        $title.innerHTML = `${request[i][0]}`;
        $inputs[1].value = request[i][1].nombre;
        $inputs[3].value = request[i][1].edad;
        $inputs[5].value = request[i][1].image;
      };

      $card.children[4].children[1].onclick = (e) => {
        e.preventDefault();
        $deleteHeroForm.style.display = "flex";
        const $deleteForm = $deleteHeroForm.children[0];
        const $title = $deleteForm.children[0].children[0];
        $title.innerHTML = `${request[i][0]}`;
      };

      $closeButton.onclick = (e) => {
        e.preventDefault();
        $addHeroForm.style.display = "none";
        $deleteHeroForm.style.display = "none";
        $editHeroForm.style.display = "none";
      };
      $closeButton2.onclick = (e) => {
        e.preventDefault();
        $editHeroForm.style.display = "none";
      };
      $closeButton3.onclick = (e) => {
        e.preventDefault();
        $deleteHeroForm.style.display = "none";
      };

      $addButton.onclick = (e) => {
        e.preventDefault();
        $addHeroForm.style.display = "flex";
      };
    }
  }
};

export { UXUI };
