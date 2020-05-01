import React, { FC, useState, ChangeEvent } from 'react'
import { InlineMath } from 'react-katex'
import Svg from './Svg'

interface Props {}

export const Pyth: FC<Props> = () => {
  const [b, setB] = useState<string>('')
  const [height, setHeight] = useState<string>('')
  const [hiddenHeight, setHH] = useState<number>(0)
  const [distanceHorizon, setDH] = useState<number>(0)
  //const radius = 3963
  const radius = 3958.756
  const feet = 5280

  function handleHeight(e: ChangeEvent<HTMLInputElement>) {
    // numbers only input
    const height = e.target.value.replace(/\D/, '')
    setHeight(height)
    setDH(Math.sqrt((radius + parseInt(height) / 5280) ** 2 - radius ** 2))
    //setDH(Math.sqrt((radius + parseInt(height) * 5280) ** 2 - radius ** 2))
  }

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // numbers only input
    const td = e.target.value.replace(/\D/, '')
    const b = parseInt(td) - distanceHorizon
    setB(td)
    setHH((Math.sqrt(b ** 2 + radius ** 2) - radius) * feet)
  }

  return (
    <div>
      <h3 className="text-gray-500">Pythagorean theorum:</h3>

      <div className="flex flex-wrap">
        <Svg />
        {/* comment */}
        <div className="flex-1 px-2 bg-gray-900">
          <ul>
            <li>
              <InlineMath>{'a^{2} + b^{2} = c^{2}'}</InlineMath>
            </li>
            <li>
              <InlineMath>{'a^{2} + b^{2} = (a + h)^{2}'}</InlineMath>
            </li>
            <li>
              <InlineMath>{'b = \\sqrt{(a + h)^{2} - a^{2}}'}</InlineMath>
            </li>
            <li>Height (feet) = {height}</li>
            <li>
              <input className="text-gray-900" value={height} onChange={handleHeight} />
            </li>
            <li>b (miles) = {distanceHorizon}</li>
          </ul>
          <br />
          <ul className="text-md list-none">
            <li>Hidden height</li>
            <li>
              <InlineMath>{'h = \\sqrt{a^{2} + b^{2}} - a'}</InlineMath>
            </li>
            <li>a (miles) = {radius}</li>
            <li>b (miles) = {b}</li>
            <li>
              <input className="text-gray-900" value={b} onChange={handleChange} />
            </li>
            <li>h = {hiddenHeight} hidden height (feet)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pyth
