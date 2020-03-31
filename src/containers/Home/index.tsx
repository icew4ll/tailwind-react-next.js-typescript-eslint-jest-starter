import React from 'react'
import { Card } from '../../components/card'
import { Clock } from '../../components/clock'
import { Hook } from '../../components/hook'
import { TextField } from '../../components/TextField'
import { Counter } from '../../components/counter'
import Input from '../../components/input'

const Home = () => {
  return (
    <div>
      {/* functional component */}
      <Card title="Welcome!" paragraph="To this example" />
      <TextField
        text="hi"
        handleChange={(e) => {
          console.warn(e)
        }}
      />
      <Counter>
        {(count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
          </div>
        )}
      </Counter>
      <Input />
      <Input />
      <Input />
      {/* clock component */}
    </div>
  )
}

export default Home
