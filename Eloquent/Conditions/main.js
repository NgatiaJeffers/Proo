const selectOption = document.querySelector("select");
const para = document.querySelector("p");

selectOption.addEventListener("change", setWeather);

function setWeather() {
    const choice = selectOption.value; // 🔰 get value from option

    if (choice === "sunny") {
        para.textContent = "It's nice and sunny outside today. Wear shorts! Go to the  beach, or the park, and get an ice cream.";
    }

    if (choice === "rainy") {
        para.textContent = "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for long.";
    }

    if (choice === "snowing") {
        para.textContent = "The snow is coming down - it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
    }

    if (choice === "overcast") {
        para.textContent = "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
    }

    para.textContent = '';
}