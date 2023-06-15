/** @format */

import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button } from "react-bootstrap";
import { toast } from "react-toastify";
import { AllJobs, DeleteJobs } from "../../Repository/Employer";
import HOC from "../layout/HOC";

const EAdminCustomer = () => {
  const [modalShow, setModalShow] = React.useState(false);
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
    try {
      const { data } = await DeleteJobs(id);
      toast.success(data.message);
      FetchData();
    } catch (e) {
      console.log(e);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [employer, setEmployer] = useState("");
    const [ jobtitle , setJobTitle ] = useState("")
    const [ jobtype , setJobType ] = useState("")
    const [ vehicletype , setVehicleType ] = useState("")
    const [ gender, setGender ] = useState("")
    const [ description , setDescription ] = useState("")
    const [ contactNumber , setContactNumber ] = useState("")
    const [ location , setLocation ] = useState("")
    const [address , setAddess ] = useState("")
    const [ postalCode , setPostalCode ] = useState("")
    const [ image  , setImage ] = useState("")
    const [ salaryOffer ,  setSalaryOffer] = useState("")
    const [  , ] = useState("")

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        props.onHide();
      } catch (e) {
        console.log(e);
      }
    };

    return (
      <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add Jobs
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Employer</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmployer(e.target.value)}
              />
            </Form.Group>
            
            <Form.Group className="mb-3">
              <Form.Label>Employer</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmployer(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Employer</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmployer(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Employer</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmployer(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Employer</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmployer(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Employer</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmployer(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="outline-success">
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

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
                  <td>
                    <span className="flexCont">
                      <i className="fa-solid fa-pen-to-square"></i>
                      <i className="fa-solid fa-eye"></i>
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
    </>
  );
};

export default HOC(EAdminCustomer);
