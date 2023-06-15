import React from 'react'
import { useParams } from 'react-router-dom'
import HOC from '../layout/HOC'

const JobsDetails = () => {
    const { id }= useParams()

  return (
    <>

    </>
  )
}

export default HOC(JobsDetails)