console.log("helo")

let colorButton = document.querySelector("#color")
let favePlace = document.querySelector("#place")
let faveRitual = document.querySelector("#ritual")

alertColor = () => {
    alert("Gray")
}

alertPlace = () => {
    alert("Long Island City Piers")
}

alertRitual = () => {
    alert("Eat out")
}

colorButton.addEventListener("click", alertColor)
favePlace.addEventListener("click", alertPlace)
faveRitual.addEventListener("click", alertRitual)