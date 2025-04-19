"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useRouter } from "next/navigation";
import { Container, Form } from "react-bootstrap";
import { showErrorToast, showSuccessToast } from "../toast-popup/Toastify";
import { useDispatch, useSelector } from "react-redux";
import { login } from "@/store/reducers/registrationSlice";
import { RootState } from "@/store";

interface Registration {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  postCode: string;
  country: string;
  state: string;
  password: string;
  uid: any;
}

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [validated, setValidated] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  useEffect(() => {
    const storedRegistrations = JSON.parse(
      localStorage.getItem("registrationData") || "[]"
    );
    setRegistrations(storedRegistrations);
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  const handleLogin = (e: any) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
    }

    const foundUser = registrations.find(
      (user) => user.email === email && user.password === password
    );

    if (foundUser) {
      const userData = { uid: foundUser.uid, email, password };
      localStorage.setItem("login_user", JSON.stringify(userData));
      dispatch(login(foundUser));
      showSuccessToast("User Login Success");
    } else {
      showErrorToast("Invalid email or password");
    }

    setValidated(true);
  };

  return (
    <>
      <Breadcrumb title={"Login Page"} />
      <section className="gi-login padding-tb-40">
        <Container>
          <div className="section-title-2">
            <h2 className="gi-title">
              Login<span></span>
            </h2>
            <p>Get access to your Orders, Wishlist and Recommendations.</p>
          </div>
          <div className="gi-login-content">
            <div className="gi-login-box">
              <div className="gi-login-wrapper">
                <div className="gi-login-container">
                  <div className="gi-login-form">
                    <Form
                      noValidate
                      validated={validated}
                      action="#"
                      method="post"
                    >
                      <span className="gi-login-wrap">
                        <label>Email Address*</label>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            name="name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email add..."
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Please Enter correct username.
                          </Form.Control.Feedback>
                        </Form.Group>
                      </span>

                      <span
                        style={{ marginTop: "24px" }}
                        className="gi-login-wrap"
                      >
                        <label>Password*</label>
                        <Form.Group>
                          <Form.Control
                            type="password"
                            name="password"
                            min={6}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter your password"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Password must be at least 6 characters
                          </Form.Control.Feedback>
                        </Form.Group>
                      </span>

                      <span className="gi-login-wrap gi-login-fp">
                        <label>
                          <Link href="/forgot-password">Forgot Password?</Link>
                        </label>
                      </span>
                      <span className="gi-login-wrap gi-login-btn">
                        <span>
                          <a href="/register" className="">
                            Create Account?
                          </a>
                        </span>
                        <button
                          onClick={handleLogin}
                          className="gi-btn-1 btn"
                          type="submit"
                        >
                          Login
                        </button>
                      </span>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div className="gi-login-box d-n-991">
              <div className="gi-login-img">
                <img
                  src={
                    process.env.NEXT_PUBLIC_URL + "/assets/img/common/login.png"
                  }
                  alt="login"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default LoginPage;
