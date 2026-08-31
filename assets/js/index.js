const contenCard = document.getElementById("contenCard");
const buttonNext = document.getElementById("buttonNext");
const buttonPrevious = document.getElementById("buttonPrevious");



const bebidas = [,
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "1 Litro",
        quantityAlcohol: "40%",
        image: "https://http2.mlstatic.com/D_NQ_NP_818973-MLA102771998037_122025-O.webp"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://http2.mlstatic.com/D_NQ_NP_905897-MLA101584698003_122025-O.webp"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOaWJP7e6dK7sjkogBKfMc3JUiDROspLFHXked5uKB0d1XXwfdwdF0MW4Q&s=10"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "assets/images/1882_producto_1.jpg"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "750ml",
        quantityAlcohol: "40%",
        image: "https://acdn-us.mitiendanube.com/stores/002/103/313/products/182-bd5869f0f5129fc74c17444724214305-1024-1024.webp"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://bar-drinks.ar/wp-content/uploads/2026/06/Fermelo-2-1.jpg"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://bar-drinks.ar/wp-content/uploads/2026/06/Fermelo-2-1.jpg"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://bar-drinks.ar/wp-content/uploads/2026/06/Fermelo-2-1.jpg"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://bar-drinks.ar/wp-content/uploads/2026/06/Fermelo-2-1.jpg"
    }
]



contenCard.innerHTML = bebidas.map(trago => `
    <div class="card">
    <div class="card-img">
        <img src="${trago.image}" alt="imagen_del_producto">
    </div>
    <div class="text-card">
        <div class="title-card">
            <p>${trago.titulo}</p>
        </div>
        <div class="data-card">
            <p>${trago.quantityMl}</p>
            <p class="data-card-alcohol">${trago.quantityAlcohol}</p>
        </div>
    </div>
    </div>`).join("");




buttonNext.addEventListener("click", () => {
    contenCard.scrollBy({ left: 800, behavior: "smooth" });
});

buttonPrevious.addEventListener("click", () => {
    contenCard.scrollBy({ left: -800, behavior: "smooth" });
});




contenCard.addEventListener("scroll", () => {
    if (contenCard.scrollLeft > 10) {
        buttonPrevious.classList.add("visible");
    } else {
        buttonPrevious.classList.remove("visible"); 
    }
});