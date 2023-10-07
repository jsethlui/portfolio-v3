
import { Container } from '@mantine/core'
import { UilLinkedin, UilGithub, UilCodeBranch } from '@iconscout/react-unicons'
import IconClickable from '/src/components/IconContainer/IconClickable.jsx'
import IconContainer from '/src/components/IconContainer/IconContainer.jsx'
import classes from '/src/components/Footer/Footer.module.css'

function Footer() {

    const iconSize = 35    // pixels
    const iconColor = "var(--mantine-color-indigo-4)"
    const allIcons = [<IconClickable icon={<UilLinkedin />} href="https://www.linkedin.com/in/jeremylouie98/" />,
                      <IconClickable icon={<UilGithub />} href="https://github.com/jsethlui" />,
                      <IconClickable icon={<UilCodeBranch />} href="https://github.com/jsethlui/portfolio-v3" />]

    return (
        <Container className={classes.container}>
            <IconContainer icons={allIcons} />
            <Container>
                <a target="_blank"
                   href="https://google.com"
                   className={classes.button}>
                    Resume
                </a>

                <a target="_blank"
                   href="https://google.com"
                   className={classes.button}>
                    Contact
                </a>
            </Container>
        </Container>
    )
}

export default Footer