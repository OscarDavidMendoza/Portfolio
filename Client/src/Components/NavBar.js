import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import logo from "assets/images/OscarCodes.png";
import { LinkContainer } from "react-router-bootstrap";
import { SocialIcons } from "./SocialIcons";

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState("home");
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            window.scrollY > 50 ? setScrolled(true) : setScrolled(false);
        };

        window.addEventListener("scroll", onScroll);
    }, []);

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <LinkContainer to="/">
                    <Navbar.Brand className="brand">
                        <img src={logo} alt="Logo" />
                    </Navbar.Brand>
                </LinkContainer>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <LinkContainer to="/">
                            <Nav.Link
                                className={
                                    activeLink === "home"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("home")}
                            >
                                Home
                            </Nav.Link>
                        </LinkContainer>
                        {/* <LinkContainer to="/about">
                            <Nav.Link
                                className={
                                    activeLink === "about"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("about")}
                            >
                                About
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/projects">
                            <Nav.Link
                                className={
                                    activeLink === "projects"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("projects")}
                            >
                                Projects
                            </Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/blog">
                            <Nav.Link
                                className={
                                    activeLink === "blog"
                                        ? "active navbar-link"
                                        : "navbar-link"
                                }
                                onClick={() => onUpdateActiveLink("blog")}
                            >
                                Blog
                            </Nav.Link>
                        </LinkContainer> */}
                    </Nav>
                    <span className="navbar-text">
                        <SocialIcons />
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};
