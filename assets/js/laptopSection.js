const dataList2 = [
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/keaaavk0/computer/x/m/y/lenovo-na-laptop-original-imafuzt8r5jqppfn.jpeg?q=70",
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

const laptopSection = document.getElementById("laptopSection");
laptopSection.classList.add("laptop-section");
container.appendChild(laptopSection);

const laptopHeader = document.createElement("div");
laptopHeader.classList.add("laptop-header");
laptopSection.appendChild(laptopHeader);

laptopHeader.innerHTML = `<div>
                                <h2>Laptops For You</h2>
                                <h3>Suggested for you</h3>
                                </div>
                                <div>
                                <button>VIEW ALL</button>
                          </div>`;

const laptopShowSection = document.createElement("div");
laptopShowSection.classList.add("laptop-show-section");
laptopSection.appendChild(laptopShowSection);

function createElements(data) {
  const laptopAlign = document.createElement("div");
  laptopAlign.classList.add("laptop-align");
  laptopShowSection.appendChild(laptopAlign);

  const laptopImage = document.createElement("div");
  laptopImage.classList.add("laptop-image");
  laptopAlign.appendChild(laptopImage);

  laptopImage.innerHTML = `<img src=${data.imageUrl} alt="">`;

  const laptopDescription = document.createElement("div");
  laptopDescription.classList.add("laptop-description");
  laptopAlign.appendChild(laptopDescription);

  laptopDescription.innerHTML = `<p>${data.title1}</p>
                                 <p>${data.title2}</p>`;

  return laptopAlign;
}

for (let i = 0; i < dataList2.length; i++) {
  currentElement = dataList2[i];

  const newElement = createElements(currentElement);
  laptopShowSection.appendChild(newElement);
}
