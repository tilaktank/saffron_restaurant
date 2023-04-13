import Card from "react-bootstrap/Card";
import best1 from "../../assets/best1.jpg";
import best2 from "../../assets/best2.jpg";
import best3 from "../../assets/best3.jpg";

function BasicExample() {
  return (
    <section id="best">
      <h1 className="fw-bold text-center" style={{ color: "#FC5005" }}>Best Sellers</h1>
      <div className="row-12 d-flex flex-wrap m-5 justify-content-center">
        <div className="col-4 w-auto m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={best1} />
            <Card.Body>
              <Card.Title>Vegetable Samosas</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4 w-auto m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={best2} />
            <Card.Body>
              <Card.Title>Aloo Tikki Chaat</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-4 w-auto m-2">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={best3} />
            <Card.Body>
              <Card.Title>Papdi Chaat</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default BasicExample;
