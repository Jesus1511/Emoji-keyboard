import React from 'react'
import { useState, useRef} from 'react'
import { EmojiTeclado } from './EmojiTeclado'

export const App = () => {

  const[text,setText] = useState("")
  const[menuOpen, setMenuOpen] = useState(false)
  const input = useRef(null)

  function handleChange (e){
    const newText = e.target.value
    setText(newText)
  }

  function handleClick (e){
    e.preventDefault()
    setMenuOpen(!menuOpen)
    input.current.focus()
  }

  function handleEmojiSend (value){
    setText(text + value)
  }

  return (
    <>
    <form action="">
      <input onChange={handleChange} type="text" value={text} ref={input} />
      <button onClick={handleClick} >😄</button>
    </form>

    {
      menuOpen?
        <EmojiTeclado emojiSend={handleEmojiSend} /> :
        ""}
    </>
  )
}
