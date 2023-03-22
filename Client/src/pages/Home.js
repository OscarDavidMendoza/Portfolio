import { Contact } from "Components/Contact";
import { Header } from "Components/Header";
import { Projects } from "Components/Projects/Projects";
import { Skills } from "Components/Skills/Skills";
import React from "react";

export const Home = () => {
    return (
        <div>
            <Header />
            <Skills />
            <Projects />
            <Contact />
        </div>
    );
};
