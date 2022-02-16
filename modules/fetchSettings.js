//Global URL
const globalURL =
  "https://giweb-2021-3-peticiones-default-rtdb.firebaseio.com/heroes";

const getAllURL =
  "https://giweb-2021-3-peticiones-default-rtdb.firebaseio.com/heroes.json";

// DEFAULT SETTINGS
const defaultSETTINGS = {
  method: "GET",
};

const putSETTINGS = (hero) => {
  return {
    method: "PUT",
    body: JSON.stringify(hero),
    headers: {
      "Content-Type": "application/json",
    },
  };
};

const deleteSETTIGNS = {
  method: "DELETE",
};

export { globalURL, getAllURL, defaultSETTINGS, putSETTINGS, deleteSETTIGNS };
