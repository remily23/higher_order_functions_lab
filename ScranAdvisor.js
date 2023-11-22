const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

// Count number of restaurants
ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length;
}

// Find a restaurant by its name

// Return an array containing each restaurant's name






module.exports = ScranAdvisor;