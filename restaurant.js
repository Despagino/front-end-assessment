let randomButton = document.querySelector("#randomButtons")
let restaurantContainer = document.querySelector("#listOfRestaurants")

let restaurants = ["https://www.centralpark.com/visitor-info/food-and-drink", "https://www.theinfatuation.com/new-york/guides/restaurants-near-central-park", "https://www.timeout.com/newyork/restaurants/best-restaurants-near-central-park-in-nyc", "https://www.theinfatuation.com/new-york/guides/where-to-pick-up-food-near-central-park"]

let addRestaurant = () => {

    let newRestaurant = document.createElement("a")
    let newRestaurantInfo = document.createElement("li")

    newRestaurant.href = restaurants[Math.floor(Math.random() * restaurants.length)]
    newRestaurantInfo.textContent = "New Restaurant"

    newRestaurant.appendChild(newRestaurantInfo)
    restaurantContainer.appendChild(newRestaurant)

}

randomButton.addEventListener("click", addRestaurant)