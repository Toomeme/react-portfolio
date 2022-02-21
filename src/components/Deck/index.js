import React, { useState } from 'react'
import { useSprings} from '@react-spring/web'
import { useDrag } from 'react-use-gesture'
import Image1 from '../../assets/cover/css3.svg';
import Image2 from '../../assets/cover/js.svg';
import Image3 from '../../assets/cover/mongodb.svg';
import Image4 from '../../assets/cover/nodejs.svg';
import Image5 from '../../assets/cover/react.svg';
import Image6 from '../../assets/cover/sql.svg';
import Card from "./../Card";

const data =  [
  {
  pics: [Image1],
  name: 'CSS',
  },
  {
  pics: [Image2],
  name: 'JS',
  },
  {
  pics: [Image3],
  name: 'Mongo',
  },
  {
  pics: [Image4],
  name: 'NodeJS',
  },
  {
  pics: [Image5],
  name: 'React',
  },
  {
  pics: [Image6],
  name: 'SQL',
  }
]

// These two are just helpers, they curate spring data, values that are later being interpolated into css
const to = (i) => ({
  x: 0,
  y: i * -4,
  scale: 1,
  rot: -10 + Math.random() * 20,
  delay: i * 100,
})
const from = (_i) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 })
// This is being used down there in the view, it interpolates rotation and scale into a css transform
const trans = (r, s) =>
  `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`

function Deck() {
  const [gone] = useState(() => new Set()) // The set flags all the cards that are flicked out
  const [props, api] = useSprings(data.length, i => ({
    ...to(i),
    from: from(i),
  })) // Create a bunch of springs using the helpers above
  // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  const bind = useDrag(({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
    const trigger = velocity > 0.2 // If you flick hard enough it should trigger the card to fly out
    const dir = xDir < 0 ? -1 : 1 // Direction should either point left or right
    if (!down && trigger) gone.add(index) // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
    api.start(i => {
      if (index !== i) return // We're only interested in changing spring-data for the current spring
      const isGone = gone.has(index)
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0 // When a card is gone it flys out left or right, otherwise goes back to zero
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0) // How much the card tilts, flicking it harder makes it rotate faster
      const scale = down ? 1.1 : 1 // Active cards lift up a bit
      return {
        x,
        rot,
        scale,
        delay: undefined,
        config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      }
    })
    if (!down && gone.size === data.length)
      setTimeout(() => {
        gone.clear()
        api.start(i => to(i))
      }, 600)
  })
  return props.map(({ x, y, rot, scale }, i) => (
    <Card
      i={i}
      x={x}
      y={y}
      rot={rot}
      scale={scale}
      trans={trans}
      data={data}
      bind={bind}
      key={i}
    />
  ));
}

export default Deck;
