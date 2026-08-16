const menuButton = document.getElementById("menuButton");

const navigation = document.querySelector(".navigation");


menuButton.addEventListener("click", function () {

    navigation.classList.toggle("show-menu");

});