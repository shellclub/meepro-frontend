import Link from "next/link";
import React from "react";

const EmailForgetPassword = () => {
  const tableStyle: any = {
    backgroundColor: "#f2f3f8",
    width: "100%",
    margin: "0 auto",
  };

  const innerTableStyle = {
    backgroundColor: "#f2f3f8",
    maxWidth: "670px",
    margin: "0 auto",
  };

  const contentWrapperStyle: any = {
    maxWidth: "670px",
    background: "#fff",
    borderRadius: "3px",
    textAlign: "center",
    boxShadow: "0 6px 18px 0 rgba(0,0,0,.06)",
  };

  const headingStyle = {
    color: "#1e1e2d",
    fontWeight: "700",
    margin: "15px 0",
    fontSize: "32px",
    fontFamily: "Rubik, sans-serif",
  };

  const paragraphStyle = {
    color: "#455056",
    fontSize: "15px",
    lineHeight: "24px",
    margin: "0",
  };

  const buttonStyle: any = {
    background: "#5daf92",
    textDecoration: "none",
    fontWeight: "500",
    marginTop: "35px",
    color: "#fff",
    textTransform: "uppercase",
    fontSize: "14px",
    padding: "10px 24px",
    display: "inline-block",
    borderRadius: "50px",
  };

  const imageStyles: any = {
    width: "150px",
    outline: "none",
    textDecoration: "none",
    msInterpolationMode: "bicubic",
    clear: "both",
    border: "0",
    height: "auto",
    float: "none",
    maxWidth: "174px",
    display: "block",
  };

  return (
    <>
      <table cellSpacing="0" cellPadding="0" width="100%" style={tableStyle}>
        <tbody>
          <tr>
            <td>
              <table
                width="100%"
                border={0}
                align="center"
                cellPadding="0"
                cellSpacing="0"
                style={innerTableStyle}
              >
                <tbody>
                  <tr>
                    <td style={{ height: "40px" }}>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>
                      <div
                        style={{
                          paddingRight: "0px",
                          paddingLeft: "0px",
                          textAlign: "center",
                          display: "flex",
                          justifyContent: "center",
                        }}
                      >
                        <img
                          style={imageStyles}
                          title="Image"
                          alt="Image"
                          src={
                            process.env.NEXT_PUBLIC_URL +
                            "/assets/img/logo/logo.png"
                          }
                          width={174}
                        />
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ height: "40px" }}>&nbsp;</td>
                  </tr>
                  <tr>
                    <td>
                      <table
                        width="95%"
                        border={0}
                        align="center"
                        cellPadding="0"
                        cellSpacing="0"
                        style={contentWrapperStyle}
                      >
                        <tbody>
                          <tr>
                            <td style={{ height: "40px" }}>&nbsp;</td>
                          </tr>
                          <tr>
                            <td style={{ padding: "0 35px" }}>
                              <div style={{ paddingBottom: "15px" }}>
                                <img
                                  src={
                                    process.env.NEXT_PUBLIC_URL +
                                    "/assets/img/email/4.jpg"
                                  }
                                  alt="forgot-email"
                                  width="100%"
                                />
                              </div>
                              <h1 style={headingStyle}>
                                You have requested to reset your password
                              </h1>
                              <p style={paragraphStyle}>
                                We cannot simply send you your old password. A
                                unique link to reset your password has been
                                generated for you. To reset your password, click
                                the following link and follow the instructions.
                              </p>
                              <Link href="/" style={buttonStyle}>
                                Reset Password
                              </Link>
                            </td>
                          </tr>
                          <tr>
                            <td style={{ height: "40px" }}>&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                  <tr>
                    <td style={{ height: "30px" }}>&nbsp;</td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default EmailForgetPassword;
