const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype
ScranAdvisor.prototype.numberOfRestaurants = function(){
    return this.restaurants.length;
}

ScranAdvisor.prototype.findRestaurantByName = function(name){
    return this.restaurants.find((restaurant) => restaurant.name === name)
}


ScranAdvisor.prototype.findRestaurantNames = function(){
    return this.restaurants.map((restaurant) => restaurant.name)
}

ScranAdvisor.prototype.findRestaurantsFromTown = function(town){
    return this.restaurants.filter(restaurant => restaurant.location.town === town)
}

ScranAdvisor.prototype.mostCommonCuisine = function(){
    // 1: create an object for counting occurances
    const cuisineCounter = {};
    // 2: loop through each restaurant, and for each restaurant,
    // each cuisine. If that cuisine does exist in the cuisineCounter
    // increment its value by one. If it doesn't exist, add it
    // with a value of 1.
    this.restaurants.forEach((restaurant) => {
        restaurant.cuisines.forEach((cuisine) => {
            if(cuisineCounter[cuisine]){
                cuisineCounter[cuisine] += 1;
            } else {
                cuisineCounter[cuisine] = 1;
            }
        })
    })
    // 3: Find the highest value in the cuisineCounter
    const highestOccurance = Math.max.apply(Math, Object.values(cuisineCounter))
    // 4: Find the highest key for the highestOccurance
    for(cuisine in cuisineCounter){
        if(cuisineCounter[cuisine] === highestOccurance){
            return cuisine;
        }
    }

    // Alternatively, instead of steps 3 and 4:
    // Use a reduce on the cuisineCounter
    // return Object.keys(cuisineCounter).reduce((a, b) => cuisineCounter[a] > cuisineCounter[b] ? a : b)
}

ScranAdvisor.prototype.findByNameSubstring = function(subString){
    // Strings can be treated as an array of characters
    // the includes() method checks if the substring can be found in another string
    // we call toLowerCase() on the name to avoid casing issues
    return this.restaurants.filter((restaurant) => {
        return restaurant.name.toLowerCase().includes(subString);
    })
}

module.exports = ScranAdvisor;