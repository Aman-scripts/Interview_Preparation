class Shape {
    constructor(color) {
        this.color = color
    }

    paint() {
        console.log(`Painting with color ${this.color}`)
    }
}


class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color)
        this.width = width;
        this.height = height;

    }

    area() {
        const area = this.width * this.height;
        return area;
    }
    perimeter() {
        return 2 * (this.width + this.height)
    }

    static whoami() {
        //Static Methods Called directly on the class not on the objects
        return "i am a rectangle"
    }
}

class Circle extends Shape {
    constructor(radius, color) {
        super(color)
        this.radius = radius;
    }

    area() {
        return 3.14 * this.radius * this.radius
    }

    perimeter() {
        return 2 * 3.14 * this.radius
    }

}

class Square extends Shape {
    constructor(side, color) {
        super(color)
        this.side = side
    }

    area() {
        return this.side * this.side
    }

    perimeter() {
        return 4 * this.side
    }

}



const rect = new Rectangle(2, 6, "red")
const area = rect.area();
const paint = rect.paint()
console.log(area)
console.log(paint)

const d = new Date()
console.log(d.getDate())
console.log(d.getMonth())
console.log(d.getFullYear())
console.log(Rectangle.whoami())