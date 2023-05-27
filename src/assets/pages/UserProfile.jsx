import React from "react";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBBreadcrumb,
  MDBBreadcrumbItem,
  MDBProgress,
  MDBProgressBar,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";
import book1 from "../images/book5.jpg";
import book2 from "../images/book6.jpg";
import book3 from "../images/book7.jpg";
import book4 from "../images/book8.gif";

export default function ProfilePage() {
  return (
    <section style={{ backgroundColor: "#eee" }} className="pt-5">
      <MDBContainer className="py-5">
        <MDBRow>
          <MDBCol lg="4">
            <MDBCard className="mb-4">
              <MDBCardBody className="text-center">
                <MDBCardImage
                  src="https://cdn-icons-png.flaticon.com/128/10412/10412528.png"
                  alt="avatar"
                  className="rounded-circle"
                  style={{ width: "150px" }}
                  fluid
                />
                <p className="text-muted mb-1">user name</p>
              </MDBCardBody>
              <div class="custom-file">
                <input type="file" class="custom-file-input" id="customFile" />
                <label class="custom-file-label" for="customFile">
                  Choose file
                </label>
              </div>
            </MDBCard>

            <MDBCard className="mb-4 mb-lg-0">
              <MDBCardBody className="p-0">
                <MDBListGroup flush className="rounded-3">
                  <MDBRow className="p-4">
                    <MDBCol sm="3">
                      <MDBCardText>Full Name</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        Johnatan Smith
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                  <hr />
                  <MDBRow className="p-4">
                    <MDBCol sm="3">
                      <MDBCardText>Email</MDBCardText>
                    </MDBCol>
                    <MDBCol sm="9">
                      <MDBCardText className="text-muted">
                        example@example.com
                      </MDBCardText>
                    </MDBCol>
                  </MDBRow>
                </MDBListGroup>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol lg="8">
            <MDBRow>
              <MDBCol md="12">
                <MDBCard className="mb-4 mb-md-0">
                  <MDBCardBody>
                    <MDBCardText className="mb-4">My Work</MDBCardText>

                    <hr />
                    <MDBCardText className="mt-4 mb-1">
                      <img
                        src={book1}
                        alt="Web Design"
                        style={{
                          height: "10rem",
                          width: "7rem",
                        }}
                      />
                      Web Design
                      <span className="float-right">
                        <i className="fa fa-edit" />
                      </span>
                    </MDBCardText>
                    <hr />

                    <MDBCardText className="mt-4 mb-1">
                      <img
                        src={book2}
                        alt="Website Markup"
                        style={{
                          height: "10rem",
                          width: "7rem",
                        }}
                      />
                      Website Markup
                      <span className="float-right">
                        <i className="fa fa-edit" />
                      </span>
                    </MDBCardText>
                    <hr />

                    <MDBCardText className="mt-4 mb-1">
                      <img
                        src={book3}
                        alt="Mobile Template"
                        style={{
                          height: "10rem",
                          width: "7rem",
                        }}
                      />
                      Mobile Template
                      <span className="float-right">
                        <i className="fa fa-edit" />
                      </span>
                    </MDBCardText>
                    <hr />

                    <MDBCardText className="mt-4 mb-1">
                      <img
                        src={book4}
                        alt="Backend API"
                        style={{
                          height: "10rem",
                          width: "7rem",
                        }}
                      />
                      Backend API
                      <span className="float-right">
                        <i className="fa fa-edit" />
                      </span>
                    </MDBCardText>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </section>
  );
}
