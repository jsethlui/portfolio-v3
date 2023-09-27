
import React from 'react'
import { Group } from '@mantine/core';
import global from '/src/components/App/App.module.css'
import classes from '/src/components/Intro/Intro.module.css'
import { UilLinkedin, UilGithub, UilEnvelopeAlt } from '@iconscout/react-unicons'

function Intro() {

    const iconSize = 35;    // pixels
    const iconColor = "var(--mantine-color-indigo-4)";

    return (
        <div className={classes.container}>
            <h1 className={classes.name_header}>
                <a className={classes.linkedin_anchor}
                   target="_blank"
                   href="https://www.linkedin.com/in/jeremylouie98/">
                    Jeremy Louie
                </a>
            </h1>
            <h2 className={classes.brief_header}>
                Software Engineer with a passion for developing and delivering products
            </h2>
            <p className={classes.about}>
                I previously developed C++ robototic algorithms at <a target="_blank" rel="noopener noreferrer" href="https://omafertility.com/" className={global.underline_anchor}>Oma Fertility</a> to improve in-vitro fertilization success rates
            </p>
            <Group className={classes.icon_container}>
                <a className={global.icon_hover}
                   target="_blank"
                   href="https://www.linkedin.com/in/jeremylouie98/">
                    <UilLinkedin className={classes.icon} size={iconSize} color={iconColor} />
                </a>

                <a className={global.icon_hover}
                   target="_blank"
                   href="https://github.com/jsethlui">
                    <UilGithub className={classes.icon} size={iconSize} color={iconColor} />
                </a>

                <a className={global.icon_hover}
                   target="_blank"
                   href="https://github.com/jsethlui">
                    <UilEnvelopeAlt className={classes.icon} size={iconSize} color={iconColor} />
                </a>
            </Group>

        </div>
    );
}

export default Intro;