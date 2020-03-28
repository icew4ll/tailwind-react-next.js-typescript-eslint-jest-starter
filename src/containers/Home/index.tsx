import React from 'react'
import { Card } from '../../components/card'
import { Clock } from '../../components/clock'

const Home = () => {
  return (
    <div>
      {/* functional component */}
      <Card title="Welcome!" paragraph="To this example" />
      {/* clock component */}
      <Clock />
    </div>
  )
}

export default Home
