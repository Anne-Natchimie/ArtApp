import './App.css'
import { Routes, Route } from 'react-router-dom'
import Liste from './common/Liste'
import Detail from './common/Detail'

function App() {

  return (
    <>
      <Routes>
          <Route path='/' element={<Liste/>} />
          <Route path='/detail/:id' element={<Detail/>} />
      </Routes>
    </>
  )
}

export default App
