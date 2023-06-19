/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table } from "react-bootstrap";
import { AllDrivers, DeleteDrivers } from "../../Repository/Employer";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import Filter from "./Component/Filter";

const EAdminDelivery = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");

  const TotolData = query
    ? data?.filter((i) =>
        i?.employer?.toLowerCase().includes(query?.toLowerCase())
      )
    : data;

  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;
  let pages2 = [];

  const slicedData = TotolData?.slice(firstPostIndex2, lastPostIndex2);

  useEffect(() => {
    if (query) {
      setCurrentPage2(1);
    }
  }, [query]);

  for (let i = 1; i <= Math.ceil(TotolData?.length / postPerPage2); i++) {
    pages2.push(i);
  }

  function Next() {
    setCurrentPage2(currentPage2 + 1);
  }

  function Prev() {
    if (currentPage2 !== 1) {
      setCurrentPage2(currentPage2 - 1);
    }
  }

  const fetchData = async () => {
    try {
      const { data } = await AllDrivers();
      setData(data.msg.reverse());
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
        <p className="headP">Dashboard / Drivers</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            All Driver's ( Total : {data?.length} )
          </span>
        </div>

        <section className="sectionCont">
        <Filter setQuery={setQuery} placeholder={"Search By Driver Name / Email"} />
         

          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Resume Title</th>
                  <th>Address</th>
                  <th>DOB</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {slicedData?.map((i, index) => (
                  <tr key={index}>
                    <td> #{index + 1} </td>
                    <td> {i.firstName} </td>
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

          <div className="pagination">
            <button onClick={() => Prev()} className="prevBtn">
              <i className="fa-solid fa-backward"></i>
            </button>
            {currentPage2 === 1 ? (
              ""
            ) : (
              <button onClick={() => setCurrentPage2(1)}>1</button>
            )}

            {pages2?.slice(currentPage2 - 1, currentPage2 + 3).map((i, index) =>
              i === pages2?.length ? (
                ""
              ) : (
                <button
                  key={index}
                  onClick={() => setCurrentPage2(i)}
                  className={currentPage2 === i ? "activePage" : ""}
                >
                  {" "}
                  {i}{" "}
                </button>
              )
            )}

            <button
              onClick={() => setCurrentPage2(pages2?.length)}
              className={currentPage2 === pages2?.length ? "activePage" : ""}
            >
              {" "}
              {pages2?.length}{" "}
            </button>

            {currentPage2 === pages2?.length ? (
              ""
            ) : (
              <button onClick={() => Next()} className="nextBtn">
                {" "}
                <i className="fa-sharp fa-solid fa-forward"></i>
              </button>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default HOC(EAdminDelivery);