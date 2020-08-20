import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Header from './components/Header'
import CharacterGrid from './components/CharacterGrid'
import SearchBar from './components/SearchBar'


import './App.css'
// NEw app.js
const App = () => {
  // inital value an array so we can organize the objects and map through 
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')

  useEffect(() => {

// can't call async directly on useEffect Hook so need to make an anon function inside the hook that makes the api call
    const getAPIdata = async () => {
      setIsLoading(true)
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      )

      // console.log(result.data)

      setItems(result.data)
      setIsLoading(false)
    }
      //call the anon function inside the hook to fire it
    getAPIdata()
  }, [query])

  return (
    <div className='container'>
      <Header />
      <SearchBar getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  )
}

export default App
