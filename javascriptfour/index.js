class Rectangle {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;

    }

    area() {
        const area = this.width * this.height;
        return area;
    }

    paint() {

        console.log(`Painting with color ${this.color}`)
    }
}

const rect = new Rectangle(2, 6,"red")
const area = rect.area();
const paint =rect.paint()
console.log(area)
console.log(paint)

const d=new Date()
console.log(d.getDate())
console.log(d.getMonth())
console.log(d.getFullYear())
