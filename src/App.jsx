import { useState } from 'react'
import { Header, Hero, Works, Flow } from './components'
import ButtonGradient from './assets/svg/ButtonGradient'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Works />
        <Flow />
      </div>

      <ButtonGradient/>
    </>
  )
}

export default App
