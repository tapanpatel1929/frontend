import React from "react";
function Broakrage() {
  return (
    <div className="container  ">
      <div className="row p-5 mt-5 text-center border-top">
        <div className="col-8 p-4">
           <a href="" style={{textDecoration:"None"}}><h4>Broakrage Calculator</h4></a>
           <ul style={{textAlign: "left", lineHeight:"2.5",fontSize:"14px"}} className="text-muted">
            <li>Delivery & MTF Brokerage: 0.5% per executed order.</li>
            <li>Intraday Brokerage: 0.05% per executed order.</li>
            <li>MTF pledge charge: ₹15 + GST per pledge and unpledge request per ISIN.</li>
            <li>For a non-PIS account, 0.5% or ₹50 per executed order for equity and F&O (whichever is lower).</li>
            <li>For a PIS account, 0.5% or ₹200 per executed order for equity (whichever is lower).</li>
            <li>If the account is in debit balance, any order placed will be charged ₹40 per executed order instead of ₹20 per executed order.</li>
            </ul> 
        </div>
        <div className="col-4 p-4">
            <a href="" style={{textDecoration:"None"}}><h4>List of Charges</h4></a> 
        </div>
      </div>
    </div>
  );
}

export default Broakrage;
