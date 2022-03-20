import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

const img1 = require("../../assets/images/img-2.jpg");

const styling1 = {
    backgroundImage: `url('${img1}')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
}

const Section = () => {
    return (
        <React.Fragment>
            <section
                className="home-padding-t-150 position-relative"
                id="home"
                style={styling1}
            >
                <div className="bg-overlay"></div>
                <div className="display-table">
                    <div className="home-cell-bottom">
                        <Container>
                            <Row>
                                <Col
                                    lg={{ size: 8, offset: 2 }}
                                    className="text-white text-center"
                                >
                                    <h1 className="home-title">
                                        We help startups launch their products
                                    </h1>
                                    <p className="pt-3 home-desc">
                                        Etiam sed.Interdum consequat proin vestibulum class at a
                                        euismod mus luctus quam.Lorem ipsum dolor sit amet,
                                        consectetur adipisicing eli.
                                    </p>
                                    <Link href="#">
                                        <a className="btn btn-primary mt-4">Get Started</a>
                                    </Link>
                                    <img
                                        alt="dashboard"
                                        src={require("../../assets/images/home-dashboard.png")}
                                        className="img-fluid center-block mt-4"
                                    />
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
            </section>
        </React.Fragment>
    );
}

export default Section;