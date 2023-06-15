/** @format */

import React, { useEffect, useState } from "react";
import { Table, Modal, Form, Button, FloatingLabel } from "react-bootstrap";
import { toast } from "react-toastify";
import {
  AddJob,
  AllJobs,
  DeleteJobs,
  GetAllEmployer,
} from "../../Repository/Employer";
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
    const [jobtitle, setJobTitle] = useState("");
    const [jobtype, setJobType] = useState("");
    const [vehicletype, setVehicleType] = useState("");
    const [gender, setGender] = useState("");
    const [description, setDescription] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [location, setLocation] = useState("");
    const [address, setAddress] = useState("");
    const [postalCode, setPostalCode] = useState("");
    const [image, setImage] = useState("");
    const [salaryOffer, setSalaryOffer] = useState("");
    const [totalExperience, setTotalExperience] = useState("");
    const [qualification, setQualification] = useState("");
    const [closeDate, setCloseDate] = useState("");
    const [autoClose, setAutoClose] = useState(false);
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [applicantChatYouDirectly, setChat] = useState("");
    const [startChat, setStartChat] = useState("");
    const [uploadImage, setUploadImage] = useState("");
    const [detailsOfCompany, setDetailsOfCompany] = useState("");
    const [website, setWebsite] = useState("");

    const [Employes, setEmployes] = useState([]);

    const GetAllEmployes = async () => {
      try {
        const { data } = await GetAllEmployer();
        setEmployes(data.msg);
      } catch (E) {
        console.log(E);
      }
    };

    useEffect(() => {
      if (props.show) {
        GetAllEmployes();
      }
    }, [props]);

    const postHandler = async (e) => {
      e.preventDefault();
      try {
        const { data } = await AddJob(
          employer,
          jobtitle,
          jobtype,
          vehicletype,
          gender,
          description,
          contactNumber,
          location,
          address,
          postalCode,
          image,
          salaryOffer,
          totalExperience,
          qualification,
          closeDate,
          autoClose,
          fullName,
          email,
          applicantChatYouDirectly,
          startChat,
          uploadImage,
          detailsOfCompany,
          website
        );
        console.log(data);
        toast.success("Jobs Created Successfully");
        FetchData();
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
          <Modal.Title id="contained-modal-title-vcenter">Add Jobs</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={postHandler}>
            <Form.Select
              className="mb-3"
              onChange={(e) => setEmployer(e.target.value)}
            >
              <option>Select Employer</option>
              {Employes?.map((i, index) => (
                <option key={index} value={i._id}>
                  {" "}
                  {i.employer}{" "}
                </option>
              ))}
            </Form.Select>

            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setJobTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Job Type</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setJobType(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Vehicle Type</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setVehicleType(e.target.value)}
              />
            </Form.Group>

            <Form.Select
              className="mb-3"
              onChange={(e) => setGender(e.target.value)}
            >
              <option>Select Gender</option>
              <option value='Male'>Male</option>
              <option value='Female'>Female</option>
              <option value='Male and Female'>Male and Female</option>
            </Form.Select>

            <FloatingLabel
              controlId="floatingTextarea"
              label="Decription"
              className="mb-3"
            >
              <Form.Control
                as="textarea"
                onChange={(e) => setDescription(e.target.value)}
              />
            </FloatingLabel>

            <Form.Group className="mb-3">
              <Form.Label>Contact Number</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setContactNumber(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setLocation(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Postal Code</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setPostalCode(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setImage(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Salary Offered</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setSalaryOffer(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Total Experience</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setTotalExperience(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setQualification(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Close Date</Form.Label>
              <Form.Control
                type="date"
                onChange={(e) => setCloseDate(e.target.value)}
              />
            </Form.Group>



            <Form.Select
              className="mb-3"
              onChange={(e) => setAutoClose(e.target.value)}
            >
              <option>Select AutoClose</option>
              <option value={true}>True</option>
              <option value={false} >False</option>
            </Form.Select>


            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setFullname(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>


            <Form.Select
              className="mb-3"
              onChange={(e) => setChat(e.target.value)}
            >
              <option>Select Chat</option>
              <option value={true}>True</option>
              <option value={false} >False</option>
            </Form.Select>
            
            <Form.Select
              className="mb-3"
              onChange={(e) => setStartChat(e.target.value)}
            >
              <option>Select StartChat</option>
              <option value={true}>True</option>
              <option value={false} >False</option>
            </Form.Select>

            <Form.Group className="mb-3">
              <Form.Label>setStartChat</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setStartChat(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>setUploadImage</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setUploadImage(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>setDetailsOfCompany</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDetailsOfCompany(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>setWebsite</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
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
                  <th>Image</th>
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
                    <td>
                      <img src={i.image} alt="" style={{ width: "100px" }} />
                    </td>
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
