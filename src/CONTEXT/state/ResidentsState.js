import React, { useState } from 'react';
import residentsContext from '../context/residentsContext';


export default function ProductState(props) {
const [residents, setResidents] = useState(null);

  return (
    <>
      <residentsContext.Provider value={{ setResidents, residents }}>
        {props.children}
      </residentsContext.Provider>
    </>
  )
}
