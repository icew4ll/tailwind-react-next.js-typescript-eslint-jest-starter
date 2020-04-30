import React, { FC } from 'react'
import Latex from 'react-latex'

interface Props {}

export const Pyth: FC<Props> = () => {
  return (
    <div>
      <h3 className="text-gray-500">Pythagorean theorum:</h3>
      <Latex>$a^2 + b^2 = c^2$</Latex>

      <div className="flex flex-wrap">
        <svg height="100%" width="100%" viewBox="0 0 200 202" className="w-48 p-2 bg-gray-900">
          <defs>
            <linearGradient id="myGradient" gradientTransform="rotate(90)">
              <stop offset="5%" stopColor="#3785de" />
              <stop offset="95%" stopColor="#27558a" />
            </linearGradient>
          </defs>
          {/*min-x, min-y, width and height*/}
          <circle cx={100} cy={102} r={100} fill="url(#myGradient)" />
          <text fill="white" x="80" y="50" className="text-xl">
            a
          </text>
          <text fill="white" x="140" y="20" className="text-xl">
            b
          </text>
          <text fill="white" x="150" y="70" className="text-xl">
            c
          </text>
          {/* (x2, y2), (x1, y1) */}
          <path strokeWidth="2" stroke="red" d="M 200 2 L 100 2" />
          <path strokeWidth="2" stroke="red" d="M 100 2 L 100 102" />
          <path strokeWidth="2" stroke="red" d="M 200 2 L 100 102" />
        </svg>
        <div className="w-1/2 p-2">
          <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
        </div>
      </div>

      <div className="flex flex-wrap bg-gray-200">
        <div className="w-1/5 p-2">
          <div className="text-gray-700 text-center bg-gray-400 p-2">1</div>
        </div>
        <div className="w-2/5 p-2">
          <div className="text-gray-700 text-center bg-gray-400 p-2">2</div>
        </div>
        <div className="w-2/5 p-2">
          <div className="text-gray-700 text-center bg-gray-400 p-2">3</div>
        </div>
      </div>
    </div>
  )
}

export default Pyth
