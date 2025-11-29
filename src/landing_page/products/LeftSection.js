import React from "react";

function LeftSection({
  imageURl,
  productName,
  productDiscription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 p-5">
          <img src={imageURl}  />
        </div>
        <div className="col-6 p-5 mt-5">
          <h2>{productName}</h2>
          <p className="text-muted">{productDiscription}</p>
          <div className="">
            {" "}
            <a href={tryDemo}>Try Demo</a>
            <a href={learnMore} style={{marginLeft:"50px"}}>Learn more</a>
          </div>
          <div className="mt-3">
            <a href={googlePlay}>
              {" "}
              <img src="media/images/googlePlayBadge.svg" />{" "}
            </a>
            <a href={appStore}>
              {" "}
              <img src="media/images/appstoreBadge.svg"  style={{marginLeft:"50px"}}/>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
