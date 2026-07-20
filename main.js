let myButton = document.querySelector("button");
myButton.addEventListener("click", () => {
let userInput = parseFloat(document.querySelector(".total-bill").value);

    if (isNaN(userInput)) {
        document.querySelector(".output").textContent =
            "Please enter a valid number.";
        return;
    }

    let tip15 = userInput * 0.15;
    let tip20 = userInput * 0.20;

    document.querySelector(".output").innerHTML =
        `Bill: $${userInput.toFixed(2)}<br>
         15% Tip: $${tip15.toFixed(2)}<br>
         20% Tip: $${tip20.toFixed(2)}`;
});