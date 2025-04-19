import { useEffect, useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { Formik, FormikHelpers } from "formik";
import * as yup from "yup";

// Define types for initial values
interface FormValues {
  email: string;
}

const NewsletterModal = () => {
  const schema = yup.object().shape({
    email: yup.string().required(),
  });

  const initialValues: FormValues = {
    email: "",
  };

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true); // Show the modal after 5 seconds
    }, 5000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>
  ) => {
    formikHelpers.setSubmitting(false);
  };

  const handleClose = () => {
    setIsVisible(false); // Close the modal
  };

  const handleBackgroundClick = (e: any) => {
    if (e.target.id === "gi-popnews-bg") {
      setIsVisible(false); // Close the modal if clicked on background
    }
  };

  const modalBgStyle: any = {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: isVisible ? "block" : "none",
    zIndex: 25,
  };

  const modalBoxStyle: any = {
    width: "90%",
    maxWidth: "600px",
    padding: "24px",
    position: "fixed",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#fff",
    color: "#4b5966",
    display: isVisible ? "block" : "none",
    zIndex: 26,
    textAlign: "center",
    boxShadow: "0 0 25px 0 rgba(0, 0, 0, 0.1)",
    borderRadius: "5px",
  };

  const modalCloseStyle: any = {
    position: "absolute",
    top: 0,
    right: 0,
    cursor: "pointer",
    width: "30px",
    height: "30px",
    color: "red",
    borderRadius: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "24px",
    lineHeight: "1",
    opacity: "0.5",
    transition: "all 0.3s ease-in-out",
  };

  return (
    <>
      <div
        id="gi-popnews-bg"
        style={modalBgStyle}
        onClick={handleBackgroundClick}
      ></div>
      <div id="gi-popnews-box" style={modalBoxStyle}>
        <div
          id="gi-popnews-close"
          style={modalCloseStyle}
          onClick={handleClose}
        >
          ×
        </div>
        <div className="row">
          <div className="col-md-6 disp-no-767">
            <img
              src={
                process.env.NEXT_PUBLIC_URL + "/assets/img/bg/newsletter.png"
              }
              alt="newsletter"
              style={{ width: "100%", borderRadius: "5px" }}
            />
          </div>
          <div className="col-md-6">
            <div id="gi-popnews-box-content">
              <h2
                style={{
                  fontSize: "22px",
                  lineHeight: "33px",
                  fontWeight: "600",
                  margin: "0 auto 10px",
                  textTransform: "capitalize",
                }}
              >
                Newsletter.
              </h2>
              <p style={{ color: "#777" }}>
                Subscribe to Masterkart to stay updated.
              </p>

              <Formik
                validationSchema={schema}
                onSubmit={handleSubmit}
                initialValues={initialValues}
              >
                {({
                  handleSubmit,
                  handleChange,
                  values,
                  touched,
                  errors,
                }: any) => {
                  return (
                    <Form
                      noValidate
                      onSubmit={handleSubmit}
                      id="gi-popnews-form"
                    >
                      <Form.Group controlId="validationFormik01">
                        <InputGroup hasValidation>
                          <Form.Control
                            type="email"
                            name="email"
                            placeholder="Email Address"
                            value={values.email}
                            onChange={handleChange}
                            required
                            isValid={touched.email && !errors.email}
                            isInvalid={!!errors.email}
                          />
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        </InputGroup>
                      </Form.Group>
                      <button
                        type="submit"
                        style={{ marginTop: "10px" }}
                        className="gi-btn-2"
                        name="subscribe"
                      >
                        Subscribe
                      </button>
                    </Form>
                  );
                }}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewsletterModal;
