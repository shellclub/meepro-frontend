import React from "react";

const ResetPassword = () => {
  return (
    <>
      <section className="gi-login padding-tb-40">
        <div className="container">
          <div className="section-title-2">
            <h2 className="gi-title">
              Reset Password<span></span>
            </h2>
            <p>Please set your password unique.</p>
          </div>
          <div className="gi-login-content">
            <div className="gi-login-box">
              <div className="gi-login-wrapper">
                <div className="gi-login-container">
                  <div className="gi-login-form">
                    <form action="#" method="post">
                      <span className="gi-login-wrap">
                        <label>New Password*</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="Enter your password"
                          required
                        />
                      </span>
                      <span className="gi-login-wrap">
                        <label>Confirm Password*</label>
                        <input
                          type="password"
                          name="password"
                          placeholder="ReEnter your password"
                          className="mb-24"
                          required
                        />
                      </span>
                      <span className="gi-login-wrap gi-login-btn gi-reset-btn mt-0">
                        <button className="gi-btn-1 btn" type="submit">
                          Submit
                        </button>
                      </span>
                    </form>
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
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
