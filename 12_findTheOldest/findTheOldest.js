const findTheOldest = function(people) {
    const sorted =  people.sort((a, b) => {
        let ageA = 0;
        if (a.yearOfDeath)
            ageA = a.yearOfDeath - a.yearOfBirth;
        else
            ageA = new Date().getFullYear() - a.yearOfBirth;

        let ageB = 0;
        if (b.yearOfDeath)
            ageB = b.yearOfDeath - b.yearOfBirth;
        else
            ageB = new Date().getFullYear() - b.yearOfBirth;
        
        return ageB - ageA;
    });
    return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;
