import React from "react";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
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
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
            distinctio earum repellat quaerat voluptatibus placeat nam, commodi
            optio pariatur est quia magnam eum harum corrupti dicta, aliquam
            sequi voluptate quas.
          </p>
        </section>

        <section className="">
          <MDBRow>
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
