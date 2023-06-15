/** @format */

import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import HOC from "../layout/HOC";
import { AddEmployer, GetAllEmployer } from "../../Repository/Employer";

const EAdmin = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  const GetAllEmployes = async () => {
    try {
      const { data } = await GetAllEmployer();
      setData(data.msg);
    } catch (E) {
      console.log(E);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [ employer , setEmployer  ] = useState("")

    const CreateEmployer = async () => {
      try{
        const { data } = await AddEmployer(employer)
        console.log(data)
      }catch(e) { 
        console.log(e)
      }
    }

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Employer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={CreateEmployer}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" onChange={(e) => setEmployer(e.target.value)} />
            </Form.Group>

            <Button type='submit'>Submit</Button>
          </Form>

        </Modal.Body>
      </Modal>
    );
  }

  useEffect(() => {
    GetAllEmployes();
  }, []);

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section style={{ padding: "20px" }}>
        <p className="headP">Dashboard / Admin</p>
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase "
            style={{ fontSize: "1.5rem" }}
          >
            All Employers
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
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {data?.map((i, index) => (
                  <tr key={index}>
                    <td> {index + 1} </td>
                    <td> {i.employer} </td>
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

export default HOC(EAdmin);
