export const ballHelper = {
  getAngle() {
    let angle;
    do {
      angle = Math.floor(Math.random() * 360);
    } while (Math.cos(angle) <= 0.5 || Math.sin(angle) <= 0.5);

    return angle;
  },
};
