"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import Breadcrumb from "../breadcrumb/Breadcrumb";
import { useRouter } from "next/navigation";
import { Container, Form } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

import { signIn } from "next-auth/react";
import { toast } from "react-toastify";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: any) => {
    e.preventDefault();
    const res = await signIn("credentials", {
      username: email,
      password: password,
      redirect: false,
    });

    if (res?.error) {
      toast.error(res.error);
    } else {
      toast.success("ลงชื่อเข้าใช่สำเร็จ");
      router.push("/home");
    }
  };
  return (
    <>
      <Breadcrumb title={"Login Page"} />
      <section className="gi-login padding-tb-40">
        <Container>
          <div className="section-title-2">
            <h2 className="gi-title">
              ลงชื่อเข้าใข้งาน<span></span>
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
                        <label>อีเมล*</label>
                        <Form.Group>
                          <Form.Control
                            type="text"
                            name="name"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="กรุณากรอกอีเมลของคุณ"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            กรุณณากรอกให้ถูกต้อง
                          </Form.Control.Feedback>
                        </Form.Group>
                      </span>

                      <span
                        style={{ marginTop: "24px" }}
                        className="gi-login-wrap"
                      >
                        <label>รหัสผ่าน*</label>
                        <Form.Group>
                          <Form.Control
                            type="password"
                            name="password"
                            min={8}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="กรุณากรอกรหัสผ่านของคุณ"
                            required
                          />
                          <Form.Control.Feedback type="invalid">
                            Password must be at least 6 characters
                          </Form.Control.Feedback>
                        </Form.Group>
                      </span>

                      <span className="gi-login-wrap gi-login-fp">
                        <label>
                          <Link href="/forgot-password">ลืมรหัสผ่าน?</Link>
                        </label>
                      </span>
                      <span className="gi-login-wrap gi-login-btn">
                        <span>
                          <a href="/register" className="">
                            สร้างบัญชี?
                          </a>
                        </span>
                        <button
                          onClick={handleLogin}
                          className="gi-btn-1 btn"
                          type="submit"
                        >
                          ลงชื่อเข้าใข้งาน
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
