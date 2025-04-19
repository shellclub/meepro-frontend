"use client";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { useRouter } from "next/navigation";
import { getRegistrationData } from "../login/RegisterPage";
import { useSelector } from "react-redux";
import { RootState } from "@/store";
import VendorSidebar from "../vendor-sidebar/VendorSidebar";

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

const VendorProfile = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<RegistrationData | null>(null);
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  useEffect(() => {
    const data = getRegistrationData();
    if (data.length > 0) {
      setUserData(data[data.length - 1]);
    }
  }, []);

  if (!login) {
    return (
      <div className="container">
      <p>
        Please <a href="/login">login</a> or <a href="/register">register</a> to view this page.
      </p>
    </div>
    );
  }

  if (!userData) {
    return <div></div>;
  }
  const handleSubmit = (e: any) => {
    e.preventDefault();
    router.push("/profile-edit");
  };

  return (
    <>
      <section className="gi-vendor-profile padding-tb-40">
        <div className="container">
          <Row className="mb-minus-24px">
            <VendorSidebar />
            <div className="col-lg-9 col-md-12 mb-24">
              <div className="row">
                <div className="container">
                  <div className="gi-vendor-cover">
                    <span
                      style={{ float: "inline-end", margin: "15px" }}
                      className="gi-register-wrap"
                    >
                      <button
                        onClick={handleSubmit}
                        style={{
                          backgroundColor: "white",
                          padding: "5px 10px",
                          borderRadius: "4px",
                        }}
                        className=""
                        type="submit"
                      >
                        Edit <i className="fi fi-rr-pencil"></i>
                      </button>
                    </span>
                    <div className="detail">
                      <img
                        src={
                          userData.profilePhoto ||
                          process.env.NEXT_PUBLIC_URL + "/assets/img/avatar/placeholder.jpg"
                        }
                        alt="vendor"
                      />
                      <div className="v-detail">
                        <h5>
                          {userData.firstName} {userData.lastName}
                        </h5>
                        <p>{userData.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="gi-vendor-profile-card gi-vendor-profile-card">
                <div className="gi-vendor-card-body">
                  <div className="gi-vender-about-block">
                    <h5>Account Information</h5>
                  </div>
                  <div className="row mb-minus-24px mt-m-10">
                    <div className="col-md-6 col-sm-12 mb-24">
                      <div className="gi-vendor-detail-block">
                        <h6>E-mail address</h6>
                        <ul>
                          <li>
                            <strong>Email : </strong>
                            {userData.email}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-24">
                      <div className="gi-vendor-detail-block">
                        <h6>Contact nubmer</h6>
                        <ul>
                          <li>
                            <strong>Phone Nubmer : </strong>(123){" "}
                            {userData.phoneNumber}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-24">
                      <div className="gi-vendor-detail-block">
                        <h6>Address</h6>
                        <ul>
                          <li>
                            <strong>Home : </strong> {userData.address}
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6 col-sm-12 mb-24">
                      <div className="gi-vendor-detail-block">
                        <h6>Shipping Address</h6>
                        <ul>
                          <li>
                            <strong>Office : </strong>123, 2150 Sycamore Street,
                            dummy text of the, San Jose, California - 95131.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Row>
        </div>
      </section>
    </>
  );
};

export default VendorProfile;
