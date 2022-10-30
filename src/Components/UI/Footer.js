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

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <MDBFooter className={classes.input}>
      <MDBContainer className="p-4">

        <section className="">
          <form action="">
            <MDBRow className="d-flex justify-content-center">
              <MDBCol size="auto">
                <p className="pt-2">
                  <strong>Sign up for our newsletter</strong>
                </p>
              </MDBCol>

              <MDBCol md="5" start="12">
                <MDBInput
                  contrast
                  type="email"
                //   label="Email address"
                  className="mb-4"
                />
              </MDBCol>

              <MDBCol size="auto">
                <MDBBtn outline color="light" type="submit" className={classes.Button}>
                  Subscribe
                </MDBBtn>
              </MDBCol>
            </MDBRow>
          </form>
        </section>

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
                  <a href="#!" className="text-black">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="4" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-black">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg="4" md="4" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-black">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
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
            <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
              <h5 className="text-uppercase">Links</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-black">
                    Link 1
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 2
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 3
                  </a>
                </li>
                <li>
                  <a href="#!" className="text-black">
                    Link 4
                  </a>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>
    </MDBFooter>
  );
}
