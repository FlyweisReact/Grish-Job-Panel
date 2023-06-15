import React from 'react'
import { useParams } from 'react-router-dom'
import { GetJobById } from '../../Repository/Employer'
import HOC from '../layout/HOC'

const JobsDetails = () => {
    const { id }= useParams()

    const FetchData = async () => {
        try {
          const { data } = await GetJobById();
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