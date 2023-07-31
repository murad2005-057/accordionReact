import React, {useState} from 'react'

const Accordion = ({basliqProps, metnProps}) => {
    const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item">
    <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
      <div>{basliqProps}</div>
      <div>{isActive ? '-' : '+'}</div>
    </div>
    {isActive && <div className="accordion-content">{metnProps}</div>}
  </div>
  )
}

export default Accordion