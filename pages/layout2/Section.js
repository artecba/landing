import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

// Modal Video
import ModalVideo from "react-modal-video";

const img1 = require("../../assets/images/wave-shape/wave1.png");
const img2 = require("../../assets/images/wave-shape/wave2.png");
const img3 = require("../../assets/images/wave-shape/wave3.png");

const styling1 = {
    backgroundImage: `url('${img1}')`
}
const styling2 = {
    backgroundImage: `url('${img2}')`
}
const styling3 = {
    backgroundImage: `url('${img3}')`
}
const Section = props => {
    const [isOpenModal, setisOpenModal] = useState(false);

    //navtoggle menu
    const openModaltoggle = () => {
        setisOpenModal(!isOpenModal);
    }
    return (
        <React.Fragment>
            <section
                className="section bg-home home-half"
                id="home"
                data-image-src="images/wave-shape/wave1.png"
            >
                <div className="bg-overlay"></div>
                <div className="display-table">
                    <div className="display-table-cell">
                        <Container>
                            <Row>
                                <Col
                                    lg={{ size: 8, offset: 2 }}
                                    className="col-lg-8 offset-lg-2 text-white text-center"
                                >
                                    <h1 className="home-title">
                                        We help startups launch their products
                                    </h1>
                                    <p className="pt-3 home-desc">
                                        Etiam sed.Interdum consequat proin vestibulum class at.
                                    </p>
                                    <p className="play-shadow mt-4">
                                        <Link
                                            href="/layout2"
                                        >
                                            <a
                                                onClick={() => {
                                                    openModaltoggle();
                                                }}
                                                className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></a>
                                        </Link>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                <div className="wave-effect wave-anim">
                    <div className="waves-shape shape-one">
                        <div
                            className="wave wave-one"
                            style={styling1}
                        ></div>
                    </div>
                    <div className="waves-shape shape-two">
                        <div
                            className="wave wave-two"
                            style={styling2}
                        ></div>
                    </div>
                    <div className="waves-shape shape-three">
                        <div
                            className="wave wave-three"
                            style={styling3}
                        ></div>
                    </div>
                </div>

                {/* Render ModalSection Component for Modal */}
                <ModalVideo
                    channel="vimeo"
                    isOpen={isOpenModal}
                    videoId="287684225"
                    onClose={() => setisOpenModal(!setisOpenModal)}
                />
            </section>
        </React.Fragment>
    );
}

export default Section;