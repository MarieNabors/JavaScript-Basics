let restaurant = {
    name: 'Seasons 52',
    guestCapacity: 75,
    guestCount: 30,
    //method (below) are object property whose value is a function
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft

    },
//seatParty : create a method to add guests to guestCount

    seatParty: function(partySize){
        this.guestCount = this.guestCount + partySize
        
    },
    //removeParty: create a method to remove guests from guestCount
    removeParty: function(partySize){
        this.guestCount = this.guestCount - partySize
    },
}

restaurant.seatParty(14)
console.log(restaurant.checkAvailability(4))
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4))