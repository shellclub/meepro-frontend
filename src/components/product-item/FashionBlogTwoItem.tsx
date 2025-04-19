import Link from "next/link";
import React from "react";

const FashionBlogTwoItem = ({ data }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="blog-info blog-3">
        <figure className="blog-img">
          <Link onClick={handleSubmit} href="/">
            <img src={data.image} alt="news imag" />
          </Link>
        </figure>
        <div className="detail">
          <div className="date">
            <h4>{data.date}</h4>
            <span>{data.month}</span>
          </div>
          <h3>
            <Link onClick={handleSubmit} href="/">
              {data.title}
            </Link>
          </h3>
          <div className="more-info">
            <Link onClick={handleSubmit} href="/blog-detail-left-sidebar">
              Read More <i className="fi-rr-angle-double-small-right"></i>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default FashionBlogTwoItem;
