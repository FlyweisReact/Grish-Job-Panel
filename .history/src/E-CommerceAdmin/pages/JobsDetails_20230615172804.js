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
          <button
            onClick={() => {
              setModalShow(true);
            }}
            className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
          >
            Create New
          </button>
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
                  <th>Image</th>
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
                    <td>
                      <img src={i.image} alt="" style={{ width: "100px" }} />
                    </td>
                    <td> {i.employer?.employer} </td>
                    <td> {i.jobtitle} </td>
                    <td> {i.jobtype} </td>
                    <td> {i.contactNumber} </td>
                    <td> {i.salaryOffer} </td>
                    <td> {i.totalExperience} </td>
                    <td>
                      <span className="flexCont">
                        <i className="fa-solid fa-pen-to-square"></i>
                        <Link to={`/jobs/${i._id}`}>
                          <i className="fa-solid fa-eye"></i>
                        </Link>
                        <i
                          className="fa-sharp fa-solid fa-trash"
                          onClick={() => DeleteHandler(i._id)}
                        ></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>{" "}
          </div>
        </section>
      </section>

  </>);
};

export default HOC(JobsDetails);
