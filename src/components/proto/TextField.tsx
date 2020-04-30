import React, { useState } from 'react' // we need this to make JSX compile

interface Person {
  firstName: string
  lastName: string
}

// question mark makes fields optional, otherwise they are required
interface Props {
  text: string
  ok?: boolean
  fn?: (test: string) => string
  person?: Person
  // declaring type definitions allows intellisense on event
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

interface TextNode {
  text: string
}

export const TextField: React.FC<Props> = ({ handleChange }) => {
  const [count, setCount] = useState<TextNode>({ text: 'test' })

  return (
    <div>
      <h1>Text</h1>
      <input onChange={handleChange} />
    </div>
  )
}
