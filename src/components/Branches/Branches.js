import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import branch1 from "../../assets/branch1.jpg";
import branch2 from "../../assets/branch2.jpg";

function Branches() {
  return (
    <section id="branch">
      <h1 className="fw-bold text-center" style={{ color: "#FC5005" }}>Branches</h1>
      <div className="row-12 d-flex flex-wrap m-5 w-auto justify-content-center">
        <div className="col-6 m-3 w-auto">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={branch1} />
            <Card.Body>
              <Card.Title><span style={{ color: "#FC5005" }}>Rajkot, Gujarat</span></Card.Title>
              <Card.Text>
                We offer a wide variety of menu options to satisfy every taste
                bud. From classic comfort food to international cuisine, our
                menu has something for everyone. Our skilled chefs prepare each
                dish with care and attention to detail, ensuring that every meal
                is a masterpiece.
              </Card.Text>
              <Button className="btn" href="https://goo.gl/maps/jHefWgaZoh4Mg6Cw5" target="_blank" style={{ color: "#FFE9E0", backgroundColor: "#FC5005", border: "none" }}>Let's Go!</Button>
            </Card.Body>
          </Card>
        </div>

        <div className="col-6 m-3 w-auto">
          <Card style={{ width: "20rem" }}>
            <Card.Img variant="top" src={branch2} />
            <Card.Body>
              <Card.Title><span style={{ color: "#FC5005" }}>Ahmedabad, Gujarat</span></Card.Title>
              <Card.Text>
                We serve delicious food and provide a memorable dining
                experience for every guest. Our restaurant is known for its
                [unique feature or specialty dish], and we take pride in using
                only the freshest and highest quality ingredients in all of our
                dishes.
              </Card.Text>
              <Button className="btn" href="https://goo.gl/maps/5BwR18o1h1btKUSi8" target="_blank" style={{ color: "#FFE9E0", backgroundColor: "#FC5005", border: "none" }}>Let's Go!</Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    </section>
  );
}

export default Branches;
