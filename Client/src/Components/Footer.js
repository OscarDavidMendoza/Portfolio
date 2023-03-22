import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import logo from "assets/images/OscarCodes.png";
import phone from "assets/images/phoneIcon.png";
import email from "assets/images/EmailIcon.png";
import location from "assets/images/locationIcon.png";
import { SocialIcons } from "./SocialIcons";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} sm={4}>
                        <img src={logo} alt="Logo" />
                    </Col>
                    <Col size={12} sm={4} className="contactInfo">
                        <h2>Contact Info</h2>
                        <p>
                            <img src={phone} alt="phone icon" />
                            (+52)332-636-2899
                        </p>
                        <p>
                            <img src={location} alt="location icon" />
                            oscardavid.mendoza@icloud.com
                        </p>
                        <p>
                            <img src={email} alt="email icon" />
                            Guadalajara, Jalisco, Mexico
                        </p>
                    </Col>
                    <Col size={12} sm={4} className="text-center text-sm-end">
                        <SocialIcons />
                        <p>© CopyRight 2023 | All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};
