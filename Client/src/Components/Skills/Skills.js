import React from "react";
import { SkillsCard } from "./SkillsCard";
import SkillText from "assets/data/SkillText";
import { Col, Container, Row } from "react-bootstrap";
// import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import switches from "assets/images/IMG_7999.webp";

export const Skills = () => {
    // const responsive = {
    //     superLargeDesktop: {
    //         // the naming can be any, depends on you.
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5,
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3,
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2,
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //     },
    // };

    return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>Skills</h2>
                            <p>
                                Experienced Application Support Manager with a
                                proven track record of driving results and
                                optimizing processes in a SaaS industry. Skilled
                                in people and team management, troubleshooting,
                                and investigation. Highly motivated and
                                results-driven, always going above and beyond to
                                ensure customer satisfaction. Created and
                                implemented innovative shift-left based metrics,
                                resulting in a 10% reduction in incoming service
                                requests and increased focus on self-service.
                                Developed reports that provided essential
                                visibility for effective decision-making around
                                hiring. Looking to expand skills and knowledge
                                by becoming AWS certified and transitioning into
                                a development-oriented role as a devops
                                engineer. Passionate about continuous learning
                                and driving innovation to deliver optimal
                                results.
                            </p>
                            <div className="allSkills">
                                {/* commented out carousel while I work on additional skills. Reminder: remove div once carousel goes live */}
                                {/* <Carousel
                                    responsive={responsive}
                                    infinite={true}
                                    showDots={true}
                                    autoPlay={true}
                                    autoPlaySpeed={3100}
                                    renderDotsOutside
                                    pauseOnHover
                                    className="skill-slider"
                                > */}
                                <div className="skill-slider">
                                    {SkillText.map((skill) => {
                                        return (
                                            <div key={skill.id}>
                                                <SkillsCard
                                                    name={skill.name}
                                                    img={skill.img}
                                                    experience={
                                                        skill.experience
                                                    }
                                                    className="item"
                                                />
                                            </div>
                                        );
                                    })}
                                </div>
                                {/* </Carousel> */}
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
            {/* <img
                className="background-image-left"
                src={switches}
                alt="background"
            /> */}
        </section>
    );
};
