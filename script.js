//complete this code
// Define the Rectangle class
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    // Getter for width
    getWidth() {
        return this.width;
    }

    // Getter for height
    getHeight() {
        return this.height;
    }

    // Method to calculate area
    getArea() {
        return this.width * this.height;
    }
}

// Define the Square class that extends Rectangle
class Square extends Rectangle {
    constructor(side) {
        // A square has equal width and height, so pass the same value for both
        super(side, side);
    }

    // Method to calculate perimeter of the square
    getPerimeter() {
        return 4 * this.width; // Since width and height are the same for a square
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
