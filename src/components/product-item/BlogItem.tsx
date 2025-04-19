import Link from "next/link";
import React from "react";

function BlogItem({ data }) {
  const handleSubmit = (e: any) => {
    e.preventDefault();
  };

  return (
    <>
      <figure className="blog-img">
        <Link onClick={handleSubmit} href="#">
          <img src={data.image} alt="news imag" />
        </Link>
      </figure>
      <div className="detail">
        <label>
          {data.date} -{" "}
          <Link onClick={handleSubmit} href="#">
            {data.name}
          </Link>
        </label>
        <h3>
          <Link onClick={handleSubmit} href="#">
            {data.title}
          </Link>
        </h3>
        <div className="more-info">
          <Link href="/blog-detail-left-sidebar">
            Read More
            <i className="fi-rr-angle-double-small-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BlogItem;
