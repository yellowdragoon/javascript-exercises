const findTheOldest = function(people) {
    return people.reduce((acc, person) => {
        if(acc === null) return person;
        let accDeath;
        if(!acc.yearOfDeath) accDeath =  new Date().getFullYear();
        else{
            accDeath = acc.yearOfDeath;
        }
        let perDeath;
        if(!person.yearOfDeath) perDeath =  new Date().getFullYear();
        else{
            perDeath = person.yearOfDeath;
        }
        return accDeath - acc.yearOfBirth > perDeath - person.yearOfBirth ? acc : person;
    }, null);
};

// Do not edit below this line
module.exports = findTheOldest;
