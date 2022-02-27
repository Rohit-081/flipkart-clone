const initialHistory = [
  {
    text: "test",
    icon: "https://rukminim1.flixcart.com/www/100/100/promos/19/07/2018/321e89f8-9ffa-47a7-a9d4-731da9bde6c4.png?q=90",
  },

  {
    text: "qwerty",
    icon: "https://rukminim1.flixcart.com/www/100/100/promos/19/07/2018/321e89f8-9ffa-47a7-a9d4-731da9bde6c4.png?q=90",
  },
  {
    text: "macbook air",
    icon: "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90",
  },
  {
    text: "macbook pro",
    icon: "https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90",
  },
  {
    text: "t shirt",
    icon: "https://rukminim1.flixcart.com/image/100/100/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=90",
  },
];

const header = document.getElementById("header");
header.classList.add("header");
container.appendChild(header);

const headerLeft = document.createElement("div");
headerLeft.classList.add("header-left");
header.appendChild(headerLeft);

const headerLeftSort = document.createElement("div");
headerLeftSort.classList.add("header-left-sort");
headerLeft.appendChild(headerLeftSort);

headerLeftSort.innerHTML = `
                            <a href="#default"><img width="75" class="header-logo" src="assets/img/flipkart-plus.png" alt="flipkart" title="flipkart"></a>
                            <a href="#default" class="explore">Explore <span class="explore-yellow" >Plus</span><img class="plus" src="assets/img/plus.png" alt=""></a> 
                            `;

const searchItem = document.createElement("div");
searchItem.classList.add("search-item-list");
headerLeft.appendChild(searchItem);

const textSearchSort = document.createElement("div");
textSearchSort.classList.add("text-search-sort");
searchItem.appendChild(textSearchSort);

textSearchSort.innerHTML = `
                            <input type="text" placeholder="Search for products, brands and more" id="myInput" data-search>
                            <button type="submit" class="search-btn"><svg width="20" height="26" viewBox="0 0 17 18"  xmlns="http://www.w3.org/2000/svg"><g fill="#2874F1" fill-rule="evenodd"><path class="_34RNph" d="m11.618 9.897l4.225 4.212c.092.092.101.232.02.313l-1.465 1.46c-.081.081-.221.072-.314-.02l-4.216-4.203"></path><path class="_34RNph" d="m6.486 10.901c-2.42 0-4.381-1.956-4.381-4.368 0-2.413 1.961-4.369 4.381-4.369 2.42 0 4.381 1.956 4.381 4.369 0 2.413-1.961 4.368-4.381 4.368m0-10.835c-3.582 0-6.486 2.895-6.486 6.467 0 3.572 2.904 6.467 6.486 6.467 3.582 0 6.486-2.895 6.486-6.467 0-3.572-2.904-6.467-6.486-6.467"></path></g></svg></button>
                         `;

const listSearch = document.createElement("ul");
listSearch.setAttribute("id", "myUl");
listSearch.classList.add("list-search");
searchItem.appendChild(listSearch);

listSearch.innerHTML = `
                        <li>
                            <a href="#"> 
                                <div class="search-list-icon"> 
                                    <div>
                                        <img style="height: 32px; width: 32px;" src="https://rukminim1.flixcart.com/www/100/100/promos/19/07/2018/321e89f8-9ffa-47a7-a9d4-731da9bde6c4.png?q=90"> 
                                    </div>
                                    <div> 
                                            <p class="p1"> laptop </p>
                                            <p class="p2">in Laptops</p>
                                    </div>
                                </div>
                            </a>
                        </li>
                        <li>
                        <a href="#"> 
                            <div class="search-list-icon"> 
                                <div>
                                    <img style="height: 32px; width: 32px;" src="https://rukminim1.flixcart.com/www/100/100/promos/19/07/2018/321e89f8-9ffa-47a7-a9d4-731da9bde6c4.png?q=90"> 
                                </div>
                                <div> 
                                    <p class="p1"> autobiograpy of a yogi </p>
                                    <p class="p2">in Books</p>
                                </div>
                            </div>
                        </a>
                    </li>
                        <li>
                            <a href="#"> 
                                <div class="search-list-icon"> 
                                    <div>
                                        <img style="height: 32px; width: 32px;" src="https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"> 
                                    </div>
                                    <div> 
                                        <p class="p1">macbook pro</p>
                                      
                                    </div>
                                </div>
                            </a>
                        </li>
                   
                  
                    <li>
                        <a href="#"> 
                            <div class="search-list-icon"> 
                                <div>
                                    <img style="height: 32px; width: 32px;" src="https://rukminim1.flixcart.com/image/100/100/kp5sya80/screen-guard/tempered-glass/o/v/n/apple-macbook-air-m1-13-3-inch-lightwings-original-imag3gh5xftgbpg3.jpeg?q=90"> 
                                </div>
                                <div> 
                                    <p class="p1">macbook air</p>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                    <a href="#"> 
                        <div class="search-list-icon"> 
                            <div>
                                <img style="height: 32px; width: 32px;" src="https://rukminim1.flixcart.com/image/100/100/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=90"> 
                            </div>
                            <div> 
                                <p class="p1">t shirts</p>
                            </div>
                        </div>
                    </a><a href="#"> 
                        <div class="search-list-icon"> 
                            <div>
                                <img style="height: 32px; width: 32px;" src="https://rukminim1.flixcart.com/image/100/100/khmbafk0-0/t-shirt/w/j/s/xs-t322-blwh-seven-rocks-original-imafxhagtyj2xvpn.jpeg?q=90"> 
                            </div>
                            <div> 
                                <p class="p1">t shirts</p>
                            </div>
                        </div>
                    </a>
                </li>
                        `;
const searchInput = document.querySelector("[data-search]");
searchInput.addEventListener("click", (e) => {
  document.getElementById("myUl").style.display = "block";
});

searchInput.addEventListener("mouseout", (e) => {
  document.getElementById("myUl").style.display = "none";
  document.getElementById("myInput").value = "";
});

const headerRight = document.createElement("div");
headerRight.classList.add("header-right");
header.appendChild(headerRight);
headerRight.innerHTML = ` <ul>
                            <li><a href="#default"><span>Rohit</span><svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class="" style="transform: rotate(270deg);margin-left: 5px;"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class=""></path></svg></a></li>

                            <li><a href="#default"><span>More</span><svg width="4.7" height="8" viewBox="0 0 16 27" xmlns="http://www.w3.org/2000/svg" class=""style="transform: rotate(270deg);margin-left: 5px;"><path d="M16 23.207L6.11 13.161 16 3.093 12.955 0 0 13.161l12.955 13.161z" fill="#fff" class=""></path></svg></a></li>

                            <li><a href="#default"><svg class="V3C5bO" width="14" height="14" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path class="" style="margin-left: 5px;" d="M15.32 2.405H4.887C3 2.405 2.46.805 2.46.805L2.257.21C2.208.085 2.083 0 1.946 0H.336C.1 0-.064.24.024.46l.644 1.945L3.11 9.767c.047.137.175.23.32.23h8.418l-.493 1.958H3.768l.002.003c-.017 0-.033-.003-.05-.003-1.06 0-1.92.86-1.92 1.92s.86 1.92 1.92 1.92c.99 0 1.805-.75 1.91-1.712l5.55.076c.12.922.91 1.636 1.867 1.636 1.04 0 1.885-.844 1.885-1.885 0-.866-.584-1.593-1.38-1.814l2.423-8.832c.12-.433-.206-.86-.655-.86" fill="#fff"></path></svg>
                                <span>Cart</span> </a></li>
                            </ul>`;

const freeDivElement = document.createElement("div");
freeDivElement.classList.add("header-right");
header.appendChild(freeDivElement);
