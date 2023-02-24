import React, { useCallback, useState } from 'react'
import Button from './Button'
import Count from './Count'
import Title from './Title'

function ParentComponent() {
     const [age, setAge] = useState(25);
     const [salary, setSalary] = useState(10000);
     const Incrementage = useCallback(() => {
          setAge(age + 1);
     }, [age])

     const Incrementsalary = useCallback(() => {
          setSalary(salary + 500);
     }, [salary])

     return (
          <div>
               <Title />
               <Count text="Age" count={age} />
               <Button handleclick={Incrementage} buttontext="increment age" />
               <Count text="Salary" count={salary} />
               <Button handleclick={Incrementsalary} buttontext="increment salary" />
          </div>
     )
}

export default ParentComponent