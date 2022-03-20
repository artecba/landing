import React from 'react';
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";

//Import Section Title
import SectionTitle from "../../../components/Common/SectionTitle";

import ProcessBox from './ProcessBox'

const processes = [
    {
        icon: "pe-7s-pen",
        title: "Tell us what you need",
        desc: "The Big Oxmox advised her not to do so.",
    },
    {
        icon: "pe-7s-id",
        title: "Get free quotes",
        desc: "Little Blind Text didn’t listen.",
    },
    {
        icon: "pe-7s-target",
        title: "Deliver high quality product",
        desc: "When she reached the first hills.",
    },
];

const Process = props => {
    return (
        <React.Fragment>
            <section className="section bg-light">
                <Container>
                    {/* section title */}
                    <SectionTitle
                        title="WORK PROCESS"
                        desc="In an ideal world this website wouldn’t exist, a client would acknowledge the importance of having web copy before the design starts."
                    />

                    <Row>
                        <Col lg={6} className="text-center process-left-icon-1">
                            <i className="pe-7s-angle-right"></i>
                        </Col>
                        <Col lg={6} className="text-center process-left-icon-2">
                            <i className="pe-7s-angle-right"></i>
                        </Col>
                    </Row>
                    <Row className="mt-5">
                        <ProcessBox processes={processes} />
                        <div className="text-center mx-auto">
                            <Link
                                href="#"
                            >
                                <a className="btn btn-primary waves-light waves-effect mt-5">Get Started <i className="mdi mdi-arrow-right"></i></a>
                            </Link>
                        </div>
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Process;