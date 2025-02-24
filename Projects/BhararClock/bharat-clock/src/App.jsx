import { useState } from 'react'
import './App.css'
import ClockHeading from './components/ClockHeading'
import Info from './components/Info'
import DateTime from './components/DateTime'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='clock-heading'>
      <ClockHeading/>
    </div>
      <div className='info-container'>
      <Info/>
      <DateTime/>
      </div>
    </>
  )
}

export default App
