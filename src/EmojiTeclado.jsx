import React from 'react'
import { useState } from 'react'

export const EmojiTeclado = ({emojiSend}) => {

    const [text,setText] = useState("")
    const emojis = [
        {name : "feliz", value : "😄"},
        {name : "enamorado", value : "😍"},
        {name : "wasa", value : "👻"},
        {name : "fuerte", value : "💪"},
        {name : "ojos", value : "👀"}
    ]

    function handleChange (e){
        setText(e.target.value)
    }

    function handleClick (e){
        emojiSend(e.target.value);
    }

  return (
    <div>
        <input onChange={handleChange} type="text" />
        <div className='emojisContainer'>
            {emojis.map((emoji)=>{
                const startsWithText = emoji.name.includes(text);
                if (startsWithText) {
                    return(
                        <input key={emoji.name} onClick={handleClick} type="text" readOnly value={emoji.value} />  
                    )} 
            })}
        </div>
    </div>
  )
}
