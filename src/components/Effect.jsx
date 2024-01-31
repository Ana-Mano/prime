// import {useEffect} from 'react'
import React, {useEffect, useState} from 'react'

const Effect = () => {
    const [count, setCount] = useState(9)
    useEffect(() => {
        setTimeout(() => {
            setCount(count + 1)
        }, 1000)
    }, [])
  return (
    <div>
       <h1>The current count is {count}</h1>
    </div>
  )
}

export default Effect




//The [] line 10 is a dependency that makes it fetch info only once , from 0 to 1 and stop. instead of 0,1,2,3 etc.