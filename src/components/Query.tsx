import React, { FC, useState } from 'react'
import { useQuery } from 'react-query'

interface Props {}

export default function Query() {
  return (
    <div>
      <Exchange />
      <span>🌨️</span>
    </div>
  )
}

const fetchExchange = async (currency: any) => {
  const url = `https://api.ratesapi.io/api/latest?base=${currency}`
  const response = await fetch(url)
  const data = await response.json()
  return data
}

function Exchange() {
  const [currency, setCurrency] = useState('CAD')
  const { status, data, error } = useQuery(currency, fetchExchange)

  if (status === 'loading') return <div>loading...</div>
  if (status === 'error') return <div>error!</div>

  return (
    <div>
      <button onClick={() => setCurrency('CAD')}>CAD</button>
      <button onClick={() => setCurrency('USD')}>USD</button>
      <button onClick={() => setCurrency('EUR')}>EUR</button>
      <h1>Showing Currency {currency}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  )
}
