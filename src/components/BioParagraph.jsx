import React from 'react'

const BioParagraph = (props) => {
  return (
  <div className='bio-para'>
  <h5>{props.title}</h5>
  <p>{props.text}</p>
  </div>
    
  )
}

export default BioParagraph