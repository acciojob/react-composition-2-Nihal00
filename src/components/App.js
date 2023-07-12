import React, { useState } from "react";  


const App = () => {

  const [onClose, setOnClose] = useState(false);

  return (
      <div>
        <button onClick={() => setOnClose(true)}>Show Modal</button>

        <div className="model-overlay">
          <button className="model-close" onClick={() => setOnClose(false)}>Close</button>
          <p className="modal">This is the content of the modal</p>
        </div>

      </div>
    
  )
}