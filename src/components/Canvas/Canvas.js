import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { ballHelper } from "../../helpers/ballHelper";

const drawBalls = (balls, context) => {
  context.clearRect(0, 0, context.canvas.width, context.canvas.height);

  balls.forEach((ball) => {
    context.fillStyle = ball.color;
    context.beginPath();
    context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI);
    context.closePath();
    context.fill();

    const image = document.getElementById(ball.image_id);

    context.drawImage(
      image,
      ball.x - 30,
      ball.y - (60 * image.height) / image.width / 2,
      60,
      (60 * image.height) / image.width
    );

    const rightTouch = ball.x >= context.canvas.width - ball.radius;
    const bottomTouch = ball.y >= context.canvas.height - ball.radius;
    const leftTouch = ball.x <= ball.radius;
    const topTouch = ball.y <= ball.radius;

    function doBounceIfNeeded() {
      if (rightTouch) {
        ball.toRight = false;
      }

      if (leftTouch) {
        ball.toRight = true;
      }

      if (bottomTouch) {
        ball.toBottom = false;
      }

      if (topTouch) {
        ball.toBottom = true;
      }
    }

    if (ball.toRight && ball.toBottom) {
      ball.x += ball.directionX;
      ball.y += ball.directionY;

      if (rightTouch || bottomTouch) {
        doBounceIfNeeded();
      }
    } else if (!ball.toRight && ball.toBottom) {
      ball.x -= ball.directionX;
      ball.y += ball.directionY;

      if (leftTouch || bottomTouch) {
        doBounceIfNeeded();
      }
    } else if (!ball.toRight && !ball.toBottom) {
      ball.x -= ball.directionX;
      ball.y -= ball.directionY;

      if (leftTouch || topTouch) {
        doBounceIfNeeded();
      }
    } else if (ball.toRight && !ball.toBottom) {
      ball.x += ball.directionX;
      ball.y -= ball.directionY;
      if (rightTouch || topTouch) {
        doBounceIfNeeded();
      }
    }
  });
};

const Canvas = ({ ballsStartX, ballsStartY }) => {
  const canvasRef = useRef(null);

  const balls = ballHelper.generateBalls(ballsStartX, ballsStartY);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId;

    const render = () => {
      drawBalls(balls, context);
      animationFrameId = window.requestAnimationFrame(render);
    };
    render();

    return () => {
      window.cancelAnimationFrame(animationFrameId);
    };
  }, [drawBalls]);

  return (
    <>
      <canvas
        id="canvas"
        ref={canvasRef}
        className="-z-20 w-screen h-screen fixed left-0 top-0"
      />
      <img
        className="hidden"
        id="laravel_logo"
        src="skills/laravel.svg"
        alt="Laravel"
      />
      <img
        className="hidden"
        id="docker_logo"
        src="skills/docker.svg"
        alt="Docker"
      />
      <img className="hidden" id="aws_logo" src="skills/aws.svg" alt="AWS" />
      <img className="hidden" id="php_logo" src="skills/php.svg" alt="PHP" />
      <img
        className="hidden"
        id="react_logo"
        src="skills/react.svg"
        alt="React"
      />
      <img
        className="hidden"
        id="tailwind_logo"
        src="skills/tailwind.svg"
        alt="Tailwind"
      />
      <img className="hidden" id="jest_logo" src="skills/jest.svg" alt="Jest" />
      <img
        className="hidden"
        id="html5_logo"
        src="skills/html5.svg"
        alt="HTML"
      />
      <img className="hidden" id="css3_logo" src="skills/css3.svg" alt="CSS" />
      <img className="hidden" id="git_logo" src="skills/git.svg" alt="Git" />
      <img className="hidden" id="vue_logo" src="skills/vue.svg" alt="Vue" />
      <img className="hidden" id="node_logo" src="skills/node.svg" alt="Node" />
      <img className="hidden" id="npm_logo" src="skills/npm.svg" alt="NPM" />
    </>
  );
};

Canvas.propTypes = {
  ballsStartX: PropTypes.number,
  ballsStartY: PropTypes.number,
};

export default Canvas;
