class Polygon {
    constructor(sides) {
        this.sides = sides;
    }

    perimeter() {
        return this.sides.reduce((side, side1) => side +side1); //reduce mengembalikan nilai array berupa int dengan side nilai array paling kiri dan side1 nilai array sisanya
    }
}

let arr = new Polygon([1,2,3,4,5]);

console.log(arr.perimeter());
