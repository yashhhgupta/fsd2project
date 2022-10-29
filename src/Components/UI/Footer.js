import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <MDBFooter className="text-center" color="white" bgColor="dark">
      <MDBContainer className="p-4">
        <section className="mb-4">
          <h6>
            <b>
              HowToBasic is a free learning website where you can learn basic
              skills in a fun and easy way.
            </b>
          </h6>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="4" md="4" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="4" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="4" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-white">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-white">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

          </MDBRow>
        </section>
      </MDBContainer>

      <div
        className="text-center p-3"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
      >
        © 2022 Copyright: &nbsp;
        <Link to="/" style={{ textDecoration: "none", color: "white" }}>
          HowToBasic
        </Link>
      </div>
    </MDBFooter>
  );
}
