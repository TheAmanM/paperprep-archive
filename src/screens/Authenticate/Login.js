import React, { useEffect, useState } from "react";
import Logo from "./components/Logo/Logo";
import "./Login.css";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

import { FcGoogle } from "react-icons/fc";
import { RiFacebookFill } from "react-icons/ri";
import { useAuth } from "../../services/firebase";
import { FirebaseError } from "firebase/app";
import { showErrorToast } from "../../services/ToastServices";
import { ToastContainer } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState();
  const [sentEmail, setSentEmail] = useState(false);
  const [nextButtonEnabled, setNextButtonEnabled] = useState(false);
  const [pageLoading, setPageLoading] = useState(false);
  const auth = useAuth();

  useEffect(() => {
    if (auth.verifyEmailLink(window.location.href)) {
      setPageLoading(true);
      auth
        .confirmEmailLink()
        .then(() => {
          setPageLoading(false);
        })
        .catch((e) => {
          // TODO: Show error message here
          console.log("Wrong email!");
          setPageLoading(false);
        });
    }
  }, [auth]);

  function handleGoogleAuth() {
    setPageLoading(true);
    auth
      .authenticateWithGoogle()
      .then((res) => {
        setPageLoading(false);
      })
      .catch((err) => {
        setPageLoading(false);
      });
  }

  function handleFacebookAuth() {
    auth.authenticateWithFacebook();
  }

  async function handleEmailLinkAuth() {
    console.log(`Email: ${email}`);
    setNextButtonEnabled(false);
    await auth
      .authenticateWithEmailLink(email)
      .then((result) => {
        setSentEmail(true);
        setNextButtonEnabled(true);
      })
      .catch((err) => {
        const errorCatch = new FirebaseError(err).code.toString();
        if (errorCatch.includes("invalid-email")) {
          showErrorToast("Invalid email!");
        }
      });
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
    var validRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    const result = validRegex.test(email);
    setNextButtonEnabled(result);
  }
  return (
    <>
      <div className={`login__grid ${pageLoading ? "page-loading" : ""}`}>
        <Logo />
        <div className="login__border">
          {sentEmail ? (
            <form className="login__form">
              <p>
                Great! We sent an email to <b>{email}</b> with a link. Upon
                clicking on that link, you will automatically be logged in to
                Paper Prep.{" "}
              </p>
              <button
                className="filled full-width"
                onClick={(e) => {
                  e.preventDefault();
                  setSentEmail(false);
                  localStorage.removeItem("emailForSignIn");
                }}
              >
                Back
              </button>
            </form>
          ) : (
            <>
              <div className="login__header">
                <Link to={"/"} style={{ height: "20px", width: "20px" }}>
                  <FiChevronLeft
                    size={"20px"}
                    style={{ color: "var(--secondary-color)" }}
                  />
                </Link>
                <h2 className="login__border__heading">Login / Sign Up</h2>
                <FiChevronRight size={"20px"} color={"white"} />
              </div>
              <div className="login__main">
                <div className="login__social-icons">
                  <div className="login__social-icons__google">
                    <FcGoogle size={"24px"} onClick={handleGoogleAuth} />
                    {/* <p>Google</p> */}
                  </div>
                  <div className="login__social-icons__facebook">
                    {/* <Facebook size={"22px"} /> */}
                    <RiFacebookFill
                      size={"24px"}
                      color={"#1266f1"}
                      onClick={handleFacebookAuth}
                    />
                  </div>
                </div>
                <div className="login__or">
                  <div className="login__or-line" />
                  <div className="login__or-text">or</div>
                </div>
                <form className="login__form">
                  <input
                    type="email"
                    placeholder="Email"
                    className="login__input input"
                    // value={email}
                    onChange={(e) => {
                      handleEmailChange(e);
                    }}
                  />
                  {/* <input
      type="password"
      placeholder="Password"
      className="login__password input"
    /> */}
                  {/* <p className="login__form__forgot-pass">Forgot your password?</p> */}
                  <button
                    className={`filled full-width ${
                      nextButtonEnabled ? "" : "button-loading"
                    }`}
                    type="submit"
                    onClick={(e) => {
                      e.preventDefault();
                      if (nextButtonEnabled) {
                        handleEmailLinkAuth();
                      } else {
                      }
                    }}
                  >
                    Next
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
        <Logo style={{ opacity: 0 }} />
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
