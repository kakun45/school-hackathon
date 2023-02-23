let endpoints = [
  "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  "https://www.thecocktaildb.com/api/json/v1/1/random.php",
  "https://www.thecocktaildb.com/api/json/v1/1/random.php",
];

axios
  .all(endpoints.map((endpoint) => axios.get(endpoint)))
  .then((res) => {
    // console.log(res[0]);
    const img1 = res[0].data.drinks[0].strDrinkThumb;
    const title1 = res[0].data.drinks[0].strDrink;
    getImg(img1, ".card--hawaii", title1, ".card__title1");

    const img2 = res[1].data.drinks[0].strDrinkThumb;
    const title2 = res[1].data.drinks[0].strDrink;
    getImg(img2, ".card--iceland", title2, ".card__title2");

    const img3 = res[2].data.drinks[0].strDrinkThumb;
    const title3 = res[2].data.drinks[0].strDrink;
    getImg(img3, ".card--greece", title3, ".card__title3");
    // ingredients
    const obj1 = res[0].data.drinks[0];
    getIngredients(obj1, ".ingredients-left");

    const obj2 = res[1].data.drinks[0];
    getIngredients(obj2, ".ingredients-middle");

    const obj3 = res[2].data.drinks[0];
    getIngredients(obj3, ".ingredients-right");
  })
  .catch((err) => console.log(err));

// for one request only
// const randomDrink = axios
//   .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
//   .then((res) => {
//     const href = res.data.drinks[0].strDrinkThumb;
//     getImg(href, ".card--hawaii");
//   })
//   .catch((err) => console.log(err));

function getImg(href, card, titleName, titleClass) {
  const img1 = document.querySelector(card);
  img1.style.backgroundImage = `url(${href})`;
  const title = document.querySelector(titleClass);
  title.innerText = titleName;
}

function getIngredients(obj, parentClass) {
  const ingredientHandles = [
    "strIngredient1",
    "strIngredient2",
    "strIngredient3",
    "strIngredient4",
    "strIngredient5",
    "strIngredient6",
    "strIngredient7",
  ];
  for (let i = 0; i < ingredientHandles.length; i++) {
    console.log(57, ingredientHandles[i]);
    if (obj[ingredientHandles[i]] !== null) {
      console.log(58, obj[ingredientHandles[i]]);
      const parent = document.querySelector(parentClass);
      const child = document.createElement("li");
      child.classList.add("test");
      child.innerText = obj[ingredientHandles[i]];
      parent.appendChild(child);
    }
  }
}
