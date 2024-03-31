
import { Container } from '@mantine/core'
import { UilLinkedin, UilGithub, UilCodeBranch } from '@iconscout/react-unicons'
import IconClickable from '/src/components/IconContainer/IconClickable.jsx'
import IconContainer from '/src/components/IconContainer/IconContainer.jsx'
import Resume from '/src/assets/publicResume.pdf'
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
            <Container className={classes.button_container}>
                <a target="_blank"
                   href={Resume}
                   className={classes.button}>
                    Resume
                </a>

                <a target="_blank"
                   href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=%6A%73%65%74%68%6C%75%69%40%67%2E%75%63%6C%61%2E%65%64%75"
                   className={classes.button}>
                    Contact
                </a>
            </Container>
        </Container>
    )
}

export default Footer