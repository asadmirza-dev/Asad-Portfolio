import React from 'react'
import Portfolio from './Components/Portfolio'
import ShowProjects from './Pages/ShowProjects'
import {Routes,Route} from 'react-router-dom'

const App = () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Portfolio/>}/>
          <Route path='/ShowProjects' element={<ShowProjects/>}/>

        </Routes>
    </div>
  )
}

export default App
