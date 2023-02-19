import Ball from "../classes/Ball";

export const ballHelper = {
  getAngle() {
    let angle;
    do {
      angle = Math.floor(Math.random() * 360);
    } while (Math.cos(angle) <= 0.5 || Math.sin(angle) <= 0.5);

    return angle;
  },
  generateBalls(ballsStartX, ballsStartY) {
    return [
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(191, 219, 254, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "react_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(254, 205, 211, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "laravel_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(147, 197, 253, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "docker_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(253, 230, 138, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "aws_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(199, 210, 254, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "php_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(165, 243, 252, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "tailwind_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(252, 165, 165, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "jest_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(251, 146, 60, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "html5_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(147, 197, 253, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "css3_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(251, 191, 36, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "git_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(187, 247, 208, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "vue_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(134 239 172, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "node_logo"
      ),
      new Ball(
        ballsStartX,
        ballsStartY,
        "rgba(254, 202, 202, 0.5)",
        60,
        ballHelper.getAngle(),
        Math.floor(Math.random() * 10) + 1,
        "npm_logo"
      ),
    ];
  },
};
