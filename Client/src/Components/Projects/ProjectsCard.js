import React from "react";
import { Col } from "react-bootstrap";

export const ProjectsCard = ({ title, summary, img, siteName }) => {
    return (
        <Col size={12} sm={6} md={{ span: 4, offset: 4 }}>
            <div className="project-imagebox">
                <img src={img} alt="project" />
                <div className="project-text">
                    <h4>{title}</h4>
                    <span>{summary}</span>
                    <p className="site-name">{siteName}</p>
                </div>
            </div>
        </Col>
    );
};
