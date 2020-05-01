import React, { FC, useState, ChangeEvent } from 'react'
import { InlineMath, BlockMath } from 'react-katex'
import Svg from './Svg'

interface Props {}

export const Pyth: FC<Props> = () => {
  const [b, setValue] = useState<string>('')
  const [b2, set2] = useState<number>(0)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    // numbers only input
    const radius = 3963
    const feet = 5280
    setValue(e.target.value.replace(/\D/, ''))
    set2((Math.sqrt(parseInt(e.target.value.replace(/\D/, '')) ** 2 + radius ** 2) - radius) * feet)
  }

  return (
    <div>
      <h3 className="text-gray-500">Pythagorean theorum:</h3>

      <div className="flex flex-wrap">
        <Svg />
        {/* comment */}
        <div className="flex-1 px-2 bg-gray-900">
          <ul className="text-md list-none">
            <li>
              <InlineMath>{'a^{2} + b^{2} = c^{2}'}</InlineMath>
            </li>
            <li>
              <InlineMath>{'a^{2} + b^{2} = (a + h)^{2}'}</InlineMath>
            </li>
            <li>
              <InlineMath>{'h = \\sqrt{a^{2} + b^{2}} - a'}</InlineMath>
            </li>
            <li>a (miles) = 3963</li>
            <li>b (miles) = {b}</li>
            <li>
              <input className="text-gray-900" value={b} onChange={handleChange} />
            </li>
            <li>h = {b2} hidden height (feet)</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Pyth
