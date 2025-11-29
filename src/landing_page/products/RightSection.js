import React from "react";

function RightSection({
  imageURl,
  productName,
  productDiscription,
  learnMore,
  kiteConnect,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 mt-5 p-5">
            <h2>{productName}</h2>
          <p className="text-muted">{productDiscription}</p>
          <div className="">
            <a href={learnMore} style={{textDecoration:"None" }}>
              Learn more
            </a>
          </div>
        </div>
        <div className="col-6">
        <img src={imageURl} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
