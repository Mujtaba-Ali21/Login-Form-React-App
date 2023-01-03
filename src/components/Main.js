import React, { useState } from "react";
import "./Main.css";

function Main(props) {
  // State  Valiables

  const [studentArray, setStudentArray] = useState([]);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  // Helper Functions

  function submitFormFunc() {
    setStudentArray([
      {
        firstName: firstName,
        lastName: lastName,
        userEmail: userEmail,
        userPassword: userPassword,
      }
    ]);

    console.log(studentArray);
  }

  return (
    <>
      <section className="h-100 py-2  gradient-custom ">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div
                className="card bg-dark text-white"
                style={{ borderadius: "1rem" }}
              >
                <div className="card-body p-5 text-center shadow">
                  <div className="mb-md-2 mt-md-4 pb-5">
                    <h2 className="mb-5">Registration Form</h2>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="firstName">
                        <h5>First Name</h5>
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="First Name"
                        id="firstName"
                        value={firstName}
                        onChange={(e) => {
                          setFirstName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="lastName">
                        <h5>Last Name</h5>
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Last Name"
                        id="lastName"
                        value={lastName}
                        onChange={(e) => {
                          setLastName(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="email">
                        <h5>Email</h5>
                      </label>
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Email"
                        id="email"
                        value={userEmail}
                        onChange={(e) => {
                          setUserEmail(e.target.value);
                        }}
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="password">
                        <h5>Password</h5>
                      </label>
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Password"
                        id="password"
                        value={userPassword}
                        onChange={(e) => {
                          setUserPassword(e.target.value);
                        }}
                      />
                    </div>

                    <button
                      className="btn btn-outline-light btn-lg px-4 mt-2"
                      type="submit"
                      onClick={submitFormFunc}
                    >
                      Submit
                    </button>
                  </div>

                  <div className="d-flex justify-content-center text-center pt-1">
                    <a href="#!" className="text-white">
                      <i
                        className="fab fa-facebook-f fa-lg"
                        style={{ color: "#1877f2" }}
                      ></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i
                        className="fab fa-twitter fa-lg mx-4 px-2"
                        style={{ color: "#1d9bf0" }}
                      ></i>
                    </a>
                    <a href="#!" className="text-white">
                      <i
                        className="fab fa-google fa-lg"
                        style={{ color: "#DB4437" }}
                      ></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Main;
