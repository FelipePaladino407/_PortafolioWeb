function leapYears(year){
    if (year % 4 == 0){
        return true;
    }
    else{
        if (year % 100 && year % 400 == 0){
            return true;
        }
    }
    return false;
}

console.log(leapYears(2021));