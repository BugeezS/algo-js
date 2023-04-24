class circle {
    constructor(xPos,yPos,radius){
        this.xPos = xPos;
        this.yPos = yPos;
        this.radius = radius;
    }
    move(xOffset, yOffset){
        this.xPos += xOffset;
        this.yPos += yOffset;
    }
    get surface() {
        return Math.PI * this.radius ** 2;
      }
}


const myCircle = new circle (0,0,10);

console.log(myCircle.surface);