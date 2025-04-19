"use client";
import Link from "next/link";
import Dropdown from "react-bootstrap/Dropdown";

const HeaderTop = () => {
  return (
    <>
      <div className="header-top">
        <div className="container">
          <div className="row align-itegi-center">
            {/* <!-- Header Top social Start --> */}
            <div className="col text-left header-top-left d-lg-block">
              <div className="header-top-social">
                <ul className="mb-0">
                  <li className="list-inline-item">
                    <Link href="">
                      <i className="fi fi-rr-phone-call"></i>
                    </Link>
                    +91 987 654 3210
                  </li>
                  <li className="list-inline-item">
                    <Link href="">
                      <i className="fi fi-brands-whatsapp"></i>
                    </Link>
                    +91 987 654 3210
                  </li>
                </ul>
              </div>
            </div>
            {/* <!-- Header Top social End -->
                    <!-- Header Top Message Start --> */}
            <div className="col text-center header-top-center">
              <div className="header-top-message">
                World`s Fastest Online Shopping Destination
              </div>
            </div>
            {/* <!-- Header Top Message End -->
                    <!-- Header Top Language Currency --> */}
            <div className="col header-top-right d-none d-lg-block">
              <div className="header-top-right-inner d-flex justify-content-end">
                <Link className="gi-help" href="/faq">
                  Help?
                </Link>
                <Link className="gi-help" href="/track-order">
                  Track Order?
                </Link>
                {/* <!-- Language Start --> */}
                <Dropdown className="header-top-lan-curr header-top-lan dropdown">
                  <Dropdown.Toggle variant="" className="dropdown-toggle" data-bs-toggle="dropdown">
                    English
                    <i
                      className="fi-rr-angle-small-down"
                      aria-hidden="true"
                    ></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu as='ul' className="dropdown-menu">
                    <Dropdown.Item as='li' className="active">
                      <Link className="dropdown-item" href="#">
                        English
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item as='li'>
                      <Link className="dropdown-item" href="#">
                        Italiano
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- Language End --> */}
                {/* <!-- Currency Start --> */}
                <Dropdown className="header-top-lan-curr header-top-curr dropdown">
                  <Dropdown.Toggle variant="" className="dropdown-toggle" data-bs-toggle="dropdown">
                    Dollar
                    <i
                      className="fi-rr-angle-small-down"
                      aria-hidden="true"
                    ></i>
                  </Dropdown.Toggle>
                  <Dropdown.Menu as='ul' className="dropdown-menu">
                    <Dropdown.Item as='li' className="active">
                      <Link className="dropdown-item" href="#">
                        USD $
                      </Link>
                    </Dropdown.Item>
                    <Dropdown.Item as='li'>
                      <Link className="dropdown-item" href="#">
                        EUR €
                      </Link>
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                {/* <!-- Currency End --> */}
              </div>
            </div>
            {/* <!-- Header Top Language Currency --> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderTop;
