import React from 'react';
import { Col } from "reactstrap";
import Link from "next/link";

const BlogBox = ({ blogs }) => {
    return (
        <React.Fragment>
            {(blogs || []).map((blog, key) => (
                <Col key={key} lg={4}>
                    <div className="blog-box mt-4 hover-effect">
                        <img src={blog.image} className="img-fluid" alt="blog" />
                        <div>
                            <h5 className="mt-4 text-muted">{blog.category}</h5>
                            <h4 className="mt-3 blog-title">
                                <Link href="#">
                                    <a className="blog-title">{blog.title}{" "}</a>
                                </Link>
                            </h4>
                            <p className="text-muted">{blog.desc}</p>
                            <div className="mt-3">
                                <Link href="#">
                                    <a className="read-btn">Read More <i className="mdi mdi-arrow-right"></i></a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </Col>
            ))}
        </React.Fragment>
    );
}

export default BlogBox;