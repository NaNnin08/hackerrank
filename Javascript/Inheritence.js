class Rectangle {
    constructor(h, w) {
        this.h = h;
        this.w = w;
    }
}

Rectangle.prototype.area = function() {
    return this.h * this.w;
}

class Sequare extends Rectangle {
    constructor(s) {
        super(s, s);
        this.h = s;
        this.w = s;
    }
}

const rectangle = new Rectangle(4,3);
const sequare = new Sequare(3);

console.log(rectangle.area());
console.log(sequare.area());

