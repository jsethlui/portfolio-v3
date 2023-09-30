
import { Group, Image, Title, Text, List } from '@mantine/core'
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
                    My name is Jeremy, and I enjoy developing and delivering products. I leveraged my Mathematics of Computation degree from the <a target="_blank" rel="noopener noreferrer" href="https://www.ucla.edu/" className={global.underline_anchor}>University of California, Los Angeles</a> to secure a Software Engineer position at <a target="_blank" rel="noopener noreferrer" href="https://omafertility.com/" className={global.underline_anchor}>Oma Fertility.</a> There, I helped develop frontend interfaces and robotic algorithms for our Spermatoza Select Application, a software tool used within embryologist clinics to classify spermatozoa healthiness in real time. My notable achievements include:
                </Text>

                <List>
                    <List.Item>Developing a C++ pipette calibration algorithm to allow other robotic algorithms to accurately manipulate a pipette</List.Item>
                    <List.Item>Developing a C++ needle injection algorithm to allow a needle to puncture through an oocyte</List.Item>
                    <List.Item>Writing a C++ library to control an <a target="_blank" rel="noopener noreferrer" href="https://www.arcus-technology.com/" className={global.underline_anchor}>Arcus</a> Stepper Motor to enable spermatozoa extraction from a petri dish</List.Item>
                    <List.Item>Implementing a real-time analytic <a target="_blank" rel="noopener noreferrer" href="https://newrelic.com/" className={global.underline_anchor}>New Relic</a> dashboard to quickly diagnose issues from our Spermatozoa Selection Application</List.Item>
                </List>

                <Text>
                    I have experience in developing, maintaining, and delivering products. I am seeking positions where I can continue refining my industry knowledge in design principles and frameworks. If you are interested in connecting, let's <a target="_blank" rel="noopener noreferrer" href="https://google.com/" className={global.underline_anchor}>chat!</a>
                </Text>
            </div>
        </Group>
    )
}

export default About