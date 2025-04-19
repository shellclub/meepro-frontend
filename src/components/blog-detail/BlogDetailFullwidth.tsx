"use client";
import { useEffect, useRef, useState } from "react";
import { Col, Form, InputGroup } from "react-bootstrap";
import * as formik from "formik";
import * as yup from "yup";
import CommentReplyingForm from "./CommentReplyingForm";

const getRegistrationData = () => {
  if (typeof window !== "undefined") {
    const data = localStorage.getItem("registrationData");
    return data ? JSON.parse(data) : [];
  }
  return [];
};

const BlogDetailFullwidth = ({ order = "" }: any) => {
  const { Formik } = formik;
  const formikRef = useRef<any>(null);
  const schema = yup.object().shape({
    comment: yup.string().required(),
  });

  const [userData, setUserData] = useState<any | null>(null);

  const [comments, setComments] = useState<any>([
    {
      name: "John Deo",
      lname: "",
      email: "john@example.com",
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      date: "October 14, 2018",
      profilePhoto: "",
      replies: [],
    },
    {
      name: "Jenifer Lowes",
      lname: "",
      email: "jenifer@example.com",
      comment: "Lorem ipsum dolor sit amet, consectetur adipisicing elit.",
      date: "October 14, 2018",
      profilePhoto: "",
      replies: [],
    },
  ]);

  const [replyingTo, setReplyingTo] = useState<number | null>(null);
  const [newReply, setNewReply] = useState({
    reply: "",
  });

  useEffect(() => {
    const data = getRegistrationData();
    if (data.length > 0) {
      setUserData(data[data.length - 1]);
    }
  }, []);

  const onSubmit = (data: any) => {
    const date = new Date().toLocaleDateString();
    setComments((prevComments: any) => [
      ...prevComments,
      {
        ...data,
        date,
        profilePhoto: userData?.profilePhoto || "",
        name: userData?.firstName || "",
        lname: userData?.lastName || "",
        email: userData?.email || "",
        replies: [],
      },
    ]);

    // Reset form after successful submission
    if (formikRef.current) {
      formikRef.current.resetForm();
    }
  };

  const onReplySubmit = (data: any, index: number) => {
    const date = new Date().toLocaleDateString();
    setComments((prevComments) => {
      const updatedComments = [...prevComments];
      updatedComments[index] = {
        ...updatedComments[index],
        replies: [
          ...updatedComments[index].replies,
          {
            ...data,
            date,
            profilePhoto: userData?.profilePhoto || "",
            name: userData?.firstName || "",
            lname: userData?.lastName || "",
            email: userData?.email || "",
          },
        ],
      };
      return updatedComments;
    });

    setReplyingTo(null);
  };

  const handleReplyClick = (index: number) => {
    setReplyingTo(index);
  };

  return (
    <>
      <Col lg={12} md={12} className={`gi-blogs-rightside ${order} `}>
        {/* <!-- Blog content Start --> */}
        <div className="gi-blogs-content">
          <div className="gi-blogs-inner">
            <div className="gi-single-blog-item">
              <div className="single-blog-info">
                <figure className="blog-img">
                  <a href="#">
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + "/assets/img/blog/8.jpg"
                      }
                      alt="news imag"
                    />
                  </a>
                </figure>
                <div className="single-blog-detail">
                  <label>
                    June 30,2022 - <a href="#">Organic</a>
                  </label>
                  <h3>Marketing Guide: 5 Steps to Success.</h3>
                  <p className="gi-text">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industrys
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                  <p className="gi-text-highlight">
                    The standard chunk of Lorem Ipsum used since the 1500s is
                    reproduced below for those interested. Sections 1.10.32 and
                    1.10.33 from de Finibus Bonorum et Malorum by Cicero.
                  </p>
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of passages of Lorem Ipsum
                    classical Latin literature from 45 BC, making it over 2000
                    years old. Richard McClintock, a Latin professor at
                    Hampden-Sydney College in Virginia
                  </p>
                  <div className="sub-img">
                    <div className="row">
                      <div className="col-md-6">
                        <img
                          src={
                            process.env.NEXT_PUBLIC_URL +
                            "/assets/img/blog/3.jpg"
                          }
                          alt="blog"
                        />
                      </div>
                      <div className="col-md-6">
                        <img
                          src={
                            process.env.NEXT_PUBLIC_URL +
                            "/assets/img/blog/4.jpg"
                          }
                          alt="blog"
                        />
                      </div>
                    </div>
                  </div>
                  <p>
                    It is a long established fact that a reader will be
                    distracted by the readable content of a page distracted by
                    the readable when looking at its layout. The point of using
                    Lorem Ipsum is that it has a more-or-less normal
                    distribution of letters, as opposed to using.
                  </p>
                  <p>
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered distracted by the
                    readable alteration in some form, by injected humour.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- Comments Start -->  */}
          <div className="gi-blog-comments m-t-80">
            <div className="gi-blog-cmt-preview">
              <div className="gi-blog-comment-wrapper">
                <h4 className="gi-blog-dgi-title">
                  Comments : {comments.length}
                </h4>
                {comments.map((data: any, index: number) => (
                  <div key={index}>
                    <div className="gi-single-comment-wrapper mt-35">
                      <div className="gi-blog-user-img">
                        <img
                          src={
                            data.profilePhoto ||
                            process.env.NEXT_PUBLIC_URL +
                              "/assets/img/avatar/placeholder.jpg"
                          }
                          alt="blog image"
                        />
                      </div>
                      <div className="gi-blog-comment-content">
                        <h5>
                          {data.name} {data.lname}
                        </h5>
                        <span>{data.date} </span>
                        <p>{data.comment} </p>

                        {replyingTo === index ? (
                          <div className="gi-blog-cmt-form">
                            <div className="gi-blog-reply-wrapper mt-50">
                              <CommentReplyingForm
                                index={index}
                                onFormSubmit={onReplySubmit}
                              />
                            </div>
                          </div>
                        ) : (
                          <div className="gi-blog-details-btn">
                            <a onClick={() => handleReplyClick(index)}>Reply</a>
                          </div>
                        )}
                      </div>
                    </div>

                    {data.replies.map((reply: any, replyIndex: number) => (
                      <div
                        key={replyIndex}
                        className="gi-single-comment-wrapper sub-cmt"
                      >
                        <div className="gi-blog-user-img">
                          <img
                            src={
                              reply.profilePhoto ||
                              process.env.NEXT_PUBLIC_URL +
                                "/assets/img/avatar/placeholder.jpg"
                            }
                            alt="blog image"
                          />
                        </div>
                        <div className="gi-blog-comment-content">
                          <h5>
                            {reply.name} {reply.lname}
                          </h5>
                          <span>{reply.date}</span>
                          <p>{reply.reply}</p>
                          {/* <div className="gi-blog-details-btn">
                              <a >
                                Reply
                              </a>
                            </div> */}
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="gi-blog-cmt-form">
              <div className="gi-blog-reply-wrapper mt-50">
                <h4 className="gi-blog-dgi-title">Leave A Reply</h4>

                <Formik
                  innerRef={formikRef}
                  validationSchema={schema}
                  onSubmit={onSubmit}
                  initialValues={{
                    comment: "",
                  }}
                >
                  {({
                    handleSubmit,
                    handleChange,
                    values,
                    touched,
                    errors,
                  }) => (
                    <Form
                      noValidate
                      onSubmit={handleSubmit}
                      className={`gi-blog-form ${
                        errors.length ? "was-validated" : ""
                      }`}
                      action="#"
                    >
                      <div className="row">
                        <div className="col-md-12">
                          <div className="gi-text-leave">
                            <Form.Group>
                              <InputGroup hasValidation>
                                <Form.Control
                                  as="textarea"
                                  name="comment"
                                  value={values.comment}
                                  onChange={handleChange}
                                  placeholder="Message"
                                  rows={3}
                                  required
                                  isInvalid={!!errors.comment}
                                />
                                <Form.Control.Feedback
                                  style={{ marginBottom: "10px" }}
                                  type="invalid"
                                >
                                  Please enter comment
                                </Form.Control.Feedback>
                              </InputGroup>
                            </Form.Group>
                            <button type="submit" className="gi-btn-2 mt-4">
                              Submit
                            </button>
                          </div>
                        </div>
                      </div>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          {/* <!-- Comments End --> */}
        </div>
        {/* <!--Blog content End --> */}
      </Col>
    </>
  );
};

export default BlogDetailFullwidth;
