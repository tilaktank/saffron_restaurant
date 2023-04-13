import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import menulist from "../../assets/menulist.jpg";

function MenuList() {
  return (
    <section id="menu">
      <h1 className="fw-bold text-center" style={{ color: "#FC5005" }}>Menu Gallery</h1>
      <div className="row-12 d-flex flex-wrap m-5 justify-content-center">

        <div className="col-4 w-auto d-flex flex-wrap">
          <div>
            <Card style={{ width: "18rem" }}>
              <Card.Header style={{ backgroundColor: "#FFE9E0" }}>
                <span style={{ color: "#FC5005" }}>Appetizers:</span>
              </Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>Vegetable Samosas</ListGroup.Item>
                <ListGroup.Item>Aloo tikki chaat</ListGroup.Item>
                <ListGroup.Item>Paneer pakora</ListGroup.Item>
                <ListGroup.Item>Papdi chaat</ListGroup.Item>
                <ListGroup.Item>Gobi Manchurian</ListGroup.Item>
                <ListGroup.Item>Saag paneer</ListGroup.Item>
                <ListGroup.Item>Chana masala</ListGroup.Item>
                <ListGroup.Item>Baingan bharta</ListGroup.Item>
                <ListGroup.Item>Vegetable korma</ListGroup.Item>
              </ListGroup>
            </Card>
          </div>
        </div>

        <div className="col-4 w-auto d-flex flex-wrap">
            <div>
                <Card style={{ width: "18rem" }}>
                <Card.Header style={{ backgroundColor: "#FFE9E0" }}>
                    <span style={{ color: "#FC5005" }}>Breads:</span>
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Naan</ListGroup.Item>
                    <ListGroup.Item>Garlic naan</ListGroup.Item>
                    <ListGroup.Item>Roti</ListGroup.Item>
                    <ListGroup.Item>Paratha</ListGroup.Item>
                </ListGroup>
                </Card>
            {/* </div> */}
            {/* <div> */}
                <Card style={{ width: "18rem" }}>
                <Card.Header style={{ backgroundColor: "#FFE9E0" }}>
                    <span style={{ color: "#FC5005" }}>Entrees:</span>
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Saag paneer</ListGroup.Item>
                    <ListGroup.Item>Chana masala</ListGroup.Item>
                    <ListGroup.Item>Baingan bharta</ListGroup.Item>
                    <ListGroup.Item>Vegetable korma </ListGroup.Item>
                </ListGroup>
                </Card>
            </div>
        </div>

        <div className="col-4 w-auto d-flex flex-wrap">
            <div>
                <Card style={{ width: "18rem" }}>
                <Card.Header style={{ backgroundColor: "#FFE9E0" }}>
                    <span style={{ color: "#FC5005" }}>Desserts:</span>
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Gulab jamun</ListGroup.Item>
                    <ListGroup.Item>Rasmalai</ListGroup.Item>
                    <ListGroup.Item>Mango lassi</ListGroup.Item>
                    <ListGroup.Item>Kulfi</ListGroup.Item>
                </ListGroup>
                </Card>
            {/* </div> */}
            {/* <div> */}
                <Card style={{ width: "18rem" }}>
                <Card.Header style={{ backgroundColor: "#FFE9E0" }}>
                    <span style={{ color: "#FC5005" }}>Beverages:</span>
                </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Chai</ListGroup.Item>
                    <ListGroup.Item>Mango juice</ListGroup.Item>
                    <ListGroup.Item>Masala soda</ListGroup.Item>
                    <ListGroup.Item>Indian whiskey</ListGroup.Item>
                </ListGroup>
                </Card>
            </div>
        </div>
      </div>
      <div className="text-center mb-5">
        <a href={menulist} target="_blank" rel="noreferrer">
            <button className="btn" style={{ color: "#FFE9E0", backgroundColor: "#FC5005" }}>Download Menu</button>
        </a>
      </div>
    </section>
  );
}

export default MenuList;
