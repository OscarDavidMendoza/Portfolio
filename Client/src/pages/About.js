import React from "react";
import { Container } from "react-bootstrap";
import GitHubCalendar from "react-github-calendar";
import "../Styles/AboutPage.css";

export const About = () => {
    return (
        <section className="about-page">
            <Container>
                <GitHubCalendar username="OscarDavidMendoza" />
            </Container>
        </section>
    );
};
