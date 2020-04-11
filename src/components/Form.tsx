import React, { FC, useState } from 'react'
//import React, { FC, useState, ChangeEvent } from 'react'

interface Props {}

export const Form: FC<Props> = () => {
  const [songs, setSongs] = useState([
    { title: 't1', id: 1 },
    { title: 't2', id: 2 },
    { title: 't3', id: 3 },
  ])
  const addSong = () => {
    setSongs([...songs, { title: 'new song', id: uuid() }])
  }
  return (
    <div className="bg-gray-500">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>
      <form>
        <label>Song name</label>
        <input type="text" required />
        <input type="submit" value="add song" />
      </form>
    </div>
  )
}

export default Form
