/** @format */

import React, { useEffect, useState } from "react";
import { Button, Form, Modal, Table } from "react-bootstrap";
import HOC from "../layout/HOC";
import {
  AddEmployer,
  DeleteEmployer,
  GetAllEmployer,
} from "../../Repository/Employer";
import { toast } from "react-toastify";
import Heading from "./Component/Heading";
import Filter from "./Component/Filter";

const Employer = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);
  const [ query , setQuery ] = useState("")

  const GetAllEmployes = async () => {
    try {
      const { data } = await GetAllEmployer();
      setData(data.msg);
    } catch (E) {
      console.log(E);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [employer, setEmployer] = useState("");

    const CreateEmployer = async (e) => {
      e.preventDefault();
      try {
        const { data } = await AddEmployer(employer);
        toast.success(`${data?.msg?.employer} Created Successfully`);
        GetAllEmployes();
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
            Add Employer
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={CreateEmployer}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
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

  useEffect(() => {
    GetAllEmployes();
  }, []);

  const DelteHandler = async (id) => {
    try {
      const { data } = await DeleteEmployer(id);
      toast.success(data.message);
      GetAllEmployes();
    } catch (e) {
      console.log(e);
    }
  };


  const 

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      <section style={{ padding: "20px" }}>
      <Heading title={'Employers'} />
        <div
          className="pb-4   w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase "
            style={{ fontSize: "1.5rem" }}
          >
            All Employers ( Total : {data?.length} )
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
        <Filter setQuery={setQuery} />
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
                    <td> #{index + 1} </td>
                    <td> {i.employer} </td>
                    <td>
                      <i
                        className="fa-sharp fa-solid fa-trash"
                        onClick={() => DelteHandler(i._id)}
                      ></i>
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

export default HOC(Employer);
