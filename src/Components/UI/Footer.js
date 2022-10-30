import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <MDBFooter className={classes.input}>
      <MDBContainer className="p-4">
        <section className="mb-4" style={{textAlign: 'center'}}>
          <h6>
            <b>
              HowToBasic is a free learning website where you can learn basic
              skills in a fun and easy way.
            </b>
          </h6>
        </section>

        <section className="">
          <MDBRow>
            <MDBCol lg="3" md="4" className="mb-4 mb-md-0">
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

            <MDBCol lg="3" md="4" className="mb-4 mb-md-0">
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

            <MDBCol lg="3" md="4" className="mb-4 mb-md-0">
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
