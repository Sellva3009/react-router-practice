import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Search = () => {
    let [searchParams, setSearchParams] = useSearchParams();

    const handleSearch = (event) => {
        const query = event.target.value;
        setSearchParams({ query });
    }
    
  return (
    <div>
        <h2>Search</h2>
        <input type="text" onChange={handleSearch} />
        <p>Search query: {searchParams.get('query')}</p>
    </div>
  )
}

export default Search