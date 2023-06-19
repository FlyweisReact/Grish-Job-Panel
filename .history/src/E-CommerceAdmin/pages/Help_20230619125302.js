/** @format */

import React, { useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table, Modal, Form, Button, FloatingLabel } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import { Spin, Alert } from "antd";

const Help = () => {
    const [data, setData] = useState([]);
    const [modalShow, setModalShow] = useState(false);
  
    const fetchData = async () => {
      try {
        const { data } = await axios.get(
          "https://gadi-driver-u8ym.vercel.app/api/v1/noti"
        );
        setData(data.msg);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, []);
  
    const deleteHandler = async (id) => {
      try {
        const { data } = await axios.delete(`https://gadi-driver-u8ym.vercel.app/api/v1/noti/${id}`);
        toast.success(data.message);
        fetchData();
      } catch (e) {
        console.log(e);
      }
    };
  
    function MyVerticallyCenteredModal(props) {
      const [message, setMessage] = useState("");
      const [image, setImage] = useState("");
      const [loading, setLoading] = useState(false);
  
      const UploadImages = (e) => {
        setLoading(true);
        const data = new FormData();
        data.append("file", e.target.files[0]);
        data.append("upload_preset", "ml_default");
        data.append("cloud_name", "dbcnha741");
        fetch("https://api.cloudinary.com/v1_1/dbcnha741/image/upload", {
          method: "post",
          body: data,
        })
          .then((res) => res.json())
          .then((data) => {
            setImage(data.url);
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
      };
  
      const postHandler = async (e) => {
        e.preventDefault();
        try {
          const { data } = await axios.post(
            "https://gadi-driver-u8ym.vercel.app/api/v1/noti",
            {
              image,
              message,
            }
          );
          console.log(data);
          toast.success(`Created`);
          fetchData();
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
              {" "}
              Create Notification
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={postHandler}>
              {loading ? (
                <div className="SpinComp">
                  <Spin tip="Uploading..." size="large">
                    <div className="content" />
                  </Spin>
                </div>
              ) : (
                <Alert
                  message="Image Uploaded Successfully"
                  type="success"
                  showIcon
                  closable
                />
              )}
  
              <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control type="file" onChange={(e) => UploadImages(e)} />
              </Form.Group>
  
              <FloatingLabel
                controlId="floatingTextarea"
                label="Message"
                className="mb-3"
              >
                <Form.Control
                  as="textarea"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </FloatingLabel>
  
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
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        <section style={{ padding: "20px" }}>
          <p className="headP">Dashboard / Push Notification </p>
          <div
            className="pb-4   w-full flex justify-between items-center"
            style={{ width: "98%", marginLeft: "2%" }}
          >
            <span
              className="tracking-widest text-slate-900 font-semibold uppercase"
              style={{ fontSize: "1.5rem" }}
            >
              All Notification ( Total : {data?.length} )
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
                    <th>Image</th>
                    <th>Message</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {data?.map((i, index) => (
                    <tr key={index}>
                      <td> #{index + 1} </td>
                      <td>
                        {" "}
                        <img
                          src={i.image}
                          alt=""
                          style={{ width: "100px" }}
                        />{" "}
                      </td>
                      <td>{i.message}</td>
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
  

export default Help