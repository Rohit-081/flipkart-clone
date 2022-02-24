const dataList3 = [
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

const homeSection = document.getElementById("homeSection");
homeSection.classList.add("home-section");
container.appendChild(homeSection);

const homeHeader = document.createElement("div");
homeHeader.classList.add("home-header");
homeSection.appendChild(homeHeader);

homeHeader.innerHTML = `<div>
                            <h2>Home Makeover</h2>
                            <h3>Upto 70% off</h3>
                            </div>
                            <div>
                            <button>VIEW ALL</button>
                        </div>`;

const homeShowSection = document.createElement("div");
homeShowSection.classList.add("home-show-section");
homeSection.appendChild(homeShowSection);

function createElements(data) {
  const homeAlign = document.createElement("div");
  homeAlign.classList.add("home-align");
  homeShowSection.appendChild(homeAlign);

  const homeImage = document.createElement("div");
  homeImage.classList.add("home-image");
  homeAlign.appendChild(homeImage);

  homeImage.innerHTML = `<img src=${data.imageUrl} alt="">`;

  const homeDescription = document.createElement("div");
  homeDescription.classList.add("home-description");
  homeAlign.appendChild(homeDescription);

  homeDescription.innerHTML = `<p>${data.title1}</p>
                                   <p>${data.title2}</p>`;

  return homeAlign;
}

for (let i = 0; i < dataList3.length; i++) {
  currentElement = dataList3[i];

  const newElement = createElements(currentElement);
  homeShowSection.appendChild(newElement);
}
