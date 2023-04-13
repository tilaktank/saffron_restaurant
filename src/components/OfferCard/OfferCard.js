import Card from "react-bootstrap/Card";

function OfferDeals() {
  return (
    <section id="offer">
      <h1 className="fw-bold text-center" style={{ color: "#FC5005" }}>Offers & Deals</h1>
      <div className="row-12 d-flex flex-wrap m-5 justify-content-center">
        <div className="col-4 w-auto m-2">
          <Card style={{ width: "20rem", height: "12rem" }}>
            <Card.Body>
              <Card.Title>
                <span className="fw-bold" style={{ color: "#FC5005" }}>
                  Happy Hour
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Monday-Friday from 4pm-7pm
              </Card.Subtitle>
              <Card.Text>
                <ul>
                  <li>$5 Craft Beers</li>
                  <li>$7 Specialty Cocktails</li>
                  <li>$5 House Wines</li>
                  <li>$3 Select Appetizers</li>
                </ul>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-4 w-auto m-2">
          <Card style={{ width: "20rem", height: "12rem" }}>
            <Card.Body>
              <Card.Title>
                <span className="fw-bold" style={{ color: "#FC5005" }}>
                  Meal Deals
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Monday-Wednesday from 5pm-8pm
              </Card.Subtitle>
              <Card.Text>
                Buy one dish and get the second dish of equal or lesser value
                for free.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-4 w-auto m-2">
          <Card style={{ width: "20rem", height: "12rem" }}>
            <Card.Body>
              <Card.Title>
                <span className="fw-bold" style={{ color: "#FC5005" }}>
                  Birthday Specials
                </span>
              </Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle> */}
              <Card.Text>
                Celebrate your birthday with us and get a free dessert with the
                purchase of any dishes.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-4 w-auto m-2">
          <Card style={{ width: "20rem", height: "12rem" }}>
            <Card.Body>
              <Card.Title>
                <span className="fw-bold" style={{ color: "#FC5005" }}>
                  Loyalty Programs
                </span>
              </Card.Title>
              {/* <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle> */}
              <Card.Text>
                Join our rewards program and earn points towards free meals and
                exclusive discounts.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-4 w-auto m-2">
          <Card style={{ width: "20rem", height: "12rem" }}>
            <Card.Body>
              <Card.Title>
                <span className="fw-bold" style={{ color: "#FC5005" }}>
                  Group Discounts
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                10% off on booking of 10 or more
              </Card.Subtitle>
              <Card.Text>
                Planning a special event or gathering? Let us take care of the
                food! Book a group of 10 or more guests and receive a 10%
                discount on your total bill.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>

        <div className="col-4 w-auto m-2">
          <Card style={{ width: "20rem", height: "12rem" }}>
            <Card.Body>
              <Card.Title>
                <span className="fw-bold" style={{ color: "#FC5005" }}>
                  Kids Eat Free
                </span>
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Every Tuesday
              </Card.Subtitle>
              <Card.Text>
                Kids of 12yr and under eat free with the purchase of an adult.
                All kids meals come with a drink and a dessert.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default OfferDeals;
