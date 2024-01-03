import { useState } from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom';

const App = () => {
  

  return (
    <>
    <Routes>
      <Route path= '/movies' element= {AllMovies} />
      <Route path= '/id' element= {<MovieId} />

    </Routes>

    </>
  )
}

export default App
