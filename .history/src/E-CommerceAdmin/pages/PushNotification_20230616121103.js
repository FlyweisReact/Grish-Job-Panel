/** @format */

import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Button,
  FloatingLabel,
  Form,
  Modal,
  Table,
} from "react-bootstrap";
import { toast } from "react-toastify";
import HOC from "../layout/HOC";

const PushNotification = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [data, setData] = useState([]);

  // Pagination and Filter
  const [query, setQuery] = useState("");
  const [currentPage2, setCurrentPage2] = useState(1);
  const [postPerPage2] = useState(10);
  const lastPostIndex2 = currentPage2 * postPerPage2;
  const firstPostIndex2 = lastPostIndex2 - postPerPage2;

  let pages2 = [];

  const TotolData = query
    ? data?.filter(
        (i) =>
          i?.plan?.toLowerCase().includes(query?.toLowerCase()) ||
          i?.price?.toLowerCase().includes(query?.toLowerCase())
      )
    : data;

  useEffect(() => {
    if (query) {
      setCurrentPage2(1);
    }
  }, [query]);

  const slicedData = TotolData?.slice(firstPostIndex2, lastPostIndex2);

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
      const { data } = await axios.get(
        "https://gadi-driver-u8ym.vercel.app/api/v1/subscrip"
      );
      setData(data.msg);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  function MyVerticallyCenteredModal(props) {
    const [Notification, setNotification] = useState("");
    const [  plan , setPlan] = useState("")
    const [price ,setPrice ] = useState("")
    const [startDate , setStartDate ] = useState("")
    const [endDate , setEndDate ] = useState("")

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await axios.post(
          "https://gadi-driver-u8ym.vercel.app/api/v1/subscrip",
          { plan , price , startDate , endDate }
        );
        toast.success(`${data.plan} Created`);
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
            Create New Plan
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Group className="mb-3">
              <Form.Label>Notification</Form.Label>
              <
            </Form.Group>

            <Button
              style={{ backgroundColor: "#19376d", borderRadius: "0" }}
              type="submit"
            >
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    );
  }

  const deleteHandler = async (id) => {
    try {
      const { data } = await axios.delete(
        `http://ec2-65-1-248-95.ap-south-1.compute.amazonaws.com:8886/api/notify/${id}`
      );
      toast.success(data.message);
      fetchData();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />

      <p className="headP">Dashboard / Subscriptions</p>

      <div
        className="pb-4   w-full flex justify-between items-center"
        style={{ width: "98%", marginLeft: "2%" }}
      >
        <span
          className="tracking-widest text-slate-900 font-semibold uppercase "
          style={{ fontSize: "1.5rem" }}
        >
          All Subscriptions (Total : {data.length})
        </span>
        <button
          onClick={() => {
            setModalShow(true);
          }}
          className="md:py-2 px-3 md:px-4 py-1 rounded-sm  bg-[#19376d] text-white tracking-wider"
        >
          Add Subscriptions
        </button>
      </div>
      <section className="sectionCont">
        {data?.length === 0 || !data ? (
          <Alert>No Data Found</Alert>
        ) : (
          <>
            {/* Filter */}
            <div className="filterBox">
              <img
                src="https://t4.ftcdn.net/jpg/01/41/97/61/360_F_141976137_kQrdYIvfn3e0RT1EWbZOmQciOKLMgCwG.jpg"
                alt=""
              />
              <input
                type="search"
                placeholder="Start typing to search "
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>
            <div className="overFlowCont">
              <Table>
                <thead>
                  <tr>
                    <th>SNo.</th>
                    <th>Plan</th>
                    <th>Price</th>
                    <th>Starting Date</th>
                    <th>Ending Date</th>
                    <th>Options</th>
                  </tr>
                </thead>
                <tbody>
                  {slicedData.map((i, index) => (
                    <tr key={index}>
                      <td> #{index + 1} </td>
                      <td> {i.plan} </td>
                      <td>  <i className="fa-solid fa-indian-rupee-sign mr-1"></i> {i.price} </td>
                      <td> {i.startDate} </td>
                      <td> {i.endDate} </td>
                      <td>
                        <i
                          className="fa-solid fa-trash"
                          onClick={() => deleteHandler(i._id)}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
            {/* Pagination */}
            <div className="pagination">
              <button onClick={() => Prev()} className="prevBtn">
                <i className="fa-solid fa-backward"></i>
              </button>
              {currentPage2 === 1 ? (
                ""
              ) : (
                <button onClick={() => setCurrentPage2(1)}>1</button>
              )}

              {pages2
                ?.slice(currentPage2 - 1, currentPage2 + 3)
                .map((i, index) =>
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
          </>
        )}
      </section>
    </>
  );
};

export default HOC(PushNotification);