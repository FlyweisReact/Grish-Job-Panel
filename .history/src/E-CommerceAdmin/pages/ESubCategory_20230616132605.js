/** @format */

import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import HOC from "../layout/HOC";

const ESubCategory = () => {
  const Id = localStorage.getItem("Id")
  const [ error , setErro ]

  const ResetPassword = async (e) => {
    e.preventDefault()
    try{ 

    }catch(e) { 
      console.log(e)
    }
  }

  return (
    <>
      <section>
        <p className="headP">Dashboard / Forget Password</p>
        <div
          className="pb-4 sticky top-0  w-full flex justify-between items-center"
          style={{ width: "98%", marginLeft: "2%" }}
        >
          <span
            className="tracking-widest text-slate-900 font-semibold uppercase"
            style={{ fontSize: "1.5rem" }}
          >
            Forget Password's
          </span>
        </div>

        <section className="sectionCont">
          <Container>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" required />
              </Form.Group>
              <Button variant="outline-success" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </section>
      </section>
    </>
  );
};

export default HOC(ESubCategory);
