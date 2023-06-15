/** @format */

import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AllJobs } from "../../Repository/Employer";
import HOC from "../layout/HOC";

const EAdminCustomer = () => {
  const [data, setData] = useState([]);

  const FetchData = async () => {
    try {
      const { data } = await AllJobs();
      setData(data.msg);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  const DeleteHandler = async (id) => {
    try{

    }catch(e)
  }

  return (
    <>
      <p className="headP">Dashboard / JOBS</p>
      <div
        className="pb-4 w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All JOBS ( Total : {data?.length} )
        </span>
      </div>

      <section className="sectionCont">
        <div className="filterBox">
          <img
            src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
            alt=""
          />
          <input
            type="search"
            placeholder="Start typing to search for Customers"
          />
        </div>

        <div className="overFlowCont">
          <Table>
            <thead>
              <tr>
                <th>SNo.</th>
                <th>Employer</th>
                <th>Job Title</th>
                <th>Job Type</th>
                <th>Contact Number</th>
                <th>Salary Offered</th>
                <th>Total Experience</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td> {i.employer?.employer} </td>
                  <td> {i.jobtitle} </td>
                  <td> {i.jobtype} </td>
                  <td> {i.contactNumber} </td>
                  <td> {i.salaryOffer} </td>
                  <td> {i.totalExperience} </td>
                </tr>
              ))}
            </tbody>
          </Table>{" "}
        </div>
      </section>
    </>
  );
};

export default HOC(EAdminCustomer);
