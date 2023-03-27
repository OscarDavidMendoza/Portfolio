import React, { useEffect, useState } from "react";
import "animate.css";
import { Col, Container, Row } from "react-bootstrap";
// import { ArrowRightCircle } from "react-bootstrap-icons";
import portfolioPic from "assets/images/portfolioPic.webp";
import heart from "assets/images/heart.png";

export const Header = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = [
        "Web Developer",
        "Web Designer",
        "Custom Keyboard Enthusiast",
    ];
    const [text, setText] = useState("");
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);
        return () => {
            clearInterval(ticker);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
            setDelta((prevDelta) => prevDelta / 2);
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updatedText === "") {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    };

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Oscar `}</h1>
                        <span
                            className="txt-rotate"
                            dataperiod="1000"
                            data-rotate='[ "Web Developer", "Web Designer"]'
                        >
                            <span className="wrap">{text}</span>
                        </span>
                        <p>
                            I'm a creative and empathetic individual who values
                            honesty, courage, and continuous learning in all
                            aspects of life. As a responsible team player, I am
                            committed to delivering service excellence and
                            maintaining high ethical standards in my
                            professional endeavors. In my free time, I enjoy
                            working out, building custom mechanical keyboards,
                            exploring new breakfast spots, and watching movies.
                            Travelling is one of my favorite activities, as it
                            allows me to experience new cultures and broaden my
                            horizons. Above all, my number one motivation is my{" "}
                            <span className="family">
                                family{" "}
                                <img
                                    src={heart}
                                    alt="heart"
                                    className="heart"
                                />
                            </span>
                            , and they inspire me to be the best version of
                            myself every day. My ultimate goal is to become a
                            well-known engineer and share my knowledge by
                            speaking at different schools. I believe that every
                            child deserves an opportunity to pursue their
                            dreams, and I want to show them that their future is
                            in their hands. With a strong work ethic, commitment
                            to quality, and respect for work-life balance, I'm
                            excited to see where my career and personal growth
                            take me.
                        </p>
                        {/* <button onClick={() => console.log("connect")}>
                            Let's Connect <ArrowRightCircle size={25} />
                        </button> */}
                    </Col>
                    <Col xs={12} md={6} xl={5} className="profile-picture">
                        <img src={portfolioPic} alt="portfolio" />
                    </Col>
                </Row>
            </Container>
        </section>
    );
};
