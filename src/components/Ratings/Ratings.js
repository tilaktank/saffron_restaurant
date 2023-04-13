import Card from "react-bootstrap/Card";

function Ratings() {
  return (
    <section id="rating">
      <h1 className="fw-bold text-center" style={{ color: "#FC5005" }}>Happy Customers</h1>
      <h5 className="text-center">This is what our customers are saying</h5>
      <div className="row-12 d-flex flex-wrap m-5 justify-content-center">
        <div className="col-4 w-auto m-2">
          <Card style={{ width: "23rem", border: "none", boxShadow: "none" }}>
            <Card.Body>
              <Card.Title className="fw-bold">Aarav Patel</Card.Title>
              <Card.Text>
                "The food at this restaurant was simply exquisite. Each dish was
                bursting with flavor, and the presentation was stunning. The
                service was also top-notch, making for an all-around fantastic
                dining experience."
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4 w-auto m-2">
          <Card style={{ width: "23rem", border: "none", boxShadow: "none" }}>
            <Card.Body>
              <Card.Title className="fw-bold">Kavya Sharma</Card.Title>
              <Card.Text>
                "I had a fantastic time at this restaurant. The atmosphere was
                cozy and intimate, and the food was absolutely delicious. I
                especially loved the pasta dish and the tiramisu for dessert. I
                would definitely come back here again."
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4 w-auto m-2">
          <Card style={{ width: "23rem", border: "none", boxShadow: "none" }}>
            <Card.Body>
              <Card.Title className="fw-bold">Rohan Gupta</Card.Title>
              <Card.Text>
                "I would highly recommend this restaurant to anyone looking for
                a fantastic meal. The sushi was incredibly fresh and expertly
                prepared, and the staff was knowledgeable and friendly. This is
                definitely a must-visit spot."
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Ratings;
