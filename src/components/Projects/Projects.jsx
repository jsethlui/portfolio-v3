
import { Container, Group, Card, Text, Image, Space, Center, Title } from '@mantine/core';
import { UilGithub, UilExternalLinkAlt } from '@iconscout/react-unicons'
import IconClickable from '/src/components/IconContainer/IconClickable.jsx'
import IconContainer from '/src/components/IconContainer/IconContainer.jsx'
import RungeKutta from '/src/assets/runge_kutta.png'
import ZoomieRoomies from '/src/assets/zoomie_roomies.png'
import classes from '/src/components/Projects/Projects.module.css'
import global from '/src/components/App/App.module.css'

function Projects() {

    const zoomieIcons = [<IconClickable icon={<UilGithub />} href="https://github.com/cs130-w22/Group-B1" />,
                         <IconClickable icon={<UilExternalLinkAlt />} href="https://github.com/cs130-w22/Group-B1" />]
    const rungeKuttaIcons = [<IconClickable icon={<UilGithub />} href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-" />,
                             <IconClickable icon={<UilExternalLinkAlt />} href="https://github.com/jsethlui/What-is-the-best-Runge-Kutta-Method-/blob/main/4th_Order_Runge_Kutta_Method_Analysis.ipynb" />]

    return (
        <Container className={classes.container}>
            <Title order={1} className={[global.header, global.header_center].join(" ")}>Projects</Title>
            <Center className={classes.center_container}>
                <Card classNames={classes} shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image src={ZoomieRoomies} h={275} alt="Zoomie Roomies" />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text size="lg" fw={500}>Zoomie Roomies</Text>
                        <IconContainer icons={zoomieIcons} />
                    </Group>

                    <Text size="sm" c="dimmed">
                        As part of our capstone project for COM SCI 130: Software Engineering, we provide a solution roommates searching
                        during post-graduation. We provide Zoomie Roomies, a dedicated platform for postgraduate students who are
                        searching for roommates with similar interests.
                    </Text>
                    <Space h="md" />
                    <Text size="sm" c="dimmed">
                        Frontend built with React and CSS, backend built with NodeJS, and deployed on Heroku
                    </Text>
                </Card>

                <Card classNames={classes} shadow="sm" padding="lg" radius="md" withBorder>
                    <Card.Section>
                        <Image src={RungeKutta} h={275} alt="Runge Kutta" />
                    </Card.Section>

                    <Group justify="space-between" mt="md" mb="xs">
                        <Text size="lg" fw={500}>Runge Kutta Analysis</Text>
                        <IconContainer icons={zoomieIcons} />
                    </Group>

                    <Text size="sm" c="dimmed">
                        The 4th Order Runge Kutta (RK) Method is an iterative time-step method used to approximate ordinary differential equations (ODE's) aroundsome fixed point.
                    </Text>
                    <Space h="md" />
                    <Text size="sm" c="dimmed">
                    Using Jupyter Notebook, I use Python and SciPy to examine whether the standard or the weighted variation RK Methods succeed better in approximating ODE's
                    </Text>
                </Card>
            </Center>

        </Container>
    )
}

export default Projects