import React from 'react'
import { Link } from 'react-router-dom'

const Heading = ({title}) => {
  return (
    <p className="headP"> <a href='#'>Dashboard</a>  / {title}</p>
  )
}

export default Heading