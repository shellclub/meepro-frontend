import React from "react";
import useSWR from "swr";
import fetcher from "@/components/fetcher-api/Fetcher";
import Spinner from "@/components/button/Spinner";

const RecentBlog = ({
  onSuccess = () => {},
  onError = () => {},
  hasPaginate = false,
}) => {

  const { data, error } = useSWR(`/api/recentblog`, fetcher, {
    onSuccess,
    onError,
  });

  if (error) return <div>Failed to load products</div>;
  if (!data) return <div>
    <Spinner />
  </div>;

  const getData = () => {
    if (hasPaginate) return data.data;
    else return data;
  };

  const categoryData = getData();
  return (
    <>
      {categoryData.map((data: any, index: number) => (
        <div key={index} className="gi-sidebar-block-item">
          <div className="gi-sidebar-block-img">
            <img src={data.image} alt="blog imag" />
          </div>
          <div className="gi-sidebar-block-detial">
            <h5 className="gi-blog-title">
              <a href="/blog-detail-left-sidebar">{data.title}</a>
            </h5>
            <div className="gi-blog-date">{data.date}</div>
            <a href="/blog-left-sidebar">{data.category}</a>
          </div>
        </div>
      ))}
    </>
  );
};

export default RecentBlog;
