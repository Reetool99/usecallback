import React from 'react'

function Button({ handleclick, buttontext }) {
     console.log(buttontext)
     return (
          <button onClick={handleclick}>
               {buttontext}
          </button>
     )
}

export default React.memo(Button)