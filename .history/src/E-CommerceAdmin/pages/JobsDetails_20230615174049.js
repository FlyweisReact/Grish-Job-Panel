/** @format */

import React, { useCallback, useEffect, useState } from "react";
import { Form } from "react-bootstrap";
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

  return (
    <>
      <section>
        <p className="headP"> Dashboard / Jobs / {data?.jobtitle} </p>

        <Form className="mt-4" style={{ padding: "20px" }}>
          {data?.employer?.employer ? (
            <Form.Group className="mb-3">
              <Form.Label>Employer</Form.Label>
              <Form.Control
                type="text"
                disabled
                placeholder={data?.employer?.employer}
              />
            </Form.Group>
          ) : (
            ""
          )}
          {data?.jobtitle ? (
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" disabled placeholder={data?.jobtitle} />
            </Form.Group>
          ) : (
            ""
          )}
        
          {data?.jobtitle ? (
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" disabled placeholder={data?.jobtitle} />
            </Form.Group>
          ) : (
            ""
          )}
        
          {data?.jobtitle ? (
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" disabled placeholder={data?.jobtitle} />
            </Form.Group>
          ) : (
            ""
          )}
        
          {data?.jobtitle ? (
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" disabled placeholder={data?.jobtitle} />
            </Form.Group>
          ) : (
            ""
          )}
        
          {data?.jobtitle ? (
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" disabled placeholder={data?.jobtitle} />
            </Form.Group>
          ) : (
            ""
          )}
        
          {data?.jobtitle ? (
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" disabled placeholder={data?.jobtitle} />
            </Form.Group>
          ) : (
            ""
          )}
        
          {data?.jobtitle ? (
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" disabled placeholder={data?.jobtitle} />
            </Form.Group>
          ) : (
            ""
          )}
        
          {data?.jobtitle ? (
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" disabled placeholder={data?.jobtitle} />
            </Form.Group>
          ) : (
            ""
          )}
        
          {data?.jobtitle ? (
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" disabled placeholder={data?.jobtitle} />
            </Form.Group>
          ) : (
            ""
          )}
        
          {data?.jobtitle ? (
            <Form.Group className="mb-3">
              <Form.Label>Job Title</Form.Label>
              <Form.Control type="text" disabled placeholder={data?.jobtitle} />
            </Form.Group>
          ) : (
            ""
          )}
        

          <Form.Group className="mb-3">
            <Form.Label>Job Type</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.jobtype} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Vehicle Type</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder={data?.vehicletype}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Gender</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.gender} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Description</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder={data?.description}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Contact Number</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder={data?.contactNumber}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.location} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Address</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.address} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Postal Code</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.postalCode} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Salary Offered</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder={data?.salaryOffer}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Total Experince</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder={data?.totalExperience}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Qualification</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder={data?.qualification}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Closing Date</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.closeDate} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Auto Clode</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.autoClose} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>FullName</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.fullName} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>EAdminDelivery</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.email} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Start Chat</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.startChat} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Details Of Company</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder={data?.detailsOfCompany}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Website</Form.Label>
            <Form.Control type="text" disabled placeholder={data?.website} />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Language</Form.Label>
            <Form.Control
              type="text"
              disabled
              placeholder={data?.language?.language}
            />
          </Form.Group>
        </Form>
      </section>
    </>
  );
};

export default HOC(JobsDetails);
