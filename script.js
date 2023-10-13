


document.addEventListener("DOMContentLoaded", function () {
    const productsList = document.getElementById("productsList");
   
    const products = [
    { name: "Bike Tire", price: "$20", image: "biketire.jpg" },
    { name: "Car Tire", price: "$80", image: "cartire.jpg" },
    { name: "Truck Tire", price: "$110", image: "trucktire.jpg" },
    { name: "Aeroplane Tire", price: "$899", image: "aeroplanetire.jpg" },
    { name: "F1 Slick Red Tire", price: "$899", image: "slickred.jpg" },
    { name: "F1 Slick Yellow Tire", price: "$899", image: "slickyellow.jpg" },
    { name: "F1 Slick White Tire", price: "$899", image: "slickwhite.jpg" },
    { name: "F1 Intermediate Green Tire", price: "$899", image: "intermediategreen.jpg" },
    { name: "F1  Full Wet Blue Tire", price: "$899", image: "fullwet.jpg" },
    ];
   
    products.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.className = "product";
   
    const imageElement = document.createElement("img");
    imageElement.src = product.image;
    imageElement.alt = product.name;
   
    const nameElement = document.createElement("h3");
    nameElement.textContent = product.name;
   
    const priceElement = document.createElement("p");
    priceElement.textContent = product.price;
   
    productElement.appendChild(imageElement);
    productElement.appendChild(nameElement);
    productElement.appendChild(priceElement);
   
    productsList.appendChild(productElement);
    });
   
    const scrollToProductsLink = document.getElementById("scrollToProducts");
    const featuredProducts = document.getElementById("featuredProducts");
   
    scrollToProductsLink.addEventListener("click", function (event) {
    event.preventDefault();
   
    featuredProducts.scrollIntoView({ behavior: "smooth" });
    });
    });

