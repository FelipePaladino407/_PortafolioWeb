const people= [
    {
        name: "Carly",
        yearOfBirth: 1942,
        yearOfDeath: 1970,
    },
    {
        name: "Ray",
        yearOfBirth: 1962,
        yearOfDeath: 2011,
    },
    {
        name: "Jane",
        yearOfBirth: 1912,
        yearOfDeath: 1941,
    },
    {
        name: "Walter",
        yearOfBirth: 1995,
        yearOfDeath: 2074,
    }
]

function getTheOldest(people) {
    let maxAge = -Infinity;
    let oldestName = null;

    for (const person of people) {
        const died = person.yearOfDeath ?? new Date().getFullYear();
        const age = died - person.yearOfBirth;

        if (age > maxAge) {
            maxAge = age;
            oldestName = person.name;
        }
    }
    return oldestName;
}

console.log(getTheOldest(people)); //
