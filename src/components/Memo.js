import React, { useMemo, useState } from 'react'

function Memo() {
     const [counterone, setCounterone] = useState(0)
     const [countertwo, setCountertwo] = useState(0)

     const countone = () => {
          setCounterone(counterone + 1)
     }
     const counttwo = () => {
          setCountertwo(countertwo + 1)
     }
     const isEven = useMemo(() => {
          let i = 0
          while (i < 20000000) i++
          return counterone % 2 === 0
     }, [counterone])

     return (
          <div>
               <div>
                    <button onClick={countone}>counter one - {counterone}</button>
                    <span>{isEven ? 'even' : 'odd'}</span>
               </div>
               <div>
                    <button onClick={counttwo}>counter two - {countertwo}</button>
               </div>
          </div>
     )
}

export default Memo