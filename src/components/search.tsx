//export default Search
import React, { Component } from 'react'
import { FaAlignRight } from 'react-icons/fa'

class Search extends Component<any, any> {
  constructor(props: any) {
    super(props)
    this.state = {
      query: '',
      results: {},
      loading: false,
    }
  }

  handleInputChange = (event: any) => {
    const query = event.target.value
    console.warn(query)
  }

  render() {
    return (
      <div className="container">
        {/* Heading */}
        <h2 className="heading">Live Search</h2>
        {/* Search Input */}
        <label className="search-label" htmlFor="search-input">
          <input
            type="text"
            value=""
            id="search-input"
            placeholder="Search..."
            onChange={this.handleInputChange}
          />
          <FaAlignRight />
        </label>
      </div>
    )
  }
}

export default Search
