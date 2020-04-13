import React, { FC, useState } from 'react'
import Axios from './Axios';

interface Props {}

export const SearchType: FC<Props> = () => {
  const [query, setQuery] = useState("");

  // destructure component state
  const { books, hasMore, loading } = Axios(query);
  return (
    <div className="bg-gray-500">
    Test
    </div>
  )
}

export default SearchType
