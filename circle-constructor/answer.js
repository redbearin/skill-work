class Circle { 
  constructor(radius) {
    this.radius = radius;
    this.diameter = radius * 2;
  }
  getCircum() {
    return (Math.PI * this.diameter).toFixed(2);
  }
  getArea() {
    return (Math.PI * Math.pow(this.radius, 2)).toFixed(2);
  }
}

const r0 = 1;
const r1 = 3;
const r2 = 5;

const c0 = new Circle(r0);
const c1 = new Circle(r1);
const c2 = new Circle(r2);

document.getElementById('ans0r').textContent = c0.radius;
document.getElementById('ans0d').textContent = c0.diameter;
document.getElementById('ans0c').textContent = c0.getCircum();
document.getElementById('ans0a').textContent = c0.getArea();

document.getElementById('ans1r').textContent = c1.radius;
document.getElementById('ans1d').textContent = c1.diameter;
document.getElementById('ans1c').textContent = c1.getCircum();
document.getElementById('ans1a').textContent = c1.getArea();

document.getElementById('ans2r').textContent = c2.radius;
document.getElementById('ans2d').textContent = c2.diameter;
document.getElementById('ans2c').textContent = c2.getCircum();
document.getElementById('ans2a').textContent = c2.getArea();