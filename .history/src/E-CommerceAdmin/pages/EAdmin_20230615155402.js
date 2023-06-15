/** @format */

import React, { useEffect, useState } from "react";
import {  Modal, Table } from "react-bootstrap";
import HOC from "../layout/HOC";
import { GetAllEmployer } from "../../Repository/Employer";

const EAdmin = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [ data , setData ] = useState([])

  const Get = async () => {
    try{
      const { data } = await GetAllEmployer()
      setData(data.msg)
    }catch(E) { 
      console.log(E)
    }
  }



  function MyVerticallyCenteredModal(props) {
    
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Admin
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>

        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }


  useEffect(() => {
    Get()
  },[])


  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <p className="headP">Dashboard / Admin</p>
      <div
        className="pb-4 sticky top-0  w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Admin 
        </span>
        <button
          onClick={() => {
            setModalShow(true);
          }}
          className="md:py-2 px-3 md:px-4 py-1 rounded-sm bg-[#19376d] text-white tracking-wider"
        >
          Add Admin
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
                    <th>Name</th>
                    <th>Email Address</th>
                    <th>Role</th>
                    <th>Phone Number</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
              
                </tbody>
              </Table>

            </div>
         
      </section>
    </>
  );
};

export default HOC(EAdmin);
