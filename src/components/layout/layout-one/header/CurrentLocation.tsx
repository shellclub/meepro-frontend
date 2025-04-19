"use client";
import { useState } from "react";
import location from "../../../../utility/header/location";

function CurrentLocation({}) {
  const [current, setCurrent] = useState("New York");

  return (
    <>
      <div className="gi-location-block">
        <div className="gi-location-menu">
          <div className="gi-location-toggle">
            <i className="fi fi-rr-marker location"></i>
            <span className="gi-location-title d-1199 gi-location">
              {current}
            </span>
            <i
              className="fi-rr-angle-small-down d-1199 gi-angle"
              aria-hidden="true"
            ></i>
          </div>
          <div className="gi-location-content">
            <div className="gi-location-dropdown">
              <div className="row gi-location-wrapper">
                <ul className="loc-grid">
                  <li className="loc-list current">
                    <i className="fi fi-rr-map-marker-plus"></i>
                    <span className="gi-detail-current">current Location</span>
                  </li>
                  {location.map((data, index) => (
                    <li
                      key={index}
                      className="loc-list"
                      onClick={() => setCurrent(data.name)}
                    >
                      <i className="fi fi-rr-map-marker-plus"></i>
                      <span className="gi-detail">{data.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CurrentLocation;
