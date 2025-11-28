import React from "react";

function Awards() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src="media/images/largestBroker.svg" alt=""></img>
        </div>
        <div className="col-6 p-5 mt-3 ">
          <h1>Largest StockBroker in india</h1>
          <p className="mb-5">
            That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores
            of equity investments, making us India’s largest broker;
            contributing to 15% of daily retail exchange volumes in India.{" "}
          </p>
          <div className="row">
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Future and options</p>
                </li>
              </ul>{" "}
            </div>
            <div className="col-6">
              <ul>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Future and options</p>
                </li>
                <li>
                  <p>Future and options</p>
                </li>
              </ul>
            </div>
          </div>
          <img src="media/images/pressLogos.png" alt="" style={{width:"90%"}} />
        </div>
      </div>
    </div>
  );
}

export default Awards;
