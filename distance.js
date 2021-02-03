function distance(a, b){
    return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2));
}

const fPoint = {
    x: 4,
    y: -2
},
    sPoint = {
    x: 1,
    y: -10
};

console.log(distance(fPoint, sPoint));

