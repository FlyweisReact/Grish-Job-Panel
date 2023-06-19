/** @format */

import React from "react";
import { Form, Button } from "react-bootstrap";
import HOC from "../layout/HOC";

const ESubCategory = () => {
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
        <Con
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Image</Form.Label>
              <Form.Control type="file" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" required />
            </Form.Group>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>--select parent category--</option>
              <option></option>
            </Form.Select>
            <Button variant="outline-success" type="submit">
              Submit
            </Button>
          </Form>
        </section>
      </section>
    </>
  );
};

export default HOC(ESubCategory);
