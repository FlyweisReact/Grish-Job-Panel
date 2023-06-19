import React from 'react'
import { Link } from 'react-router-dom'

const Heading = ({title}) => {
  return (
    <p className="headP"> <span>Dashboard</span>  / {title}</p>
  )
}

export default Heading