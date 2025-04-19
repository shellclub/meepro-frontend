import { getRegistrationData } from "@/components/login/RegisterPage";
import RatingComponent from "@/components/stars/RatingCompoents";
import { RootState } from "@/store";
import React, { useEffect, useState } from "react";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const DiscountContent = () => {
  const login = useSelector(
    (state: RootState) => state.registration.isAuthenticated
  );
  const [userData, setUserData] = useState<any | null>(null);
  const [validated, setValidated] = useState(false);
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [reviews, setReviews] = useState([
    {
      name: "Moris Willson",
      rating: 3,
      comment:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s...",
      avatar: "/assets/img/avatar/placeholder.jpg",
    },
  ]);

  useEffect(() => {
    if (login) {
      const data = getRegistrationData();
      if (data?.length > 0) {
        setUserData(data[data.length - 1]);
      }
    }
  }, [login]);

  const handleAccordionToggle = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    if (form.checkValidity() === false) {
      e.stopPropagation();
    } else {
      if (userData && comment && rating) {
        setReviews([
          ...reviews,
          {
            name: `${userData.firstName} ${userData.lastName}`,
            rating,
            comment,
            avatar: userData.profilePhoto || "/assets/img/avatar/placeholder.jpg",
          },
        ]);

        setComment("");
        setRating(0);
      }
    }

    setValidated(true);
  };
  return (
    <>
      <div className={`gi-accordion style-1 gi-single-pro-tab-content`}>
        <div
          className={`gi-accordion-item ${
            activeAccordion === 0 ? "active" : ""
          }`}
        >
          <h4
            className="gi-accordion-header"
            onClick={() => handleAccordionToggle(0)}
          >
            Product Detail
          </h4>
          <div
            className={`gi-accordion-body ${
              activeAccordion === 0 ? "show" : ""
            }`}
          >
            <div className="gi-single-pro-tab-desc">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <ul>
                <li>Any Product types that You want - Simple, Configurable</li>
                <li>Downloadable/Digital Products, Virtual Products</li>
                <li>Inventory Management with Backordered items</li>
                <li>Flatlock seams throughout.</li>
              </ul>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries, but also the leap into electronic
                typesetting, remaining essentially unchanged.
              </p>
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which look even slightly
                believable. If you are going to use a passage of Lorem Ipsum,
                you need to be sure there anything embarrassing hidden in the
                middle of text. All the Lorem Ipsum generators on the Internet
                tend to repeat predefined chunks as necessary, making this the
                first true generator on the Internet. It uses a dictionary of
                over 200 Latin words, combined with a handful of model sentence
                structures, to generate Lorem Ipsum which looks reasonable. The
                generated Lorem Ipsum is therefore always free from repetition,
                injected humour, or non-characteristic words etc.
              </p>
            </div>
          </div>
        </div>
        <div
          className={`gi-accordion-item ${
            activeAccordion === 1 ? "active" : ""
          }`}
        >
          <h4
            className="gi-accordion-header"
            onClick={() => handleAccordionToggle(1)}
          >
            Specifications
          </h4>
          <div
            className={`gi-accordion-body ${
              activeAccordion === 1 ? "show" : ""
            }`}
          >
            <div className="gi-single-pro-tab-moreinfo">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived
                not only five centuries.
              </p>
              <ul>
                <li>
                  <span>Model</span> SKU140
                </li>
                <li>
                  <span>Weight</span> 500 g
                </li>
                <li>
                  <span>Dimensions</span> 35 × 30 × 7 cm
                </li>
                <li>
                  <span>Color</span> Black, Pink, Red, White
                </li>
                <li>
                  <span>Size</span> 10 X 20
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`gi-accordion-item ${
            activeAccordion === 2 ? "active" : ""
          }`}
        >
          <h4
            className="gi-accordion-header"
            onClick={() => handleAccordionToggle(2)}
          >
            Vendor.
          </h4>
          <div
            className={`gi-accordion-body ${
              activeAccordion === 2 ? "show" : ""
            }`}
          >
            <div className="gi-single-pro-tab-moreinfo">
              <div className="gi-product-vendor">
                <div className="gi-vendor-info">
                  <span>
                    <img
                      src={
                        process.env.NEXT_PUBLIC_URL + "/assets/img/vendor/3.jpg"
                      }
                      alt="vendor"
                    />
                  </span>
                  <div>
                    <h5>Ocean Crate</h5>
                    <p>Products : 358</p>
                    <p>Sales : 5587</p>
                  </div>
                </div>
                <div className="gi-detail">
                  <ul>
                    <li>
                      <span>Phone No. :</span> +00 987654321
                    </li>
                    <li>
                      <span>Email. :</span> Example@gmail.com
                    </li>
                    <li>
                      <span>Address. :</span> 2548 Broaddus Maple Court,
                      Madisonville KY 4783, USA.
                    </li>
                  </ul>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the s standard
                    dummy text ever since the 1500s, when an unknown printer
                    took a galley of type and scrambled it to make a type
                    specimen book. It has survived not only five centuries, but
                    also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          className={`gi-accordion-item ${
            activeAccordion === 3 ? "active" : ""
          }`}
        >
          <h4
            className="gi-accordion-header"
            onClick={() => handleAccordionToggle(3)}
          >
            Reviews
          </h4>
          <div
            className={`gi-accordion-body p-b-0 ${
              activeAccordion === 3 ? "show" : ""
            }`}
          >
            <div id="gi-spt-nav-review" className="a-tab-pane">
            {!login ? (
                <div className="container">
                  <p>
                    Please <a href="/login">login</a> or{" "}
                    <a href="/register">register</a> to review the product.
                  </p>
                </div>
              ) : (
                <div className="row">
                  <div className="gi-t-review-wrapper">
                    {reviews.map((data, index) => (
                      <div key={index} className="gi-t-review-item">
                        <div className="gi-t-review-avtar">
                          <img
                            src={
                              data.avatar ||
                              process.env.NEXT_PUBLIC_URL +
                                "/assets/img/avatar/placeholder.jpg"
                            }
                            alt="user"
                          />
                        </div>
                        <div className="gi-t-review-content">
                          <div className="gi-t-review-top">
                            <div className="gi-t-review-name">{data.name}</div>
                            <div className="gi-t-review-rating">
                              {[...Array(5)].map((_, i) => (
                                <i
                                  key={i}
                                  className={`gicon gi-star ${
                                    i < data.rating ? "fill" : "gi-star-o"
                                  }`}
                                ></i>
                              ))}
                            </div>
                          </div>
                          <div className="gi-t-review-bottom">
                            <p>{data.comment}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="gi-ratting-content">
                    <h3>Add a Review</h3>
                    <div className="gi-ratting-form">
                      <Form
                        noValidate
                        validated={validated}
                        onSubmit={handleSubmit}
                        action="#"
                      >
                        <div className="gi-ratting-star">
                          <RatingComponent
                            onChange={setRating}
                            value={rating}
                          />
                        </div>
                        <div className="gi-ratting-input form-submit">
                          <Form.Group>
                            <Form.Control
                              as="textarea"
                              name="comment"
                              placeholder="Enter Your Comment"
                              value={comment}
                              onChange={(e) => setComment(e.target.value)}
                              required
                            />
                            <Form.Control.Feedback
                              type="invalid"
                            >
                              Please Enter your reply
                            </Form.Control.Feedback>
                          </Form.Group>
                          <button style={{marginTop : "15px"}} className="gi-btn-2" type="submit">
                            Submit
                          </button>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DiscountContent;
