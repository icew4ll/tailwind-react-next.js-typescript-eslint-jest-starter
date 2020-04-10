import React, { FC } from 'react'

interface Props {}

export const Img: FC<Props> = () => {
  return (
    <div className="bg-gray-500">
      <img src="/test.png" alt="my image" />
    </div>
  )
}

export default Img
