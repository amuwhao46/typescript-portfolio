import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'

type Props = {}

function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: [
      "Some Black Dude", 
    "Testing... Help!", 
    "I'm so bored :("
  ],
  })

  return (
    <div>Hero</div>
  )
}

export default Hero