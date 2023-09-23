// popular cakes part *********************************************************

// frist take a data ****************************************
const trandingcake_data = [
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/tranding-cake/pic-1.jpg",
  },
];

// selector

const container = document.querySelector(".Tconatainer");

function TrandingCakesContainer() {
  trandingcake_data.forEach((trandingcake, i) => {
    const li = document.createElement("li"); ///li
    li.setAttribute("class", "imagep"); //take className

    li.innerHTML = `
          <img src="${trandingcake.image}" />
          <p>${trandingcake.order}</p>
        `;

    container.appendChild(li);
    // this type of function create html like this  ⬇****************

    /*  <div class="Pconatainer">
      <li class="imageP">
          <img src="" />
          <p>orderNow</p>
        </li> 
        </div>
        */
    // console.log(container);
  });
}

TrandingCakesContainer();
