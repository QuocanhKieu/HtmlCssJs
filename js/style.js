const footer = document.querySelector("footer");

const fContainer = document.createElement("div");
fContainer.classList.add("fContainer");
footer.appendChild(fContainer);

//first column
const firstCol = document.createElement("div");
const ggPlayImg = `images/google-play.webp`;
const appleImg = `images/app-store.webp`;
const firstColHtml = `
    <h2>CONTACT INFORMATION</h2>
    <p>Call Us 24/7 Free</p>
    <a href="tel:0961056732">+84961056732</a>
    <a href="#">support@domain.com</a>
    <address>60, 29th Street, San Francisco, CA 94110, United States</address>
    <a href="#"><img src="${ggPlayImg}"/></a>
    <a href="#"><img src="${appleImg}"/></a>
`;

firstCol.innerHTML = firstColHtml;
fContainer.appendChild(firstCol);

//second column
const secondCol = document.createElement("div");
const itemContainer_1 = document.createElement("div");
const itemContainer_2 = document.createElement("div");

const company = `
    <h2>COMPANY</h2>
    <a href="#">About Us</a>
    <a href="#">Shop Products</a>
    <a href="#">My Cart</a>
    <a href="#">Checkout</a>
    <a href="#">Contact Us</a>
    <a href="#">Order Tracking</a>
`;
itemContainer_1.innerHTML = company;

const explore = `
    <h2>EXPLORE</h2>
    <a href="#">Gift a Smile</a>
    <a href="#">Creybit Cares</a>
    <a href="#">Size Guide</a>
    <a href="#">Privacy Policy</a>
    <a href="#">Refund Policy</a>
    <a href="#">Terms of Service</a>
`;
itemContainer_2.innerHTML = explore;

secondCol.append(itemContainer_1, itemContainer_2);
fContainer.appendChild(secondCol);
//third column
const thirdCol = document.createElement("div");
const content = `
    <h2>OUR LOCATION</h2>
    <img src="images/footer-map.avif">
`;
thirdCol.innerHTML = content;
fContainer.append(thirdCol);

//all rights reserved
const rights = document.createElement("div");
rights.innerText = "Copyright © 2023 Group_4. All Rights Reserved";

fContainer.parentElement.append(rights);

//footer complete
//top products
const topProducts = {
  product_1: {
    id: 1,
    name: "Bitsie Pumps",
    price: 84,
    image: `images/topProducts/Image-3_370x.webp`,
    stars: {
      yellowStar: 0,
      whiteStar: 5,
    },
    status: {
      saleOff: {
        stock: 13,
        status: true,
        iniPrice: 100,
        amountOff: 16,
      },
    },
  },
  product_2: {
    id: 2,
    name: "Valmere T-Shirt",
    price: 40,
    image: `images/topProducts/Image-27_370x.webp`,
    stars: {
      yellowStar: 0,
      whiteStar: 5,
    },
    status: {
      saleOff: {
        stock: 0,
        status: false,
        iniPrice: 40,
        amountOff: 0,
      },
    },
  },
  product_3: {
    id: 3,
    name: "V Pumps",
    price: 34.9,
    image: `images/topProducts/Image-29_370x.webp`,
    stars: {
      yellowStar: 5,
      whiteStar: 0,
    },
    status: {
      saleOff: {
        stock: 34,
        status: false,
        iniPrice: 34.9,
        amountOff: 0,
      },
    },
  },
  product_4: {
    id: 4,
    name: "Testani Skirt",
    price: 75,
    image: `images/topProducts/product-image-1_370x.webp`,
    stars: {
      yellowStar: 4,
      whiteStar: 1,
    },
    status: {
      saleOff: {
        stock: 43,
        status: false,
        iniPrice: 75,
        amountOff: 0,
      },
    },
  },
};

const topProContainer = document.createElement("div");

const renderTopPros = () => {
  let i = 0;
  for ([key, item] of Object.entries(topProducts)) {
    const itemContainer = document.createElement("div");
    itemContainer.classList.add(`item_${i}`);

    const proImg = document.createElement("img");
    proImg.src = item.image;
    const name = document.createElement("p");
    name.innerText = item.name;
    const price = document.createElement("p");
    price.innerText = "$" + item.price;
    itemContainer.append(proImg, name, price);
    topProContainer.append(itemContainer);
    i++;
  }
};

window.onload = renderTopPros;

document.querySelector("section.topProducts").append(topProContainer);
