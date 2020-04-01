import React from 'react'
import { Clock } from '../../components/clock'
import { Hook } from '../../components/hook'
import { TextField } from '../../components/TextField'
import { Counter } from '../../components/counter'
import Input from '../../components/input'
import { Functional } from '../../components/functional'

const Home = () => {
  return (
    <div>
      {/* functional component */}
      <Functional title="Welcome!" paragraph="To this example" />

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

    </div>
  )
}

export default Home
