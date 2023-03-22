import React from "react";
import linkedin from "assets/images/Social/nav-icon1.svg";
import facebook from "assets/images/Social/nav-icon2.svg";
import instagram from "assets/images/Social/nav-icon3.svg";
import github from "assets/images/Social/github.svg";

export const SocialIcons = () => {
    return (
        <div className="social-icon">
            <a href="https://www.linkedin.com/in/oscardavidmendoza/">
                <img src={linkedin} alt="linkedIn" />
            </a>
            <a href="https://www.facebook.com/oscar.mend0za">
                <img src={facebook} alt="Facebook" />
            </a>
            <a href="https://www.instagram.com/oscarmend0za/">
                <img src={instagram} alt="Instagram" />
            </a>
            <a href="https://github.com/OscarDavidMendoza">
                <img src={github} alt="Github" />
            </a>
        </div>
    );
};
