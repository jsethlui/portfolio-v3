
// @todo: add mobiile responsive design

import React from 'react'
import { Group, Text, Image } from '@mantine/core'
import global from '/src/components/App/App.module.css'
import classes from '/src/components/Intro/Intro.module.css'
import avatar from '/src/assets/avatar.jpg'
import Typewriter from 'typewriter-effect'
import { UilLinkedin, UilGithub, UilEnvelopeAlt } from '@iconscout/react-unicons'

function Intro() {

    const iconSize = 35    // pixels
    const iconColor = "var(--mantine-color-indigo-4)"

    return (
        <Group className={classes.container}>

            <Group className={classes.text_container}>
                <Group className={classes.name}>
                    {/* @todo: convert Text Mantine component */}
                    <p className={classes.intro}>Hi, I'm</p>

                    <a className={classes.linkedin_anchor}
                    target="_blank"
                    href="https://www.linkedin.com/in/jeremylouie98/">
                        Jeremy Louie
                    </a>
                </Group>

                <h2 className={classes.title}>
                <Typewriter options={{ strings: ["Software Engineer", "Coffee Enthusiast", "Avid Learner"],
                                       autoStart: true,
                                       delay: 100,
                                       loop: true, }} />
                </h2>

                <Text className={classes.brief}>
                    I previously developed C++ robototic algorithms at <a target="_blank" rel="noopener noreferrer" href="https://omafertility.com/" className={global.underline_anchor}>Oma Fertility</a> to improve in-vitro fertilization success rates. I'm looking to continue developing and delivering products.
                </Text>

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
            </Group>

            <Group className={classes.image_container}>
                    <a className={classes.linkedin_anchor}
                    target="_blank"
                    href="https://www.linkedin.com/in/jeremylouie98/">
                        <Image className={classes.image} src={avatar} />
                    </a>
            </Group>
        </Group>
    )
}

export default Intro