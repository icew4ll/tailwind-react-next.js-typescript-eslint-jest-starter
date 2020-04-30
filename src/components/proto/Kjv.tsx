import React, { FC, useState, ChangeEvent } from 'react'
import elasticlunr from 'elasticlunr'
//import fs from 'fs'
//import data from '../../public/test.json'

interface Props {}

export const Kjv: FC<Props> = () => {
  const [name, setValue] = useState<string>('')

  //const t3 = [
  //{ title: 't1', id: 1 },
  //{ title: 't2', id: 2 },
  //{ title: 't3', id: 3 },
  //]

  // import kjv json
  //let data = require('../../public/test.json')
  const getFirstUserData = async () => {
    const response = await fetch('../../public/t2.json') // get users list
    const users = await response.json() // parse JSON
    //const users = await JSON.parse('response') // parse JSON
    const user = users[0] // pick first user
    //const userResponse = await fetch(`/users/${user.name}`) // get user data
    //const userData = await userResponse.json() // parse JSON
    //return userData
    return user
  }

  console.log(getFirstUserData())

  // lunr
  //let index = elasticlunr(function (this: any) {
  //this.addField('book')
  //this.addField('chapter')
  //this.addField('verse')
  //this.addField('body')
  //this.setRef('id')
  //})

  //let arr: any = []
  //data.forEach((item: any) => {
  //arr.push(item)
  //index.addDoc(item)
  //})

  //let results = index.search('beginning', {})
  //console.log(index.documentStore.docs['1'])

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    //console.log(e.target.value)
    setValue(e.target.value)
  }

  return (
    <div className="bg-gray-500">
      <input value={name} onChange={handleChange} />
      <p>{name}</p>
      {/*
      <ul>
        {data.map((verse: any) => {
          return <li key={verse.id}>{verse.body}</li>
        })}
      </ul>
      */}
    </div>
  )
}

export default Kjv
