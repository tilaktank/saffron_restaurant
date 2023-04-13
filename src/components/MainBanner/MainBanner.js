import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {Container, Row, Col} from 'react-bootstrap';
import banner from "../../assets/banner.png";
import classes from "./MainBanner_CSS.css";

class MainBanner extends Component {
    render () {
        return (
            <section className="my-3" id="hero">
                <Container>
                <Row className={`${classes.row} mx-auto`}>
                    <Col lg={6} className="p-0 main_text">
                        <div className={classes.text__div}>
                            <h1 className="fw-bold">
                                Enjoy <span style={{color: "#FC5005"}}>home made meals</span> far away from home
                            </h1>
                            <h5 className="col-10 pt-3">
                                Helping you enjoy comfortable and healthy food anywhere and
                                anytime on the go
                            </h5>
                        </div>
                    </Col>
                    <Col lg={6} className={classes.food__image} style={{ textAlign : "center" }}>
                        <div className={`m-auto`}>
                            <img src={banner} fluid="true" alt="Food pic" width="75%" />
                        </div>
                    </Col>
                </Row>
                </Container>
            </section>
        )
    }
}

export default MainBanner;