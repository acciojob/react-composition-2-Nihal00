import React, { useState } from "react";

import Modal from "./Modal"

const App = () => {

  const [onClose, setOnClose] = useState("");
  
  return (
    <div>
        {/* Do not remove the main div */}
        <div className="model-overlay">
          <button onClick={() => setOnClose(true)}>Show Modal</button>
        </div>

        <Modal 
          onClose = {onClose} 
          setOnClose={setOnClose} 
        />
    </div>
  )
}

export default App
