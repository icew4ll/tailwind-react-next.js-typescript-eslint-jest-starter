import React, { FC } from 'react'
import Latex from 'react-latex'

interface Props {}

export const Pyth: FC<Props> = () => {
  return (
    <div className="bg-gray-500">
      <h3>
        Pythagorean theorum:
        <br />
        <Latex>$a^2 + b^2 = c^2$</Latex>
      </h3>
    </div>
  )
}

export default Pyth
