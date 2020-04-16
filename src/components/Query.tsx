import ReactQueryDevTools from 'react-query-devtools'
import React, { FC, useState } from 'react'
//import { useQuery } from 'react-query'

interface Props {}

export default function Query() {
  return (
    <div>
      <Exchange />
      <ReactQueryDevTools />
      <span>🌨️</span>
    </div>
  )
}

function Exchange() {
  return <div>exchange</div>
}
