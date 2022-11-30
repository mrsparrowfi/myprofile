import React from "react";

import '../assets/css/style.css';
import '../assets/css/media/mobile.css';
import '../assets/css/media/tablet.css';
import '../assets/css/media/desktop.css';

import {
    Header,
    Footer,
    Bottom,
    StrongBottom,
    NewFotter,
    StrongBottomWithButton,
    BottomWithIcon
} from "./modules";

import {
    careerObjective,
    bio,
    knowledgeAndCompetency,
    leadershipSkills,
    softSkills,
    achievement,
    language,
    personalInterest,
    membership,
    certification,
    references,
    getInTouch
} from "./data";


function LeftPanel () {

    return (
        <ul className="left--panel">
            <li>
                <Header title = "Career Objective" id ="Objective" />
                <Footer content = { careerObjective } />
            </li>
            <li>
                <Header title = "Bio" id = "Bio" />
                <StrongBottom content = { bio } />
            </li>
            <li>
                <Header title = "Knowledge & Competency" id = "Skills" />
                <NewFotter content = { knowledgeAndCompetency } />
            </li>
            <li>
                <Header title = "Leadership Skills" id = "Leadership" />
                <Bottom content = { leadershipSkills } />
            </li>
            <li>
                <Header title = "Soft Skills" id = "Softskills" />
                <Bottom content = { softSkills } />
            </li>
            <li>
                <Header title = "Achievements" id = "Achievement" />
                <StrongBottomWithButton content = { achievement } btnname = "Check Records" address = "image--record" />
            </li>
            <li>
                <Header title = "Languages" id = "Language" />
                <StrongBottom content = { language } />
            </li>
            <li>
                <Header title = "Personal Interest" id = "Interest" />
                <Bottom content = { personalInterest } />
            </li>
            <li>
                <Header title = "Membership" id = "Membership" />
                <Footer content = { membership } />
            </li>
            <li>
                <Header title = "Get in touch" id = "Contact" />
                <BottomWithIcon content = { getInTouch } />
            </li>
            <li>
                <Header title = "Certifications" id = "Certification" />
                <StrongBottomWithButton content = { certification } btnname = "Check Records" address = "image--record" />
            </li>
            <li>
                <Header title = "References" id = "Reference" />
                <Footer content = { references } />
            </li>
        </ul>
    );

}

export default LeftPanel;
