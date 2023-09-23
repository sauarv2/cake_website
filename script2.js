// popular cakes part *********************************************************

// frist take a data ****************************************
const popularcake_data = [
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
  {
    order: "Order Now",
    image: "img/popular-cakes/pic-1.jpg",
  },
];

// selector

const container = document.querySelector(".Pconatainer");

function popularCakesContainer() {
  popularcake_data.forEach((popularcake, i) => {
    const li = document.createElement("li"); ///li
    li.setAttribute("class", "imagep"); //take className

    li.innerHTML = `
          <img src="${popularcake.image}" />
          <p>${popularcake.order}</p>
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

popularCakesContainer();
