import React, { FC, useState, ChangeEvent } from 'react'
import { InlineMath } from 'react-katex'
import Svg from './Svg';

interface Props {}

export const Pyth: FC<Props> = () => {
  const [b, setB] = useState<string>('')
  const [height, setHeight] = useState<string>('')
  const [hiddenHeight, setHH] = useState<number>(0)
  const [distanceHorizon, setDH] = useState<number>(0)
  const [inputs, setInputs] = useState({})
  //const radius = 3963
  const radius = 3958.756
  const feet = 5280

  const handleHeight = (e: ChangeEvent<HTMLInputElement>) => {
    // numbers only input
    const height = e.target.value.replace(/\D/, '')
    calcDH(height)
  }

  const calcDH = (height: string) => {
    setHeight(height)
    setDH(Math.sqrt((radius + parseInt(height) / 5280) ** 2 - radius ** 2))
    console.log(height, hiddenHeight)
  }

  const handleHidden = (e: ChangeEvent<HTMLInputElement>) => {
    // numbers only input
    const td = e.target.value.replace(/\D/, '')
    const b = parseInt(td) - distanceHorizon
    setB(td)
    calcHH(b)
  }

  const calcHH = (b: any) => {
    setHH((Math.sqrt(b ** 2 + radius ** 2) - radius) * feet)
  }
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.persist()
    setInputs((inputs) => ({ ...inputs, [e.target.name]: e.target.value }))
    console.log(inputs)
  }

  return (
    <div>
      <h3 className="text-gray-500">Pythagorean theorum:</h3>
      <div className="flex flex-wrap">
        <Svg />
        {/* comment */}
        <div className="flex-1 px-2 bg-gray-800">
          <ul>
            <li className="underline">Part 1: Horizon Distance</li>
            <li>
              <InlineMath>{'a^{2} + b^{2} = c^{2}'}</InlineMath>
            </li>
            <li>
              <InlineMath>{'a^{2} + b^{2} = (a + h)^{2}'}</InlineMath>
            </li>
            <li>
              <InlineMath>{'b = \\sqrt{(a + h)^{2} - a^{2}}'}</InlineMath>
            </li>
            <li>Observer Height (feet) = {height}</li>
            <li>
              <input className="text-gray-900" value={height} onChange={handleHeight} />
            </li>
            <li>Distance from Observer to Horizon = {distanceHorizon} miles</li>
          </ul>
          <br />
          <ul className="text-md list-none">
            <li className="underline">Part 2: Hidden Distance</li>
            <li>
              <InlineMath>{'a^{2} + b^{2} = c^{2}'}</InlineMath>
            </li>
            <li>
              <InlineMath>{'a^{2} + b^{2} = (a + h)^{2}'}</InlineMath>
            </li>
            <li>
              <InlineMath>{'h = \\sqrt{a^{2} + b^{2}} - a'}</InlineMath>
            </li>
            <li>Alleged Earth Radius = {radius} miles</li>
            <li>Distance from Observer to Target = {b} miles</li>
            <li>
              <input name="hidden" className="text-gray-900" onChange={handleHidden} />
            </li>
            <li>Hidden Height = {hiddenHeight} feet</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
//https://medium.com/@geeky_writer_/using-react-hooks-to-create-awesome-forms-6f846a4ce57
export default Pyth
