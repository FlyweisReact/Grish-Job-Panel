/** @format */

import React, {  useState } from "react";
import { Table } from "react-bootstrap";
import HOC from "../layout/HOC";

const EAdminCustomer = () => {
  const [data, setData] = useState([]);


  return (
    <>
      <p className="headP">Dashboard / Customers</p>
      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Customers ( Total : {data?.length} )
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
                 
                </tbody>
              </Table>{" "}
     
            </div>
     
      </section>
    </>
  );
};

export default HOC(EAdminCustomer);
