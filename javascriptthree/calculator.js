// A Class is basically a blueprint for creating objects.

console.log("Class in JavaScript!")
class Calculator {
    //Constructor is a special function that runs automatically when you create an obj
    constructor() {
        this.result = 0;
    }

    add(num) {
        this.result += num;
    }
    subtract(num) {
        this.result -= num;
    }
    multiply(num) {
        this.result *= num;
    }
    divide(num) {
        if (num == 0) throw new Error("Cannot divide by zero")
        this.result /= num;
    }
    clear() {
        this.result = 0;
    }
    getResult() {
        return this.result;
    }
    calculate(expression) {
        expression = expression.replace(/\s+/g, "");

        if (!/^[0-9+\-*/().]+$/.test(expression)) {
            throw new Error("Invalid expression");
        }

        const result = eval(expression);
        this.result = result;
        return result;
    }
}

let calc = new Calculator()
calc.add(10)
calc.subtract(5)
calc.multiply(5)
calc.divide(4)
console.log(calc.getResult())

let result = calc.calculate("10 + 2 * (6 - 4)");
console.log(result)
console.log(calc.getResult())
calc.clear()
console.log(calc.getResult())