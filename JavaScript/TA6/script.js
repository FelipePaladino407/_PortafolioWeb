function Farenhait_Celcuis(temperature) {
    return (temperature - 32) * 5/9;
}

function Celcuis_Farenhait(temperature) {
    return (temperature * 9/5) + 32;
}

console.log(Farenhait_Celcuis(40))
console.log(Celcuis_Farenhait(4))