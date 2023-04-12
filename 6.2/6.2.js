class Rectangle {
    constructor(topLeftXPos, topLeftYPos, width, length) {
      this.topLeftXPos = topLeftXPos;
      this.topLeftYPos = topLeftYPos;
      this.width = width;
      this.length = length;
    }
  
    collides(otherRectangle) {
      // Check if the rectangles intersect in the x-axis
      const thisRightX = this.topLeftXPos + this.width;
      const otherRightX = otherRectangle.topLeftXPos + otherRectangle.width;
      if (this.topLeftXPos > otherRightX || thisRightX < otherRectangle.topLeftXPos) {
        return false;
      }
  
      // Check if the rectangles intersect in the y-axis
      const thisBottomY = this.topLeftYPos + this.length;
      const otherBottomY = otherRectangle.topLeftYPos + otherRectangle.length;
      if (this.topLeftYPos > otherBottomY || thisBottomY < otherRectangle.topLeftYPos) {
        return false;
      }
  
      // The rectangles intersect in both axes
      return true;
    }
  }
  

    const rect1 = new Rectangle(0, 0, 10, 10);
const rect2 = new Rectangle(5, 5, 10, 10);
console.log(rect1.collides(rect2)); // true

const rect3 = new Rectangle(20, 20, 5, 5);
console.log(rect1.collides(rect3)); // false

const rect4 = new Rectangle(5, 15, 10, 10);
console.log(rect1.collides(rect4)); // true

const rect5 = new Rectangle(-5, -5, 5, 5);
console.log(rect1.collides(rect5)); // false
