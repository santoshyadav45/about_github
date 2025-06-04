const search_Btn = document.getElementById("search-btn");
const city_input = document.getElementById("city-input");

search_Btn.addEventListener("click", () => {
    const city = city_input.trim();
    if (city === "") {
        return;
    } else { }
})


const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${fbd3c333076e1a0804fb50f8243a44de}&units=metric`;

