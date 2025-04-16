import { Header, Hero, Works, Flow, Footer } from './components'
import ButtonGradient from './assets/svg/ButtonGradient'

function App() {

  return (
    <>
      <div className='pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden'>
        <Header />
        <Hero />
        <Works />
        <Flow />
        <Footer />
      </div>

      <ButtonGradient/>
    </>
  )
}

export default App
