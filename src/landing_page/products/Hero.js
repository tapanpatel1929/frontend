import React from "react";
function Hero() {
  return (
    <div className="container  borde-bottem mb-5" >
      <div className="row fs-4 text-center mt-5 p-5">
        <h2>Zerodha Products</h2>
        <h4 className="text-muted mt-3 fs-4 ">
          Sleek, modern, and intuitive trading platforms
        </h4>
        <p className="mt-3 mb-5 ">
          Check out our{" "}
          <a href="" style={{ textDecoration: "None" }}>
            investment offerings →
          </a>{" "}
        </p>
      </div>
    </div>
  );
}

export default Hero;
