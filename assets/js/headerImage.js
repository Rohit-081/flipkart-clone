const dataList = [
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100",
    title: "Top Offers",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",
    title: "Grocery",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",
    title: "Mobiles",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100",
    title: "Fashion",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100",
    title: "Electronics",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100",
    title: "Home",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100",
    title: "Appliances",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100",
    title: "Travel",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100",
    title: "Beauty, Toys & More",
  },
];

const imageList = document.getElementById("headerImage");
imageList.classList.add("header-image");
container.appendChild(imageList);

const imageSortFlex = document.createElement("div");
imageSortFlex.classList.add("image-sort-flex");
imageList.appendChild(imageSortFlex);

function createElements(data) {
  const listAnchor = document.createElement("a");
  listAnchor.href = "#default";
  const listItem = document.createElement("div");
  listItem.classList.add("inner-sort");
  listItem.innerHTML = `<img src=${data.imageUrl} alt="">
                        <p>${data.title}</p>`;
  listAnchor.append(listItem);
  return listAnchor;
}

for (let i = 0; i < dataList.length; i++) {
  currentElement = dataList[i];

  const newElement = createElements(currentElement);
  imageSortFlex.appendChild(newElement);
}
