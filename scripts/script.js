// const newArr = [];
const randomDrink = () => {
  // for (let i = 0; i < 3; i++) {
    axios
      .get("https://www.thecocktaildb.com/api/json/v1/1/random.php")
      .then((res) => {
        const src = res.data.drinks[0].strDrinkThumb;
        // img.setAttribute("src", src);
        // newArr.push(src);
        const img1 = document.querySelector(".img-card-left");
         img1.setAttribute("src", `${newArr[0]}`);
      })
      .catch((err) => console.log(err));
  };

randomDrink();
console.log(16, newArr, typeof newArr, newArr[0]);
const img1 = document.querySelector(".img-card-left");
// console.log(18, newArr[0]);
// img1.setAttribute("src", `${newArr[0]}`);
// const img2 = document.querySelector(".img-card-middle");
// img2.setAttribute("src", newArr[1]);
// const img3 = document.querySelector(".img-card-right");
// img3.setAttribute("src", newArr[2]);
