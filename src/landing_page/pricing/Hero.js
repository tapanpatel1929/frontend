import React from "react";
function hero() {
  return (
    <div className="container  ">
      <div className="row text-center mt-5 border-bottom p-5">
        <h2>Charges</h2>
        <h3 className="text-muted mt-3">List of all charges and taxes</h3>
        <div className="row text-center mt-5 p-5">
          <div className="col-4 p-3 mt-5">
            <img src="media/images/pricing0.svg" alt="" />
            <h3>Free equity delivery</h3>
            <p className="text-small text-muted ">
              All equity delivery investments (NSE, BSE), are absolutely free —
              ₹ 0 brokerage.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/intradayTrades.svg" alt="" style={{}} />
            <h3>Intraday and F&O trades</h3>
            <p className="text-small text-muted">
              Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
              intraday trades across equity, currency, and commodity trades.
              Flat ₹20 on all option trades.
            </p>
          </div>
          <div className="col-4 p-3 mt-5">
            <img src="media/images/pricingMF.svg " alt="" />
            <h3>Free direct MF</h3>
            <p className="text-small text-muted">
              All direct mutual fund investments are absolutely free — ₹ 0
              commissions & DP charges.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
