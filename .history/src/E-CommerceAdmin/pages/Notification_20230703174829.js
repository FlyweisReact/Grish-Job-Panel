/** @format */

import React, { useCallback, useEffect, useState } from "react";
import HOC from "../layout/HOC";
import { Table, Modal, Form, Button, FloatingLabel } from "react-bootstrap";
import { toast } from "react-toastify";
import axios from "axios";
import Filter from "./Component/Filter";
import Heading from "./Component/Heading";

const Notification = () => {
  const [data, setData] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  const [query, setQuery] = useState("");
  const token = localStorage.getItem("Token");

  const TotolData = query
    ? data?.filter((i) =>
        i?.message?.toLowerCase().includes(query?.toLowerCase())
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

  const fetchHandler = useCallback(async () => {
    try {
      const { data } = await axios.get(
        "https://gadi-driver-u8ym.vercel.app/api/v1/admin/notification/allNotification",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setData(data.data);
    } catch (e) {
      console.log(e);
    }
  }, [token]);

  useEffect(() => {
    fetchHandler();
  }, [fetchHandler]);

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `https://gadi-driver-u8ym.vercel.app/api/v1/noti/${id}`
      );
      toast.success(data.message);
    } catch (e) {
      console.log(e);
    }
  };

  function MyVerticallyCenteredModal(props) {
    const [sendTo, setSendTo] = useState("");
    const [total, setTotal] = useState("");
    const [_id, setId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [employers, setEmployers] = useState([]);
    const [driver, setDriver] = useState([]);

    const fetchEmployers = async () => {
      try {
        const { data } = await axios.get(
          "https://gadi-driver-u8ym.vercel.app/api/v1/admin/Users",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setEmployers(data.data);
      } catch (e) {
        console.log(e);
      }
    };

    const fetchDriver = async () => {
      try {
        const { data } = await axios.get(
          "https://gadi-driver-u8ym.vercel.app/api/v1/admin/Driver",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setDriver(data.data);
      } catch (e) {
        console.log(e);
      }
    };

    useEffect(() => {
      if (props.show === true) {
        fetchEmployers();
        fetchDriver();
      }
    }, [props]);

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://gadi-driver-u8ym.vercel.app/api/v1/admin/notification/sendNotification",
          {
            sendTo,
            total,
            _id,
            title,
            body,
            date,
            time,
          } , {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success(data.message);
        fetchHandler()
        props.onHide();
      } catch (e) {
        console.log(e);
      }
    };

    const Spectrum = () => {
      if(sendTo === "DRIVER" && total === "ALL"){
        return 
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
            {" "}
            Create Notification
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Send To</Form.Label>
              <Form.Check
                label="Driver"
                name="group1"
                onClick={() => setSendTo("DRIVER")}
                type="radio"
              />
              <Form.Check
                label="Employer"
                name="group1"
                type="radio"
                onClick={() => setSendTo("EMPLOYER")}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>All/Singe</Form.Label>
              <Form.Check
                label="ALL"
                name="all"
                onClick={() => setTotal("ALL")}
                type="radio"
              />
              <Form.Check
                label="SINGLE"
                name="all"
                type="radio"
                onClick={() => setTotal("SINGLE")}
              />
            </Form.Group>

            {

            }

            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setId(e.target.value)}
              >
                <option>Open this Select Employer</option>
                {employers?.map((i, index) => (
                  <option key={index} value={i._id}>
                    {" "}
                    {i.name}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => setId(e.target.value)}
              >
                <option>Open this Select Driver</option>
                {driver?.map((i, index) => (
                  <option key={index} value={i._id}>
                    {" "}
                    {i.name}{" "}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setDate(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Time</Form.Label>
              <Form.Control
                type="time"
                onChange={(e) => setTime(e.target.value)}
              />
            </Form.Group>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Message"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                onChange={(e) => setBody(e.target.value)}
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
        <Heading title={"Notification's"} />

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
          <Filter setQuery={setQuery} placeholder={"Search By Message"} />

          <div className="overFlowCont">
            <Table>
              <thead>
                <tr>
                  <th>SNo.</th>
                  <th>User Id</th>
                  <th>Title</th>
                  <th>Content</th>
                  <th>Date</th>
                  <th>Time</th>
                  <th>Options</th>
                </tr>
              </thead>
              <tbody>
                {slicedData?.map((i, index) => (
                  <tr key={index}>
                    <td> #{index + 1} </td>
                    <td>{i.userId}</td>
                    <td>{i.title}</td>
                    <td>{i.body}</td>
                    <td>{i.date}</td>
                    <td>{i.time}</td>
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

export default HOC(Notification);
