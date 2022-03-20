import React from 'react';
import { Container, Row } from "reactstrap";

//Import Section Title
import SectionTitle from "../../../components/Common/SectionTitle";

import BlogBox from "./BlogBox";

import img1 from "../../../assets/images/blog/img-1.jpg";
import img2 from "../../../assets/images/blog/img-2.jpg";
import img3 from "../../../assets/images/blog/img-3.jpg";

const blogs = [
    {
        image: img1,
        category: "UI & UX Design",
        title: "Doing a cross country road trip",
        desc:
            "She packed her seven versalia, put her initial into the belt and made herself on the way..",
    },
    {
        image: img2,
        category: "Digital Marketing",
        title: "New exhibition at our Museum",
        desc:
            "Pityful a rethoric question ran over her cheek, then she continued her way.",
    },
    {
        image: img3,
        category: "Travelling",
        title: "Why are so many people..",
        desc:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.",
    },
];

const Blog = props => {
    return (
        <React.Fragment>
            <section className="section bg-light pt-5" id="blog">
                <Container>
                    {/* section title */}
                    <SectionTitle
                        title="BLOG"
                        desc="Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean class at a euismod mus luctus quam."
                    />

                    <Row className="mt-4">
                        {/* blog box */}
                        <BlogBox blogs={blogs} />
                    </Row>
                </Container>
            </section>
        </React.Fragment>
    );
}

export default Blog;