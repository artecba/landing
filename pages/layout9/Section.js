import React, { useState } from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

// Modal Video
import ModalVideo from "react-modal-video";

//Import Particles
import Particles from "react-particles-js";

const Section = props => {
    const [isOpen, setisOpen] = useState(false);

    //navtoggle menu
    const openModal = () => {
        setisOpen(!isOpen);
    }
    return (
        <React.Fragment>
            <section className="section bg-home vh-100" id="home">
                <div className="bg-overlay">
                    <Particles
                        params={{
                            particles: {
                                number: {
                                    value: 140,
                                },
                                size: {
                                    value: 4,
                                },
                            },
                            interactivity: {
                                events: {
                                    onhover: {
                                        enable: true,
                                        mode: "repulse",
                                    },
                                },
                            },
                            move: {
                                radius: 1,
                            },
                        }}
                    />
                </div>
                <div className="">
                    <div className="">
                        <Container className="slidero">
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
                                    <p className="play-shadow mmt-4">
                                        <Link href="/layout9">
                                            <a
                                                onClick={() => {
                                                    openModal();
                                                }}
                                                className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></a>
                                        </Link>
                                    </p>
                                </Col>
                            </Row>
                        </Container>
                    </div>
                </div>
                {/* Render ModalSection Component for Modal */}
                <ModalVideo
                    channel="vimeo"
                    isOpen={isOpen}
                    videoId="287684225"
                    onClose={() => setisOpen(!isOpen)}
                />
            </section>
        </React.Fragment>
    );
}

export default Section;