import React from 'react'
import { useState } from 'react';
import { Button } from '@chakra-ui/react'

export function SearchBar(event) {
  const [SearchQuery, setSearchQuery] = useState('');

  function handleSearch(e) {
    console.log("Search:", setSearchQuery)
  }
  return (
    <div>
        <input 
        type='text' 
        placeholder='Search stores' 
        value={SearchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        />
        <Button color='green' variant='solid' onClick={handleSearch}>Search </Button>
    </div>
  )
}
