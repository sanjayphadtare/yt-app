import React, { useState } from "react"

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState("")
  // const onInputChange = e => {
  //   this.setState({ term: e.target.value })
  //   setTerm(e.target.value)
  // }
  const onSubmit = e => {
    e.preventDefault()
    onFormSubmit(term)
  }
  return (
    <div className="search-bar ui segment">
      <form className="ui form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="video">Search For a Video</label>
          <input type="text" onChange={e => setTerm(e.target.value)} value={term} />
        </div>
      </form>
    </div>
  )
}

export default SearchBar
