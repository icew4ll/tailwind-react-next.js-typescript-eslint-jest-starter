import React, { FC, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

interface Props {}

export const UseState: FC<Props> = () => {
  // 1. useState return array:
  //    a. data (songs)
  //    b. function to change data (setSongs)
  // 2. array of songs is the initial state of data
  // 3. songs will reference the data
  const [songs, setSongs] = useState([
    { title: 't1', id: 1 },
    { title: 't2', id: 2 },
    { title: 't3', id: 3 },
  ])

  const addSong = () => {
    // 1. get the current songs by spreading them into array
    // 2. add "new song" to array
    setSongs([...songs, { title: 'new song', id: uuidv4() }])
  }
  return (
    <div className="bg-gray-500">
      <ul>
        {songs.map((song) => {
          return <li key={song.id}>{song.title}</li>
        })}
      </ul>
      <button onClick={addSong}>Add song</button>
    </div>
  )
}

export default UseState

// links
// https://www.youtube.com/watch?v=R7T5GQLxRD4
