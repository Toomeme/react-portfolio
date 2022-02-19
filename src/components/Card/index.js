import React from "react";
import { animated, to as interpolate } from "@react-spring/web";

const Card = ({ i, x, y, rot, scale, trans, bind, data }) => {

  return (
    <animated.div
    className="deck"
      key={i}
      style={{
        transform: interpolate([x, y], (x, y) => `translate3d(${x}px,${y}px,0)`)
      }}
    >
      <animated.div
        {...bind(i)}
        style={{
          transform: interpolate([rot, scale], trans)
        }}
      >
        <div className="card">

        </div>
      </animated.div>
    </animated.div>
  );
};

export default Card;