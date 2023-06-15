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
        <p className="headP"> Dashboard / Jobs / {data?.jobtitle} </p>

        <Form onSubmit={postHandler}>
            <Form.Select
              className="mb-3"
              onChange={(e) => setEmployer(e.target.value)}
            >
              <option>Select Employer</option>
              {Employes?.map((i, index) => (
                <option key={index} value={i._id}>
                  {" "}
                  {i.employer}{" "}
                </option>
              ))}
            </Form.Select>

            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </Form.Group>

       
          </Form>

      </section>

  </>);
};

export default HOC(JobsDetails);
