
import { useState } from 'react'
import Intro from '/src/components/Intro/Intro.jsx'
import Navigation from '/src/components/Navigation/Navigation.jsx'
import global from '/src/components/App/App.module.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Navigation /> */}
      <Intro />
    </>
  )
}

export default App
