import React from 'react' // we need this to make JSX compile

type Props = {
  title: string
  paragraph: string
}

export const Functional = ({ title, paragraph }: Props) => (
  <aside>
    <h2>{title}</h2>
    <p>{paragraph}</p>
  </aside>
)

export default Functional
