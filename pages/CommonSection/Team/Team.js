import React from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../../../components/Common/SectionTitle";

import TeamBox from './TeamBox';

import img1 from "../../../assets/images/team/img-1.jpg"
import img2 from "../../../assets/images/team/img-2.jpg"
import img3 from "../../../assets/images/team/img-3.jpg"
import img4 from "../../../assets/images/team/img-4.jpg"

const teams = [
    {
        image: img1,
        title: "Frank Johnson",
        desc: "CEO",
    },
    {
        image: img2,
        title: "Elaine Stclair",
        desc: "DESIGNER",
    },
    {
        image: img3,
        title: "Wanda Arthur",
        desc: "DEVELOPER",
    },
    {
        image: img4,
        title: "Joshua Stemple",
        desc: "MANAGER",
    },
];

const Team = props => {
    return (
        <React.Fragment>
            <section className="section pt-4" id="team">
                <Container>
                    {/* section title */}
                    <SectionTitle
                        title="BEHIND THE PEOPLE"
                        desc="It is a long established fact that create category leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout."
                    />

                    <Row className="mt-5">
                        {/* team box */}
                        <TeamBox teams={teams} />
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Team;