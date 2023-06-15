import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { GetJobById } from '../../Repository/Employer'
import HOC from '../layout/HOC'

const JobsDetails = () => {
    const { id }= useParams()
    const [ data , setData] = useState([])

    const FetchData = async () => {
        try {
          const { data } = await GetJobById(id);
          setData(data.msg);
        } catch (e) {
          console.log(e);
        }
      };

  return (
    <>

    </>
  )
}

export default HOC(JobsDetails)