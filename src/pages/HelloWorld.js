import React, { useState } from 'react'
import { Button } from '~components'

const HelloWorld = () => {
  const [greeting, setGreeting] = useState('Hello World!')
  const [isRemoved, setRemoved] = useState(false)

  const handleClick = () => {
    setGreeting('Hello!')
    setRemoved(true)
  }

  return (
    <div className="bg-gray-800 flex flex-col h-screen items-center justify-center">
      <h1 className="text-white text-3xl mb-3">{greeting}</h1>
      { !isRemoved && 
        <Button onClick={() => handleClick()}>Remove World</Button>
      }
    </div>
  )
}

export default HelloWorld