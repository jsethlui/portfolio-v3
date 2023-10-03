
import { Container, Tabs, List, Title, Text, Group } from '@mantine/core';
import { useMediaQuery } from 'react-responsive'
import Anchor from '/src/components/Anchor/Anchor.jsx'
import global from '/src/components/App/App.module.css'
import classes from '/src/components/Experience/Experience.module.css'

function Experience() {

    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })

    const tabsColor = "var(--mantine-color-indigo-4)"
    const omaSkills = ["C++", "Python", "Bash", "Git", "Qt", "New Relic", "Amazon Web Services", "Atlassian"]
    const juniSkills = ["C++", "Python", "Java"]
    const pocketRacerSkills = ["Raspberry Pi", "Python", "HTML", "CSS", "JavaScript", "Google Cloud", "GitHub Pages"]
    const skillsRendered = function(skills) {
        const rendered = skills.map(skill => {
            return <Text className={classes.skill}>{skill}</Text>
        })
        return rendered
    }

    return (
        <Container>
            <Tabs color={tabsColor} classNames={classes} defaultValue="oma_robotics" orientation={isTabletOrMobile && isPortrait ? "horizontal" : "vertical"}>
                <Tabs.List>
                    <Tabs.Tab value="oma_robotics">
                        Oma Robotics
                    </Tabs.Tab>

                    <Tabs.Tab value="juni_learning">
                        Juni Learning
                    </Tabs.Tab>

                    <Tabs.Tab value="pocket_racers">
                        Pocket Racers
                    </Tabs.Tab>
                </Tabs.List>

                <Tabs.Panel value="oma_robotics">
                    <Title className={classes.title} order={2}>Software Engineer at <Anchor href="https://omafertility.com/" title="Oma Robotics" /></Title>
                    <Text className={classes.date}>November 2022 to August 2023</Text>
                    <List classNames={classes}>
                        <List.Item>Worked closely with Embryologists, Robotics Engineers, and Machine Learning Engineers to improve <Anchor href="https://en.wikipedia.org/wiki/In_vitro_fertilisation" title="in-vitro fertilization" /> success rates using artificial intelligence and robotics</List.Item>
                        <List.Item>Improved success and accuracy of robotics routines by implementing pipette calibration C++ algorithm</List.Item>
                        <List.Item>Automated manual injection of spermatozoa into oocyte by developing automated C++ robotics routine</List.Item>
                        <List.Item>Achieved fine-control of spermatozoa extraction by implementing C++ stepper motor API</List.Item>
                        <List.Item>Designed and implemented new front-end interface to display spermatozoa healthiness and motility classifications using <Anchor href="https://www.qt.io/" title="Qt" /> and C++</List.Item>
                        <List.Item>Developed real-time analytic monitoring platform to quickly diagnose issues from software deployed within nationwide clinics using <Anchor href="https://newrelic.com/" title="New Relic" /></List.Item>
                        <List.Item>Automated neural net data collection pipeline using using Python and <Anchor href="https://aws.amazon.com/" title="Amazon Web Services S3" /></List.Item>
                    </List>

                    <Group className={classes.skills_container}>
                        {skillsRendered(omaSkills)}
                    </Group>
                </Tabs.Panel>

                <Tabs.Panel value="juni_learning">
                    <Title className={classes.title} order={3}>Computer Science Instructor / Hiring Manager at <Anchor href="https://junilearning.com/juni-instructors/" title="Juni Learning" /></Title>
                    <Text className={classes.date}>September 2020 to June 2021, July 2022 to December 2022</Text>
                    <List classNames={classes}>
                        <List.Item>Screened candidates and conducted live-teaching interviews to assess potential instructors</List.Item>
                        <List.Item>Privately tutored students in Python, Java, and C++ introductory to advanced data structure courses</List.Item>
                        <List.Item>Provided daily student progress reports and learning assessment updates to parents</List.Item>
                        <List.Item>Launched first-ever iOS Programming club to teach students about mobile programming</List.Item>
                    </List>

                    <Group className={classes.skills_container}>
                        {skillsRendered(juniSkills)}
                    </Group>
                </Tabs.Panel>

                <Tabs.Panel value="pocket_racers">
                    <Title className={classes.title} order={2}>Web Developer at <Anchor href="https://www.romela.org/" title="Pocket Racers" /></Title>
                    <Text className={classes.date}>November 2021 to October 2022</Text>
                    <List classNames={classes}>
                        <List.Item>Worked closely with supervisor to promote affordable autonomous RC cars by overhauling website</List.Item>
                        <List.Item>Designed and developed new <Anchor href="https://scaledautonomousracing.github.io/PocketRacer/" title="Pocket Racers website" /> using HTML, CSS, and JavaScript</List.Item>
                        <List.Item>Reduced website maintenance costs by 100% by migrating from SquareSpace to <Anchor href="https://pages.github.com/" title="GitHub Pages" /></List.Item>
                        <List.Item>Implemented consensually tracked user data using JavaScript and <Anchor href="https://marketingplatform.google.com/about/analytics/" title="Google Analytics Reporting API" /></List.Item>
                        <List.Item>Enabled real-time Deep Reinforcement Learning by porting over Robot Operating System from Raspberry Pi to Jetson Xavier NX</List.Item>
                    </List>

                    <Group className={classes.skills_container}>
                        {skillsRendered(pocketRacerSkills)}
                    </Group>
                </Tabs.Panel>
            </Tabs>
        </Container>
    )
}

export default Experience