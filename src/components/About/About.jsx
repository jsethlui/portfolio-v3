
import { Group, Image, Title, Text, List } from '@mantine/core'
import Anchor from '/src/components/Anchor/Anchor.jsx'
import about from '/src/assets/about.jpg'
import global from '/src/components/App/App.module.css'
import classes from '/src/components/About/About.module.css'

function About() {
    return (
        <Group className={classes.container}>
            <Group className={classes.image_container}>
                <a target="_blank"
                   href="https://www.linkedin.com/in/jeremylouie98/">
                    <Image className={classes.image} src={about} />
                </a>
            </Group>

            <div className={classes.about_container}>
                <Title order={1} className={classes.header}>About</Title>
                <Text>
                    My name is Jeremy, and I enjoy developing and delivering products. I leveraged my Mathematics of Computation degree from the <Anchor href="https://www.ucla.edu/" title="University of California, Los Angeles" /> to secure a Software Engineer position at <Anchor href="https://omafertility.com/" title="Oma Fertility" /> There, I helped develop frontend interfaces and robotic algorithms for our Spermatoza Select Application, a software tool used within embryologist clinics to classify spermatozoa healthiness in real time. My notable achievements include:
                </Text>

                <List>
                    <List.Item>Developing a C++ pipette calibration algorithm to allow other robotic algorithms to accurately manipulate a pipette</List.Item>
                    <List.Item>Developing a C++ needle injection algorithm to allow a needle to puncture through an oocyte</List.Item>
                    <List.Item>Writing a C++ library to control an <Anchor href="https://www.arcus-technology.com/" title="Arcus" /> Stepper Motor to enable spermatozoa extraction from a petri dish</List.Item>
                    <List.Item>Implementing a real-time analytic <Anchor href="https://newrelic.com/" title="New Relic" /> dashboard to quickly diagnose issues from our Spermatozoa Selection Application</List.Item>
                </List>

                <Text>
                    I have experience in developing, maintaining, and delivering products. I am seeking positions where I can continue refining my industry knowledge in design principles and frameworks. If you are interested in connecting, let's <Anchor href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=%6A%73%65%74%68%6C%75%69%40%67%2E%75%63%6C%61%2E%65%64%75" title="chat!" />
                </Text>
            </div>
        </Group>
    )
}

export default About