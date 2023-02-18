export default class Ball {
  constructor(x, y, color, radius, angle, speed, image_id) {
    this.color = color;
    this.radius = radius;
    this.speed = speed;
    this.angle = angle;
    this.image_id = image_id;
    this.x = x;
    this.y = y;
    this.directionX = Math.cos(angle) * speed;
    this.directionY = Math.sin(angle) * speed;
    this.toRight = Math.random() < 0.5;
    this.toBottom = false;
    this.iteration = 0;
  }
}
