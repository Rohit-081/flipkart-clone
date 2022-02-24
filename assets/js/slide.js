const imageDataList = [
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/1688/280/image/5655d35aa959ffe8.jpg?q=50",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/1688/280/image/84ae63351d2d51ec.jpg?q=50",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/1688/280/image/e284b77bb80114f7.jpg?q=50",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/flap/1688/280/image/a9193a4988ff1328.jpg?q=50",
  },
];

const slideContainer = document.getElementById("slideContainer");
slideContainer.classList.add("slide-container");
container.appendChild(slideContainer);

function createSlider(data) {
  const slides = document.createElement("div");
  slides.classList.add("mySlides1");
  slides.innerHTML = `<img class="slidesImage" src=${data.imageUrl} />`;
  return slides;
}

for (let i = 0; i < imageDataList.length; i++) {
  currentElement = imageDataList[i];

  const newElement = createSlider(currentElement);
  slideContainer.appendChild(newElement);
}

const slideFirstAnchor = document.createElement("a");
slideFirstAnchor.classList.add("prev");
slideFirstAnchor.setAttribute("onclick", "plusSlides(-1, 0)");
slideFirstAnchor.innerHTML = `<svg class="left-arrow" width="14.6" height="27" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#000" class="_3ZKfA2"/></svg>`;
slideContainer.appendChild(slideFirstAnchor);
const slideSecondAnchor = document.createElement("a");
slideSecondAnchor.classList.add("next");
slideSecondAnchor.setAttribute("onclick", "plusSlides(1,0)");
slideSecondAnchor.innerHTML = `<svg class="right-arrow" style="transform: rotate(180deg);" width="14.6" height="27 " viewBox="0 0 16 27 " xmlns="http://www.w3.org/2000/svg "><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z " fill="#000 " class="_3ZKfA2 "/></svg>`;
slideContainer.appendChild(slideSecondAnchor);

var slideIndex = [1, 1];
var slideId = ["mySlides1", "mySlides2"];
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides((slideIndex[no] += n), no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {
    slideIndex[no] = 1;
  }
  if (n < 1) {
    slideIndex[no] = x.length;
  }
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no] - 1].style.display = "block";
}
