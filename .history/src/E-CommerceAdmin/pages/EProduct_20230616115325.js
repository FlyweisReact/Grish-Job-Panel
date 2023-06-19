/** @format */

/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";
import { AllDrivers, AllVehicleType, DeleteDrivers } from "../../Repository/Employer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const EProduct = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    try {
      const { data } = await AllVehicleType();
      setData(data.reverse());
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteHandler = async (id) => {
    try {
      const { data } = await DeleteDrivers(id);
      toast.success(data.message);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <section style={{ padding: "20px" }}>
        <p className="headP">Dashboard / Vehicle Type</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Vehicle Type's ( Total : {data?.length} )
          </span>
        </div>

        <section className="sectionCont">
          <div className="filterBox">
            <img
              src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
              alt=""
            />
            <input type="search" placeholder="Start typing to search" />
          </div>

          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>Vehicle</th>
              
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td> #{index + 1} </td>
                    <td> {i.vehicletype} </td>
                    <td> {i.lastName} </td>
                    <td> {i.email} </td>
                    <td> {i.gender} </td>
                    <td> {i.ResumeTitle} </td>
                    <td> {i.exactAddress} </td>
                    <td> {i.DateOfBirth} </td>
                    <td>
                      <span className="flexCont">
                        <Link to={`/driver/${i._id}`}>
                          <i className="fa-solid fa-eye"></i>
                        </Link>
                        <i
                          className="fa-sharp fa-solid fa-trash"
                          onClick={() => deleteHandler(i._id)}
                        ></i>
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </section>
      </section>
    </>
  );
};

export default HOC(EProduct);
