const contenCard = document.getElementById("contenCard");
const buttonNext = document.getElementById("buttonNext");
const buttonPrevious = document.getElementById("buttonPrevious");



const bebidas = [
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://acdn-us.mitiendanube.com/stores/002/103/313/products/182-bd5869f0f5129fc74c17444724214305-1024-1024.webp"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://acdn-us.mitiendanube.com/stores/002/103/313/products/182-bd5869f0f5129fc74c17444724214305-1024-1024.webp"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://acdn-us.mitiendanube.com/stores/002/103/313/products/182-bd5869f0f5129fc74c17444724214305-1024-1024.webp"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://acdn-us.mitiendanube.com/stores/002/103/313/products/182-bd5869f0f5129fc74c17444724214305-1024-1024.webp"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://acdn-us.mitiendanube.com/stores/002/103/313/products/182-bd5869f0f5129fc74c17444724214305-1024-1024.webp"
    },
    {
        titulo: "Fernet 1882 Original",
        quantityMl: "720ml",
        quantityAlcohol: "40%",
        image: "https://acdn-us.mitiendanube.com/stores/002/103/313/products/182-bd5869f0f5129fc74c17444724214305-1024-1024.webp"
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
    contenCard.scrollBy({ left: 500, behavior: "smooth" });
});

buttonPrevious.addEventListener("click", () => {
    contenCard.scrollBy({ left: -900, behavior: "smooth" });
});




contenCard.addEventListener("scroll", () => {
    if (contenCard.scrollLeft > 10) {
        buttonPrevious.classList.add("visible");
    } else {
        buttonPrevious.classList.remove("visible"); 
    }
});