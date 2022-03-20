import React from 'react';
import { Col } from "reactstrap";

const ProcessBox = ({ processes }) => {
    const len = processes ? processes.length : 0;
    return (
        <React.Fragment>
            {(processes || []).map((process, key) => (
                <Col key={key} lg={4} className={key + 1 === len ? "" : "plan-line"}>
                    <div className="text-center process-box">
                        <i className={process.icon + " text-primary"}></i>
                        <h4 className="pt-3">{process.title}</h4>
                        <p className="text-muted">{process.desc}</p>
                    </div>
                </Col>
            ))}
        </React.Fragment>
    );
}

export default ProcessBox;