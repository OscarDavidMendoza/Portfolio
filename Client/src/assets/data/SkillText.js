import { v4 as uuidv4 } from "uuid";
import html from "assets/images/Skills/html.svg";
import css from "assets/images/Skills/css.svg";
import react from "assets/images/Skills/reactIcon.png";
import aws from "assets/images/Skills/awsIcon.png";

// Icon size is 140/144

const SkillText = [
    {
        id: uuidv4(),
        name: "HTML",
        experience: "<2 year />",
        img: html,
    },
    {
        id: uuidv4(),
        name: "CSS",
        experience: "<2 year />",
        img: css,
    },
    {
        id: uuidv4(),
        name: "React",
        experience: "<6 months />",
        img: react,
    },
    {
        id: uuidv4(),
        name: "AWS Practicioner",
        experience: "<3 months />",
        img: aws,
    },
    // {
    //     id: uuidv4(),
    //     name: "Logo Designer",
    //     img: meter3,
    // },
];

export default SkillText;
