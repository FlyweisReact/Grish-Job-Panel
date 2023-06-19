
import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table , Modal , Form   ,Button} from "react-bootstrap";
import {
  AddVehicleType,
  AllVehicleType,
  DeleteVehicleType,
} from "../../Repository/Employer";
import { toast } from "react-toastify";



const Notification = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
  
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
        const { data } = await DeleteVehicleType(id);
        toast.success(data.message);
        fetchData();
      } catch (e) {
        console.log(e);
      }
    };
  
    function MyVerticallyCenteredModal(props) {
      const [vehicletype, setVihcleType] = useState("");
  
      const postHandler = async (e) => {
        e.preventDefault();
        try {
          const { data } = await AddVehicleType(vehicletype);
          toast.success(` ${data.vehicletype} Created  `);
          fetchData();
          props.onHide();
        } catch (e) {
          console.log(e);
        }
      };
  
      return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              {" "}
              Create New Vehicle Type
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={postHandler}>
              <Form.Group className="mb-3">
                <Form.Label>Vehcile</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setVihcleType(e.target.value)}
                />
              </Form.Group>
              <Button variant="outline-success" type="submit">
                Create
              </Button>
            </Form>
          </Modal.Body>
        </Modal>
      );
    }
  
    return (
      <>
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)} />
        <section style={{ padding: "20px" }}>
          <p className="headP">Dashboard / Push Notification  Type</p>
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
                      <td>
                        <span className="flexCont">
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

export default HOC(Notification)