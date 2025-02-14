import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [jokes, setJokes] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then(res => {
        setJokes(res.data)
        // console.log(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  })

  return (
    <>
      <h1>Chai and full stack</h1>
      <p>JOKES: {jokes.length}</p>

      {
        jokes.map((joke, index) => (
          <div key={joke.id}>
            <p>{joke.joke}</p>
          </div>
        ))
      }
    </>
  )
}

export default App
