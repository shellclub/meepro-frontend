"use client";
import { RootState } from "@/store";
import React from "react";
import { useSelector } from "react-redux";

const TrackOrder = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );

  if (!login) {
    return (
      <div className="container">
      <p>
        Please <a href="/login">login</a> or <a href="/register">register</a> to view this page.
      </p>
    </div>
    );
  }
  return (
    <>
      <section className="gi-track padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              Track<span> Order</span>
            </h2>
            <p>We delivering happiness and needs, Faster than you can think.</p>
          </div>
          <div className="row">
            <div className="container">
              <div className="gi-track-box">
                {/* <!-- Details--> */}
                <div className="row">
                  <div className="col-md-4 m-b-767">
                    <div className="gi-track-card">
                      <span className="gi-track-title">order</span>
                      <span>#6152</span>
                    </div>
                  </div>
                  <div className="col-md-4 m-b-767">
                    <div className="gi-track-card">
                      <span className="gi-track-title">Grasshoppers</span>
                      <span>v534hb</span>
                    </div>
                  </div>
                  <div className="col-md-4 m-b-767">
                    <div className="gi-track-card">
                      <span className="gi-track-title">Expected date</span>
                      <span>June 17, 2019</span>
                    </div>
                  </div>
                </div>
                {/* <!-- Progress--> */}
                <div className="gi-steps">
                  <div className="gi-steps-body">
                    <div className="gi-step gi-step-completed">
                      <span className="gi-step-indicator">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-comment-check"></i>
                      </span>
                      Order<br></br> confirmed
                    </div>

                    <div className="gi-step gi-step-completed">
                      <span className="gi-step-indicator">
                        <i className="fa fa-check" aria-hidden="true"></i>
                      </span>
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-settings"></i>
                      </span>
                      Processing<br></br> order
                    </div>
                    <div className="gi-step gi-step-active">
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-gift"></i>
                      </span>
                      Quality<br></br> check
                    </div>
                    <div className="gi-step">
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-truck-side"></i>
                      </span>
                      Product<br></br> dispatched
                    </div>
                    <div className="gi-step">
                      <span className="gi-step-icon">
                        <i className="fi fi-rs-home"></i>
                      </span>
                      Product<br></br> delivered
                    </div>
                  </div>
                  <div className="gi-steps-header">
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{ width: "50%" }}
                        aria-valuenow={50}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrackOrder;
