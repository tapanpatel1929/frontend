import React from "react";
function Education() {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-3">
            <img src="media/images/education.svg" alt="" style={{width:"90%"}}/>
        </div>
        <div className="col-6">
          <h2 className="mb-3">Free and open market education</h2>
          <p>
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="">
            Varsity <i class="fa-solid fa-right-long"></i>
          </a>
          <p className="mt-5">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="">
            TradingQ&A <i class="fa-solid fa-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
