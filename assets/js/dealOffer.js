const dataList1 = [
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/kkoc70w0/surge-protector/e/a/1/gm4-1-flipkart-smartbuy-original-imafzypshvrdxgd8.jpeg?q=70",
    title1: "Electrical Hardware",
    title2: "From ₹99",
    title3: "Best Selling",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/kgv5x8w0/jacket/n/p/f/m-dtaw20jk023a-ducati-original-imafxyazyemfzzv4.jpeg?q=70",
    title1: "Best Of Brands!",
    title2: "Min 50% Off",
    title3: "Men's Clothing",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/jzn0tjk0/ironing-board/2/x/w/xpa-bathla-original-imafjhxbckgthpye.jpeg?q=70",
    title1: "HOME UTILITIES",
    title2: "From ₹99",
    title3: "Best Selling",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/kekadu80/block-construction/z/7/y/elsa-and-olaf-s-tea-party-lego-original-imafv7bkrzzzzw2z.jpeg?q=70",
    title1: "Toys & Stationery Supplies",
    title2: "Upto 70%+Extra10% off",
    title3: "Notebooks, Pens, Games & ...",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/kvsfhjk0/sandal/i/l/a/4-6715290-4-bata-beige-original-imag8m4vttzyx2bf.jpeg?q=70",
    title1: "Bata, Asian & more",
    title2: "40-60%+Extra 5% Off",
    title3: "Women's Footwear",
  },
  {
    imageUrl:
      "https://rukminim1.flixcart.com/image/150/150/k0463rk0/bedsheet/x/t/p/3d-printed-bedsheet-48-ncs-3d-48-flat-new-click-shop-original-imafjzcqhut6ghgh.jpeg?q=70",
    title1: "Bedsheets, Curtains & more",
    title2: "From ₹99+Extra 10%OFF",
    title3: "Never Before...",
  },
];

const dealOffer = document.getElementById("dealOffer");
dealOffer.classList.add("deal-offer");
container.appendChild(dealOffer);

const dealLeft = document.createElement("div");
dealLeft.classList.add("left-deal");
dealOffer.appendChild(dealLeft);

const timer = document.createElement("div");
timer.classList.add("timer");
dealLeft.appendChild(timer);

const timerHeader = document.createElement("div");
timerHeader.classList.add("timer-header");
timer.appendChild(timerHeader);

const dealDay = document.createElement("div");
dealDay.classList.add("deal-day");
timerHeader.appendChild(dealDay);

dealDay.innerHTML = ` <h2>Deals of the Day</h2>`;

const redClock = document.createElement("div");
redClock.classList.add("red-clock");
timerHeader.appendChild(redClock);

redClock.innerHTML = `<p><img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg" height="24" width="24" alt=""></p>`;

const offerTimer = document.createElement("div");
offerTimer.classList.add("offer-timer");
timerHeader.appendChild(offerTimer);

offerTimer.innerHTML = `<div style="color: red">Offers Expired.</div>
<div>
    <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNyAxNyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNOC40ODYuNzAzQzQuMjA2LjcwMy43MDMgNC4yMDUuNzAzIDguNDg2YzAgNC4yODIgMy41MDIgNy43ODQgNy43ODMgNy43ODQgMy42IDAgNi42MTctMi41MyA3Ljc4NC01LjgzOGgtMS45NDZjLTEuMTY3IDIuMjM4LTMuMzA4IDMuODkyLTUuODM4IDMuODkyLTMuMjEgMC01LjgzNy0yLjYyNy01LjgzNy01LjgzOCAwLTMuMjEgMi42MjYtNS44MzcgNS44MzYtNS44MzcgMS42NTUgMCAzLjAxNy42OCAzLjg5MiAxLjk0NWwtMi45MiAyLjkyaDYuODEyVi43MDJMMTQuMzI0IDIuNjVDMTIuNTc0IDEuNjc1IDEwLjYyNy43MDIgOC40ODYuNzAyeiIgZmlsbD0iIzI4NzRmMCIgZmlsbC1ydWxlPSJldmVub2RkIi8+PC9zdmc+"
        alt="">
    <span style="color: #2874F0">Show New Deals</span>
</div>`;

const timerButton = document.createElement("div");
timerButton.classList.add("timer-button");
timer.appendChild(timerButton);

timerButton.innerHTML = `<button>VIEW ALL</button>`;

const itemShowSection = document.createElement("div");
itemShowSection.classList.add("item-show-section");
dealLeft.appendChild(itemShowSection);

function createElements(data) {
  const itemAlign = document.createElement("div");
  itemAlign.classList.add("item-align");
  itemShowSection.appendChild(itemAlign);

  const itemImage = document.createElement("div");
  itemImage.classList.add("item-image");
  itemAlign.appendChild(itemImage);

  itemImage.innerHTML = `<img src=${data.imageUrl} alt="">`;

  const itemDescription = document.createElement("div");
  itemDescription.classList.add("item-description");
  itemAlign.appendChild(itemDescription);

  itemDescription.innerHTML = `<p>${data.title1}</p>
                               <p>${data.title2}</p>
                               <p>${data.title3}</p>`;

  return itemAlign;
}

for (let i = 0; i < dataList1.length; i++) {
  currentElement = dataList1[i];

  const newElement = createElements(currentElement);
  itemShowSection.appendChild(newElement);
}

const dealRight = document.createElement("div");
dealRight.classList.add("right-deal");
dealOffer.appendChild(dealRight);

dealRight.innerHTML = `<img src="https://rukminim1.flixcart.com/flap/464/708/image/28d7b7990028c9bf.jpg?q=70" alt="">`;
