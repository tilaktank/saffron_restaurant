import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Footer() {
  return (
    <section>
      <div className="row-12 d-flex flex-wrap justify-content-center" style={{ backgroundColor: "#FF9466" }}>
        <div className="col-4 p-5 d-flex flex-wrap">
            <a href="#hero" className="fs-3 fw-bolder" style={{color: "#FC5005", textDecoration: "none"}}>Saffron</a>
            <p className="fs-5 mt-3 text-white">Experience the true taste of India with our curated menu, offering a perfect blend of traditional recipes and contemporary innovations.</p>
        </div>
        <div className="col-4 p-5">
            <div className="mb-2">
            <a href="#hero" className="fs-5 text-white" style={{textDecoration: "none"}}>Home</a>
            </div>
            <div className="mb-2">
            <a href="#offer" className="fs-5 text-white" style={{textDecoration: "none"}}>Offers</a>
            </div>
            <div className="mb-2">
            <a href="#branch" className="fs-5 text-white" style={{textDecoration: "none"}}>Branches</a>
            </div>
            <div className="mb-2">
            <a href="#menu" className="fs-5 text-white" style={{textDecoration: "none"}}>Menu</a>
            </div>
            <div className="mb-2">
            <a href="#best" className="fs-5 text-white" style={{textDecoration: "none"}}>Best Sellers</a>
            </div>
            <div className="mb-2">
            <a href="#rating" className="fs-5 text-white" style={{textDecoration: "none"}}>Ratings</a>
            </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
