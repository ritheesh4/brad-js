function processPassengers(passengers, testFunction) {
    for (var i = 0; i < passengers.length; i++) {
    if (testFunction(passengers[i])) {
    return false;
    }
    }
    return true;
    }