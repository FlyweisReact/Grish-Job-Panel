import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { DriversDetails } from "../../Repository/Employer";
import HOC from "../layout/HOC";


const DriverDetails = () => {
    const { id } = useParams();
    const [data, setData] = useState({});
  
    const FetchData = useCallback(async () => {
      try {
        const { data } = await DriversDetails(id);
        setData(data);
      } catch (e) {
        console.log(e);
      }
    }, [id]);
  
    useEffect(() => {
      FetchData();
    }, [FetchData]);
  
    return (
      <>
        <section>
          <p className="headP"> Dashboard / Drivers / {data?.firstName +  " "  +  data?.lastName } </p>
  
          <Form className="mt-4" style={{ padding: "20px" }}>
            {data?.firstName ? (
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.firstName}
                />
              </Form.Group>
            ) : (
              ""
            )}
            {data?.authid?.phone ? (
              <Form.Group className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="text" disabled placeholder={data?.authid?.phone} />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.gender ? (
              <Form.Group className="mb-3">
                <Form.Label>Gender</Form.Label>
                <Form.Control type="text" disabled placeholder={data?.gender} />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.ResumeTitle ? (
              <Form.Group className="mb-3">
                <Form.Label>Resume Title</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.ResumeTitle}
                />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.exactAddress ? (
              <Form.Group className="mb-3">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" disabled placeholder={data?.exactAddress} />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.militaryService ? (
              <Form.Group className="mb-3">
                <Form.Label>Military Service</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.militaryService}
                />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.DateOfBirth ? (
              <Form.Group className="mb-3">
                <Form.Label>Date of Birth</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.DateOfBirth}
                />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.licienceNumber ? (
              <Form.Group className="mb-3">
                <Form.Label>License Number</Form.Label>
                <Form.Control type="text" disabled placeholder={data?.licienceNumber} />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.email ? (
              <Form.Group className="mb-3">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="text" disabled placeholder={data?.email} />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.postalCode ? (
              <Form.Group className="mb-3">
                <Form.Label>Postal Code</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.postalCode}
                />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.interest ? (
              <Form.Group className="mb-3">
                <Form.Label>Interest</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.interest}
                />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.experience?.companyName ? (
              <Form.Group className="mb-3">
                <Form.Label>Expren</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.totalExperience}
                />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.qualification ? (
              <Form.Group className="mb-3">
                <Form.Label>Qualification</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.qualification}
                />
              </Form.Group>
            ) : (
              ""
            )}
  
            {data?.closeDate ? (
              <Form.Group className="mb-3">
                <Form.Label>Closing Date</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.closeDate}
                />
              </Form.Group>
            ) : (
              ""
            )}
            {data?.autoClose ? (
              <Form.Group className="mb-3">
                <Form.Label>Auto Clode</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.autoClose === true ? "Yes" : "False"}
                />
              </Form.Group>
            ) : (
              ""
            )}
            {data?.fullName ? (
              <Form.Group className="mb-3">
                <Form.Label>FullName</Form.Label>
                <Form.Control type="text" disabled placeholder={data?.fullName} />
              </Form.Group>
            ) : (
              ""
            )}
            {data?.email ? (
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" disabled placeholder={data?.email} />
              </Form.Group>
            ) : (
              ""
            )}
            {data?.startChat ? (
              <Form.Group className="mb-3">
                <Form.Label>Start Chat</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.startChat}
                />
              </Form.Group>
            ) : (
              ""
            )}
            {data?.detailsOfCompany ? (
              <Form.Group className="mb-3">
                <Form.Label>Details Of Company</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.detailsOfCompany}
                />
              </Form.Group>
            ) : (
              ""
            )}
            {data?.website ? (
              <Form.Group className="mb-3">
                <Form.Label>Website</Form.Label>
                <Form.Control type="text" disabled placeholder={data?.website} />
              </Form.Group>
            ) : (
              ""
            )}
            {data?.language?.language ? (
              <Form.Group className="mb-3">
                <Form.Label>Language</Form.Label>
                <Form.Control
                  type="text"
                  disabled
                  placeholder={data?.language?.language}
                />
              </Form.Group>
            ) : (
              ""
            )}
          </Form>
        </section>
      </>
    );
  };
  

export default HOC(DriverDetails)