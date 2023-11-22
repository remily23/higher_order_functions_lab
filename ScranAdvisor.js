const ScranAdvisor = function(restaurants){
    this.restaurants = restaurants;
}

// Add methods to prototype

// Count number of restaurants stored
ScranAdvisor.prototype.countRestaurants = function(){
    return this.restaurants.length;
}

// Find a restaurant by its full name
ScranAdvisor.prototype.findByFullName = function(fullName){
    const byFullName = this.restaurants.filter((restaurant) => {
        return restaurant.name === fullName;
    });
    return byFullName[0];
}

// Return an array containing each restaurant's name
ScranAdvisor.prototype.findAllNames = function(){
    const allRestaurantNames = this.restaurants.map((restaurant) => {
        return restaurant.name;
    });
    return allRestaurantNames;
}

// Find all restaurants from a given city (pass in the city name e.g. Glasgow should return 4 restaurants)
ScranAdvisor.prototype.findByCity = function(cityName){
    const restaurantsByCity = this.restaurants.filter((restaurant) => {
        return restaurant.location.town === cityName;
    });
    return restaurantsByCity;
}


module.exports = ScranAdvisor;