import React, { FC, useState, ChangeEvent } from 'react'

interface Props {}

export const Input: FC<Props> = () => {
  // changes to name via setValue cause component to render
  const [name, setValue] = useState<string>('')

  console.log(name)
  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value)
  }

  return (
    <div className="bg-gray-500">
      <input value={name} onChange={handleChange} />
      <p>{name}</p>
    </div>
  )
}

export default Input
