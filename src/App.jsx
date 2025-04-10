import Navbar from "./components/navbar/Navbar"
import Home from './pages/home/Home'
import Capability from './pages/capabilities/Capability'
import Model from './pages/operating-model/Model'
import Talent from './pages/talent/Talent'
import Next from './pages/next/Next'
import OffCanvas from './pages/offCanva/Canva'

function App() {

  return (
   <>
   <Navbar />
   <Home />
   <Capability />
   <Model />
   <Talent />
   <Next />
   <OffCanvas/>

    </>
  )
}

export default App
