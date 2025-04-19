"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  getRegistrationData,
  setRegistrationData,
} from "../login/RegisterPage";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { toggleSwitch } from "@/store/reducers/cartSlice";
import ProfileEdit from "./ProfileEdit";
import { Form } from "react-bootstrap";

export interface RegistrationData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  address: string;
  city: string;
  postCode: string;
  country: string;
  state: string;
  profilePhoto?: string;
  description: string;
}

const VandorEdit = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const isSwitchOnFromRedux = useSelector((state: RootState) => state.cart.isSwitchOn);
  const [isSwitchOn, setIsSwitchOn] = useState<boolean>(false);
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState<RegistrationData>({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
    city: "",
    postCode: "",
    country: "",
    state: "",
    profilePhoto: "",
    description: "",
  });

  useEffect(() => {
    const data = getRegistrationData();
    if (data.length > 0) {
      const user = data[data.length - 1];
      setFormData(user);
    }
  }, []);

  useEffect(() => {
    // Update local state once the component is mounted on the client
    setIsSwitchOn(isSwitchOnFromRedux);
  }, [isSwitchOnFromRedux]);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSwitchToggle = () => {
    dispatch(toggleSwitch());
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prevData) => ({
          ...prevData,
          profilePhoto: reader.result as string,
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      return;
    }

    // Update the registration data in local storage
    const updatedData = [...getRegistrationData()];
    updatedData[updatedData.length - 1] = formData;
    setRegistrationData(updatedData);

    // Redirect to the user profile page after editing
    router.push("/vendor-profile");
  };

  if (!isSwitchOn) {
    return <ProfileEdit />;
  }
  return (
    <>
      <section className="gi-register padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              Edit Profile<span></span>
            </h2>
            <p>Best place to buy and sell digital products.</p>
          </div>
          <div className="row">
            <div className="gi-register-wrapper">
              <div className="gi-register-container">
                <div className="gi-register-form">
                <span
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "10px",
                    }}
                  >
                    {isSwitchOn ? "Switch is Vendor" : "Switch is OFF"}
                  </span>

                  <span
                    style={{
                      display: "flex",
                      justifyContent: "end",
                      marginTop: "10px",
                    }}
                    className="switch"
                  >
                    <input
                      onChange={handleSwitchToggle}
                      checked={isSwitchOn}
                      id="switch-rounded"
                      type="checkbox"
                    />
                    <label htmlFor="switch-rounded"></label>
                  </span>
                  <Form noValidate validated={validated}
                    className="gi-blog-form"
                    action="#"
                    method="post"
                    onSubmit={handleSubmit}
                  >
                    <span className="gi-register-wrap gi-register-half">
                      <label>First Name*</label>
                      <Form.Group>
                        <Form.Control
                          type="text"
                          name="firstName"
                          placeholder="Enter your first name"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                         <Form.Control.Feedback type="invalid">
                          Please Enter First Name.
                        </Form.Control.Feedback>
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
                          value={formData.lastName}
                          onChange={handleInputChange}
                        />
                         <Form.Control.Feedback type="invalid">
                          Please Enter Last Name.
                        </Form.Control.Feedback>
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
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter correct username.
                        </Form.Control.Feedback>
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
                          value={formData.phoneNumber}
                          onChange={handleInputChange}
                        />
                        <Form.Control.Feedback type="invalid">
                          Please Enter 10-12 digit number.
                        </Form.Control.Feedback>
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
                          value={formData.address}
                          onChange={handleInputChange}
                          required
                        />
                         <Form.Control.Feedback type="invalid">
                          Please Enter Address.
                        </Form.Control.Feedback>
                      </Form.Group>
                    </span>
                    <span
                      style={{ marginTop: "10px" }}
                      className="gi-register-wrap"
                    >
                      <div className="gi-leave-form">
                        <Form.Group>
                          <label>About Me</label>
                          <Form.Control
                            as="textarea"
                            rows={3}
                            name="description"
                            placeholder="Message"
                            required
                            value={formData.description}
                            onChange={handleInputChange}
                          />
                          <Form.Control.Feedback type="invalid">
                          This field is required
                          </Form.Control.Feedback>
                        </Form.Group>
                      </div>
                    </span>

                    <span
                      style={{ paddingTop: "10px", marginTop: "10px" }}
                      className="gi-register-wrap"
                    >
                      <label>Profile Photo</label>
                      <input
                        style={{ paddingTop: "10px" }}
                        type="file"
                        id="profilePhoto"
                        name="profilePhoto"
                        onChange={handleFileChange}
                      />
                      {formData.profilePhoto && (
                        <img
                          src={formData.profilePhoto}
                          alt="Profile"
                          width="100"
                        />
                      )}
                    </span>
                    <span
                      style={{ justifyContent: "end", marginTop: "10px" }}
                      className="gi-register-wrap gi-register-btn"
                    >
                      <button className="gi-btn-1" type="submit">
                        Save
                      </button>
                    </span>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default VandorEdit;
