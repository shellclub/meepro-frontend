import React from "react";

const EmailForgetPasswordThree = () => {
  return (
    <>
      <table
        width="100%"
        border={0}
        cellPadding="0"
        cellSpacing="0"
        align="center"
      >
        <tbody>
          <tr>
            <td style={{ backgroundColor: "#aecfff" }} align="center">
              <table
                width="100%"
                border={0}
                cellPadding="0"
                cellSpacing="0"
                align="center"
              >
                <tbody>
                  <tr>
                    <td width="100%" align="center">
                      <table
                        width="100%"
                        border={0}
                        cellPadding="0"
                        cellSpacing="0"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td height="40">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        width="200"
                        border={0}
                        cellPadding="0"
                        cellSpacing="0"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td width="100%" align="center">
                              <img
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/logo/logo.png"
                                }
                                alt="CodeWiz Logo"
                                width="200"
                                style={{
                                  textAlign: "center",
                                  display: "block",
                                }}
                              />
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        width="100%"
                        border={0}
                        cellPadding="0"
                        cellSpacing="0"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td height="40">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        width="500"
                        border={0}
                        cellPadding="0"
                        cellSpacing="0"
                        align="center"
                        style={{ paddingLeft: "20px", paddingRight: "20px" }}
                        className="responsive_at_550"
                      >
                        <tbody>
                          <tr>
                            <td
                              align="center"
                              style={{ border: "1px solid #96baf1" }}
                            >
                              <img
                                alt="Forgot your password?"
                                className="mcnImage"
                                src={
                                  process.env.NEXT_PUBLIC_URL +
                                  "/assets/img/email/5.jpg"
                                }
                                style={{
                                  imageRendering: "pixelated",
                                  border: "0",
                                  height: "auto",
                                  outline: "none",
                                  textDecoration: "none",
                                  verticalAlign: "bottom",
                                  maxWidth: "100%",
                                  display: "block",
                                  textAlign: "center",
                                }}
                                width="600"
                              />
                              <table
                                width="100%"
                                border={0}
                                cellPadding="0"
                                cellSpacing="0"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td height="30">&nbsp;</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                width="90%"
                                border={0}
                                cellPadding="0"
                                cellSpacing="0"
                                align="center"
                              ></table>
                              <table
                                width="90%"
                                border={0}
                                cellPadding="0"
                                cellSpacing="0"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td width="100%" align="center">
                                      <p
                                        style={{
                                          fontFamily: "Ubuntu, sans-serif",
                                          fontSize: "14px",
                                          color: "#202020",
                                          margin: "10px 0",
                                          padding: "0 20px",
                                          textAlign: "justify",
                                        }}
                                      >
                                        You received this E-mail in response to
                                        your request to reset your password.
                                      </p>
                                      <p
                                        style={{
                                          fontFamily: "Ubuntu, sans-serif",
                                          fontSize: "14px",
                                          color: "#202020",
                                          margin: "10px 0",
                                          padding: "0 20px",
                                          textAlign: "justify",
                                        }}
                                      >
                                        Click the button below to reset your
                                        password, the reset password link is
                                        only valid for 1 hour.
                                      </p>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                width="100%"
                                border={0}
                                cellPadding="0"
                                cellSpacing="0"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td height="30">&nbsp;</td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                width="200"
                                border={0}
                                cellPadding="0"
                                cellSpacing="0"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td
                                      align="center"
                                      style={{
                                        borderRadius: "5px",
                                        backgroundColor: "#1976D2",
                                      }}
                                    >
                                      <a
                                        style={{
                                          display: "block",
                                          color: "#ffffff",
                                          borderRadius: "5px",
                                          fontSize: "14px",
                                          fontWeight: "bold",
                                          textDecoration: "none",
                                          padding: "10px 20px",
                                        }}
                                        href="#"
                                      >
                                        Reset Password
                                      </a>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table
                                width="100%"
                                border={0}
                                cellPadding="0"
                                cellSpacing="0"
                                align="center"
                              >
                                <tbody>
                                  <tr>
                                    <td height="30">&nbsp;</td>
                                  </tr>
                                </tbody>
                              </table>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                      <table
                        width="100%"
                        border={0}
                        cellPadding="0"
                        cellSpacing="0"
                        align="center"
                      >
                        <tbody>
                          <tr>
                            <td height="40">&nbsp;</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
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

export default EmailForgetPasswordThree;
