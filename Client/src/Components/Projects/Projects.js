import React from "react";
import ProjectData from "assets/data/ProjectData";
import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import TrackVisibility from "react-on-screen";
import "animate.css";
import { ProjectsCard } from "./ProjectsCard";
import switches from "assets/images/IMG_7999.webp";

export const Projects = () => {
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col size={12} className="text-background">
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div
                                    className={
                                        isVisible
                                            ? "animate__animated animate__bounce"
                                            : ""
                                    }
                                >
                                    <h2>Projects</h2>
                                    <p>
                                        As an experienced web developer, I have
                                        worked on a variety of projects that
                                        showcase my proficiency in React and my
                                        ability to deliver tangible results.
                                        Below are some of my recent projects.
                                    </p>
                                </div>
                            )}
                        </TrackVisibility>
                        <Tab.Container
                            id="projects-tabs"
                            defaultActiveKey="first"
                        >
                            <Nav
                                variant="pills"
                                className="nav-pills mb-5 justify-content-center align-items-center"
                                id="pills-tab"
                            >
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="first">
                                        Tab One
                                    </Nav.Link>
                                </Nav.Item> */}
                                <Nav.Item>
                                    {/* change event key to second once I add more projects and other tabs go live */}
                                    <Nav.Link eventKey="first">
                                        Projects
                                    </Nav.Link>
                                </Nav.Item>
                                {/* <Nav.Item>
                                    <Nav.Link eventKey="third">
                                        Tab three
                                    </Nav.Link>
                                </Nav.Item> */}
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {ProjectData.map((project) => {
                                            return (
                                                <ProjectsCard
                                                    key={project.id}
                                                    title={project.title}
                                                    summary={project.summary}
                                                    siteName={project.siteName}
                                                    img={project.img}
                                                    alt={project.alt}
                                                />
                                            );
                                        })}
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    Lorem Ipsum
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    Lorem Ipsum
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img
                className="background-image-left"
                src={switches}
                alt="background"
            />
        </section>
    );
};
