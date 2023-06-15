/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetJobById } from "../../Repository/Employer";
import HOC from "../layout/HOC";

const JobsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const FetchData = useCallback(async () => {
    try {
      const { data } = await GetJobById(id);
      setData(data.msg);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    FetchData();
  }, [FetchData]);

  return (<>
        
      <section style={{ padding: "20px" }}>
        <p className="headP"> Dashboard / J {data?.jobtitle} </p>
      
      </section>

  </>);
};

export default HOC(JobsDetails);
