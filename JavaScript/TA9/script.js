function getOdds(enteros){
    const odds = enteros.filter(entero => entero % 2 !== 0);
    console.log(odds);
    return odds;

}

console.log("**ONLY ODD NUMBERS**")
getOdds([3, 4, 9, 0, 1, 4, 4, 12, 1]);