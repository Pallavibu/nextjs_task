
import React from 'react'

const OptionsList = ({options}) => {
  return (
    <ul>
    {options.map((option, index) => (
      <li key={index}>{option}</li>
    ))}
  </ul>
  )
}

export default OptionsList