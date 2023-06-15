/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { GetJobById } from "../../Repository/Employer";
import HOC from "../layout/HOC";

const JobsDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState({});

  const FetchData = useCallback(async () => {
    try {
      const { data } = await GetJobById(id);
      setData(data.msg);
    } catch (e) {
      console.log(e);
    }
  }, [id]);

  useEffect(() => {
    FetchData();
  }, [FetchData]);

  return (<>
        
      <section style={{ padding: "20px" }}>
        <p className="headP"> Dashboard / Jobs / {data?.jobtitle} </p>

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
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Male and Female">Male and Female</option>
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
              <option value={false}>False</option>
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
              <option value={false}>False</option>
            </Form.Select>

            <Form.Select
              className="mb-3"
              onChange={(e) => setStartChat(e.target.value)}
            >
              <option>Select StartChat</option>
              <option value={true}>True</option>
              <option value={false}>False</option>
            </Form.Select>

            <Form.Group className="mb-3">
              <Form.Label>DetailsOfCompany</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setDetailsOfCompany(e.target.value)}
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Website</Form.Label>
              <Form.Control
                type="text"
                onChange={(e) => setWebsite(e.target.value)}
              />
            </Form.Group>

            <Button type="submit" variant="outline-success">
              Create
            </Button>
          </Form>

      </section>

  </>);
};

export default HOC(JobsDetails);
