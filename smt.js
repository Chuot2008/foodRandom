function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
}

function displayFoodImg(ranNum) {
    if (ranNum == 1) {
        document.getElementById("foodImg").src = "asset/foodImg/Jollibee.jpg"
    } else if (ranNum == 2) {
        document.getElementById("foodImg").src = "asset/foodImg/Mimoza.jpg"
    } else if (ranNum == 3) {
        document.getElementById("foodImg").src = "asset/foodImg/Rice.jpg"
    } else if (ranNum == 4) {
        document.getElementById("foodImg").src = "asset/foodImg/GrilledChicken.jpg"
    } else if (ranNum == 5) {
        document.getElementById("foodImg").src = "asset/foodImg/Pho.jpg"
    } else if (ranNum == 6) {
        document.getElementById("foodImg").src = "asset/foodImg/BunCa.jpg"
    } else if (ranNum == 7) {
        document.getElementById("foodImg").src = "asset/foodImg/bunDauMamTom.jpg"
    } else if (ranNum == 8) {
        document.getElementById("foodImg").src = "asset/foodImg/PizzaHut.jpg"
    }
}

function submitBtn() {
    var randomFood = document.getElementById("randomFood");
    var foodArray = document.getElementsByClassName("foods");
    var ranNum = getRndInteger(0, foodArray.length)
    var foodReturn = foodArray[ranNum].textContent;

    displayFoodImg(ranNum+1);
    randomFood.textContent = foodReturn;
}