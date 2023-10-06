
import React from 'react'
import { Container, Group, Text, Image } from '@mantine/core'
import avatar from '/src/assets/avatar.jpg'
import Typewriter from 'typewriter-effect'
import IconClickable from '/src/components/IconContainer/IconClickable.jsx'
import IconContainer from '/src/components/IconContainer/IconContainer.jsx'
import Anchor from '/src/components/Anchor/Anchor.jsx'
import { UilLinkedin, UilGithub, UilEnvelopeAlt } from '@iconscout/react-unicons'
import global from '/src/components/App/App.module.css'
import classes from '/src/components/Intro/Intro.module.css'

function Intro() {

    const iconSize = 35    // pixels
    const allIcons = [<IconClickable icon={<UilLinkedin />} href="https://www.linkedin.com/in/jeremylouie98/" size={iconSize} />,
                      <IconClickable icon={<UilGithub />} href="https://github.com/jsethlui" size={iconSize} />,
                      <IconClickable icon={<UilEnvelopeAlt />} href="https://google.com" size={iconSize} />]

    return (
        <Group className={classes.container}>

            <Group className={classes.text_container}>
                <Group className={classes.name}>
                    <Text className={classes.intro}>Hi, I'm</Text>
                    <a className={classes.linkedin_anchor}
                    target="_blank"
                    href="https://www.linkedin.com/in/jeremylouie98/">
                        Jeremy Louie
                    </a>
                </Group>

                <h2 className={classes.title}>
                <Typewriter options={{ strings: ["Software Engineer", "Coffee Enthusiast"],
                                       autoStart: true,
                                       delay: 100,
                                       loop: true, }} />
                </h2>

                <Text className={classes.brief}>
                    I previously developed C++ robototic algorithms at <Anchor href="https://omafertility.com/" title="Oma Robotics" /> to improve in-vitro fertilization success rates. I'm looking to continue developing and delivering products.
                </Text>

                <IconContainer icons={allIcons} />
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