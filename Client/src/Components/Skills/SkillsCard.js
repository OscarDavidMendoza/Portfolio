import React from "react";
import { Link } from "react-router-dom";
import meter1 from "assets/images/meter1.svg";

export const SkillsCard = ({
    img = meter1,
    name = "Skill Name",
    experience = "1year",
}) => {
    return (
        <div className="item">
            {/* add skill path to the link below once skills page is ready */}
            <Link to="/" className="skillsItem-img">
                <img src={img} alt="skill" />
                <h5 className="skill-title">{name}</h5>
                <p className="skill-experience">{experience}</p>
            </Link>
        </div>
    );
};
