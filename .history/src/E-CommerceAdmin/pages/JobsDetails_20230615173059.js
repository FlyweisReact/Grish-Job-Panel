/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
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

  return (
    <>
      <section style={{ padding: "20px" }}>
        <p className="headP"> Dashboard / Jobs / {data?.jobtitle} </p>

        <Form className="mt-4">
          <Form.Group className="mb-3">
            <Form.Label>Job Title</Form.Label>
            <Form.Control type="text" disabled  placeholder={data?.employer?.employer/>
          </Form.Group>
        </Form>
      </section>
    </>
  );
};

export default HOC(JobsDetails);
