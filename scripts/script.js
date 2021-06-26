var shop = document.querySelector(".shop");
var btn = document.querySelector(".checkout")

shop.addEventListener("click", function () {
    btn.classList.toggle("checkout--active");
});