const dataList4 = [
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/kuipea80/electric-kettle/k/u/y/favourite-pigeon-original-imag7mzd7efhkvnr.jpeg?q=70",
    title1: "0% Interest",
    title2: "No Cost EMI",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/ku4ezrk0/computer/y/v/b/na-thin-and-light-laptop-asus-original-imag7bh52qsvjgqh.jpeg?q=70",
    title1: "Thin And Light Laptop",
    title2: "No Cost EMI",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/kt8zb0w0/computer/n/m/v/inspiron-3511-thin-and-light-laptop-dell-original-imag6n5kbmfcgxk6.jpeg?q=70",
    title1: "256 GB Laptops",
    title2: "Specials",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/keaaavk0/computer/c/q/t/lenovo-na-thin-and-light-laptop-original-imafuzt873zgp9xe.jpeg?q=70",
    title1: "SSD",
    title2: "Min 20% Off",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/kw2fki80/computer/5/u/l/-original-imag8tthwtgbvmtu.jpeg?q=70",
    title1: "Most Loved",
    title2: "Best Selling Products",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70",
    title1: "Explore Now!",
    title2: "No Cost EMI",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70",
    title1: "Top Rated",
    title2: "4 Stars and Above",
  },
];

const gameSection = document.getElementById("gameSection");
gameSection.classList.add("game-section");
container.appendChild(gameSection);

const gameHeader = document.createElement("div");
gameHeader.classList.add("game-header");
gameSection.appendChild(gameHeader);

gameHeader.innerHTML = `<div>
                              <h2>Must-haves For All Gamers</h2>
                              </div>
                              <div>
                              <button>VIEW ALL</button>
                          </div>`;

const gameShowSection = document.createElement("div");
gameShowSection.classList.add("game-show-section");
gameSection.appendChild(gameShowSection);

function createElements(data) {
  const gameAlign = document.createElement("div");
  gameAlign.classList.add("game-align");
  gameShowSection.appendChild(gameAlign);

  const gameImage = document.createElement("div");
  gameImage.classList.add("game-image");
  gameAlign.appendChild(gameImage);

  gameImage.innerHTML = `<img src=${data.imageUrl} alt="">`;

  const gameDescription = document.createElement("div");
  gameDescription.classList.add("game-description");
  gameAlign.appendChild(gameDescription);

  gameDescription.innerHTML = `<p>${data.title1}</p>
                                     <p>${data.title2}</p>`;

  return gameAlign;
}

for (let i = 0; i < dataList4.length; i++) {
  currentElement = dataList4[i];

  const newElement = createElements(currentElement);
  gameShowSection.appendChild(newElement);
}
