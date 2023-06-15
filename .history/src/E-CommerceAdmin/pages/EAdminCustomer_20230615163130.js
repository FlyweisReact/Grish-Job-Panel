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
                <th>Name</th>
                <th>User Name</th>
                <th>Email Address</th>
                <th>Role</th>
                <th>Address</th>
                <th>Company Name</th>
                <th>Phone Number</th>
                <th>Options</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i, index) => (
                <tr key={index}>
                  <td> {index + 1} </td>
                  <td>
                    <img src={i.img} alt="" />
                  </td>
                  <td> {i.employer?.employer} </td>
                  <td> {i.jobtitle} </td>
                  <td> {i.jobtype} </td>
                  <td> {i.vehicletype} </td>
                  <td> {i.gender} </td>
                  <td> {i.contactNumber} </td>
                  <td> {i.location} </td>
                  <td> {i.address} </td>
                  <td> {i.postalCode} </td>
                  <td> {i.salaryOffer} </td>
                  <td> {i.totalExperience} </td>
                  <td> {i.qualification} </td>
                  <td> {i.language?.language} </td>{" "}
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
