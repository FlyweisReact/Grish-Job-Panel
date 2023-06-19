import React from 'react'
import { Link } from 'react-router-dom'

const Heading = ({title}) => {
  return (
    <p className="headP"> 
    
    <Link href='/'>
    <span>Dashboard</span> 
    </Link>
     / {title}</p>
  )
}

export default Heading