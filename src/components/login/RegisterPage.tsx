"use client";
import { useEffect, useRef, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import useSWR from "swr";
import fetcher from "../fetcher-api/Fetcher";
import Spinner from "../button/Spinner";
import { Form } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import { login } from "@/store/reducers/registrationSlice";

interface Country {
  id: string;
  name: any;
  iso2: string;
}

interface State {
  id: string;
  name: any;
  state_code: string;
}

interface City {
  id: string;
  name: any;
  iso2: string;
}

const RegisterPage = ({ onSuccess = () => {}, onError = () => {} }) => {
  const { Formik } = formik;
  const formikRef = useRef<any>(null);

  // Define Yup validation schema
  const schema = yup.object().shape({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    email: yup
      .string()
      .email("Invalid email address")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    password: yup
      .string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: yup
      .string()
      .required("Confirm password is required")
      .oneOf([yup.ref("password")], "Passwords must match"),
    address: yup.string().required("Address is required"),
    country: yup.string().required("Country is required"),
    state: yup.string().required("State is required"),
    city: yup.string().required("City is required"),
    postCode: yup.string().required("Post code is required"),
  });

  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    address: "",
    country: "",
    state: "",
    city: "",
    postCode: "",
  };

  const router = useRouter();
  const dispatch = useDispatch();

  const [filteredCountryData, setFilteredCountryData] = useState<Country[]>([]);
  const [filteredStateData, setFilteredStateData] = useState<State[]>([]);
  const [filteredCityData, setFilteredCityData] = useState<City[]>([]);
  const [loadingStates, setLoadingStates] = useState(false);
  const [loadingCities, setLoadingCities] = useState(false);

  const {
    data: country,
    error,
    isValidating,
  } = useSWR("/api/country", fetcher, {
    onSuccess,
    onError,
  });

  useEffect(() => {
    if (country) {
      setFilteredCountryData(
        country.map((country: any) => ({
          id: country.id,
          countryName: country.name,
          iso2: country.iso2,
        }))
      );
    }
  }, [country]);

  const handleCountryChange = async (e: any) => {
    const { value } = e.target;

    const formData = formikRef.current.values;

    setLoadingStates(true);
    const response = await fetcher(`/api/state`, {
      country_code: value,
      state: formData.state,
    });
    setLoadingStates(false);
    setFilteredStateData(
      response.map((state: any) => ({
        id: state.id,
        StateName: state.name,
        state_code: state.state_code,
      }))
    );
    setFilteredCityData([]);
  };

  const handleStateChange = async (e: any) => {
    const { value } = e.target;

    const formData = formikRef.current.values;

    setLoadingCities(true);
    const response = await fetcher(`/api/city`, {
      states_code: value,
      country_code: formData.country,
    });
    setLoadingCities(false);
    setFilteredCityData(
      response.map((city: any) => ({
        id: city.id,
        CityName: city.name,
        iso2: city.iso2,
      }))
    );
  };

  const onSubmit = async (values: any) => {
    const uniqueId = `${Date.now()}`;

    const newRegistration = { ...values, uid: uniqueId };

    const existingRegistrations = JSON.parse(
      localStorage.getItem("registrationData") || "[]"
    );

    if (typeof window !== "undefined") {
      localStorage.setItem(
        "registrationData",
        JSON.stringify([...existingRegistrations, newRegistration])
      );
      localStorage.setItem("login_user", JSON.stringify(newRegistration));
      dispatch(login(newRegistration));

      router.push("/");
    }

    // Reset form after successful submission
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
  };

  if (error) return <div>Error loading data</div>;
  if (!country && isValidating) return <Spinner />;

  return (
    <>
      <Breadcrumb title={"Register Page"} />
      <section className="gi-register padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              Register<span></span>
            </h2>
            <p>Best place to buy and sell digital products.</p>
          </div>
          <div className="row">
            <div className="gi-register-wrapper">
              <div className="gi-register-container">
                <div className="gi-register-form">
                  <Formik
                    innerRef={formikRef}
                    validationSchema={schema}
                    onSubmit={onSubmit}
                    initialValues={initialValues}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      values,
                      touched,
                      errors,
                    }) => (
                      <>
                        <Form noValidate onSubmit={handleSubmit}>
                          <span className="gi-register-wrap gi-register-half">
                            <label htmlFor="firstname">First Name*</label>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="firstName"
                                placeholder="Enter your first name"
                                value={values.firstName}
                                onChange={handleChange}
                                isInvalid={!!errors.firstName}
                                required
                              />
                              {errors.firstName &&
                                typeof errors.firstName === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.firstName}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="gi-register-wrap gi-register-half">
                            <label>Last Name*</label>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="lastName"
                                placeholder="Enter your last name"
                                required
                                value={values.lastName}
                                onChange={handleChange}
                                isInvalid={!!errors.lastName}
                              />
                              {errors.lastName &&
                                typeof errors.lastName === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.lastName}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-half"
                          >
                            <label>Email*</label>
                            <Form.Group>
                              <Form.Control
                                type="email"
                                name="email"
                                placeholder="Enter your email add..."
                                required
                                value={values.email}
                                onChange={handleChange}
                                isInvalid={!!errors.email}
                              />
                              {errors.email &&
                                typeof errors.email === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.email}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-half"
                          >
                            <label>Phone Number*</label>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="phoneNumber"
                                placeholder="Enter your phone number"
                                pattern="^\d{10,12}$"
                                required
                                value={values.phoneNumber}
                                onChange={handleChange}
                                isInvalid={!!errors.phoneNumber}
                              />
                              {errors.phoneNumber &&
                                typeof errors.phoneNumber === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.phoneNumber}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-half"
                          >
                            <label>Password*</label>
                            <Form.Group>
                              <Form.Control
                                type="password"
                                name="password"
                                placeholder="Enter your password"
                                pattern="^\d{6,12}$"
                                required
                                value={values.password}
                                onChange={handleChange}
                                isInvalid={!!errors.password}
                              />
                              {errors.password &&
                                typeof errors.password === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.password}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-half"
                          >
                            <label>Conform Password*</label>
                            <Form.Group>
                              <Form.Control
                                type="password"
                                name="confirmPassword"
                                placeholder="Enter your Conform password"
                                pattern="^\d{6,12}$"
                                required
                                value={values.confirmPassword}
                                onChange={handleChange}
                                isInvalid={!!errors.confirmPassword}
                              />
                              {errors.confirmPassword &&
                                typeof errors.confirmPassword === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.confirmPassword}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap"
                          >
                            <label>Address</label>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="address"
                                placeholder="Address Line 1"
                                value={values.address}
                                onChange={handleChange}
                                isInvalid={!!errors.address}
                                required
                              />
                              {errors.address &&
                                typeof errors.address === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.address}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-half"
                          >
                            <label>Country *</label>
                            <Form.Group
                              className={`gi-rg-select-inner  ${
                                !!errors.country ? "is-invalid" : ""
                              }`}
                            >
                              <Form.Select
                                size="sm"
                                name="country"
                                id="gi-select-country"
                                className="gi-register-select"
                                value={values.country || ""}
                                onChange={(e) => {
                                  handleChange(e);
                                  handleCountryChange(e);
                                }}
                                required
                                isInvalid={!!errors.country}
                              >
                                <option value="" disabled>
                                  Country
                                </option>
                                {filteredCountryData.map(
                                  (country: any, index) => (
                                    <option key={index} value={country.iso2}>
                                      {country.countryName}
                                    </option>
                                  )
                                )}
                              </Form.Select>
                            </Form.Group>
                            {errors.country &&
                              typeof errors.country === "string" && (
                                <Form.Control.Feedback type="invalid">
                                  {errors.country}
                                </Form.Control.Feedback>
                              )}
                          </span>

                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-half"
                          >
                            <label>Region State</label>
                            <Form.Group
                              className={`gi-rg-select-inner  ${
                                !!errors.state ? "is-invalid" : ""
                              }`}
                            >
                              <Form.Select
                                size="sm"
                                name="state"
                                id="gi-select-state"
                                className="gi-register-select"
                                value={values.state || ""}
                                onChange={(e) => {
                                  handleChange(e);
                                  handleStateChange(e);
                                }}
                                required
                                isInvalid={!!errors.state}
                              >
                                <option value="" disabled>
                                  Region/State
                                </option>
                                {loadingStates ? (
                                  <option disabled>Loading...</option>
                                ) : (
                                  filteredStateData.map((state: any, index) => (
                                    <option
                                      key={index}
                                      value={state.state_code}
                                    >
                                      {state.StateName}
                                    </option>
                                  ))
                                )}
                              </Form.Select>
                            </Form.Group>
                            {errors.state &&
                              typeof errors.state === "string" && (
                                <Form.Control.Feedback type="invalid">
                                  {errors.state}
                                </Form.Control.Feedback>
                              )}
                          </span>

                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-half"
                          >
                            <label>City *</label>
                            <Form.Group
                              className={`gi-rg-select-inner  ${
                                !!errors.city ? "is-invalid" : ""
                              }`}
                            >
                              <Form.Select
                                size="sm"
                                name="city"
                                id="gi-select-city"
                                className="gi-register-select"
                                value={values.city || ""}
                                onChange={handleChange}
                                isInvalid={!!errors.city}
                                required
                              >
                                <option value="" disabled>
                                  City
                                </option>
                                {loadingCities ? (
                                  <option disabled>Loading...</option>
                                ) : (
                                  filteredCityData.map((city: any, index) => (
                                    <option key={index} value={city.iso2}>
                                      {city.CityName}
                                    </option>
                                  ))
                                )}
                              </Form.Select>
                            </Form.Group>
                            {errors.city && typeof errors.city === "string" && (
                              <Form.Control.Feedback type="invalid">
                                {errors.city}
                              </Form.Control.Feedback>
                            )}
                          </span>
                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-half"
                          >
                            <label>Post Code</label>
                            <Form.Group>
                              <Form.Control
                                type="text"
                                name="postCode"
                                pattern="^\d{5,6}$"
                                placeholder="Post Code"
                                value={values.postCode}
                                onChange={handleChange}
                                isInvalid={!!errors.postCode}
                                required
                              />
                              {errors.postCode &&
                                typeof errors.postCode === "string" && (
                                  <Form.Control.Feedback type="invalid">
                                    {errors.postCode}
                                  </Form.Control.Feedback>
                                )}
                            </Form.Group>
                          </span>
                          <span className="gi-register-wrap gi-recaptcha">
                            <span
                              className="g-recaptcha"
                              data-sitekey="6LfKURIUAAAAAO50vlwWZkyK_G2ywqE52NU7YO0S"
                              data-callback="verifyRecaptchaCallback"
                              data-expired-callback="expiredRecaptchaCallback"
                            ></span>
                            <input
                              className="form-control d-none"
                              data-recaptcha="true"
                              required
                              data-error="Please complete the Captcha"
                            />
                            <span className="help-block with-errors"></span>
                          </span>
                          <span
                            style={{ marginTop: "10px" }}
                            className="gi-register-wrap gi-register-btn"
                          >
                            <span>
                              Already have an account?
                              <a href="/login">Login</a>
                            </span>
                            <button className="gi-btn-1" type="submit">
                              Register
                            </button>
                          </span>
                        </Form>
                      </>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default RegisterPage;

export const getRegistrationData = () => {
  if (typeof window !== "undefined") {
    const registrationData = localStorage.getItem("registrationData");
    return registrationData ? JSON.parse(registrationData) : [];
  }
  return [];
};

export const setRegistrationData = (data: any) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("registrationData", JSON.stringify(data));
  }
};
