// popular cakes part *********************************************************

// frist take a data ****************************************
const designcake_data = [
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/design-cakes/pic-1.jpg",
  },
];

// selector

const container = document.querySelector(".Dconatainer");

function DesignCakesContainer() {
  designcake_data.forEach((designcake, i) => {
    const li = document.createElement("li"); ///li
    li.setAttribute("class", "imagep"); //take className

    li.innerHTML = `
          <img src="${designcake.image}" />
          <p>${designcake.order}</p>
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

DesignCakesContainer();
