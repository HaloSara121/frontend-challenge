import { useRef, useState, ReactNode } from "react";
import { useSpring, animated } from "@react-spring/web";

interface BookCardAnimatedProps {
  children: ReactNode;
}

const calc = (x, y, rect) => [
  -(y - rect.top - rect.height / 2) / 5,
  (x - rect.left - rect.width / 2) / 5,
  1.3
];

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s-.1})`;

export function BookCardAnimated({ children }: BookCardAnimatedProps) {
  const cardRef = useRef(null);
  const [xys, setXys] = useState([0, 0, 1]);
  const config = {
    mass: 2,
    tension: 300,
    friction: 26,
    clamp: false,
    precision: 0.01,
    velocity: 0,
  };
  const props = useSpring({ xys, config });

  return (
    <animated.div
      ref={cardRef}
      style={{ transform: props.xys.to(trans) }}
      onMouseMove={(e) => {
        const rect = cardRef.current.getBoundingClientRect();
        setXys(calc(e.clientX, e.clientY, rect));
      }}
      onMouseLeave={() => setXys([0, 0, 1])}
    >
      {children}
    </animated.div>
  );
}
