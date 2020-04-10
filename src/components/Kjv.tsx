import React, { FC, useState, ChangeEvent } from 'react'
import elasticlunr from 'elasticlunr'
//import fs from 'fs'
//import data from '../../public/test.json'

interface Props {}

export const Kjv: FC<Props> = () => {
  const [name, setValue] = useState<string>('')

  const data = require('../../public/test.json')

  console.log(data)

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return (
    <div className="bg-gray-500">
      <input value={name} onChange={handleChange} />
      <p>{name}</p>
      <p>{data['0']['0']}</p>
    </div>
  )
}

export default Kjv
