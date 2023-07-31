
import './App.css'

import {accordionMelumatlari} from './utils/content.js'
import Accordion from './Accordion'



function App() {

  return (
    <>
     <div className="accordion">
        {accordionMelumatlari.map(birAkkordion => (
          <Accordion basliqProps={birAkkordion.basliq} metnProps={birAkkordion.metn} />
        ))}
      </div>
    </>
  )
}

export default App
