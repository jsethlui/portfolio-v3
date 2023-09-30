
import { Tabs } from '@mantine/core'
import { useNavigate, useParams } from 'react-router-dom'
import classes from '/src/components/Navigation/Navigation.module.css'

function Navigation() {

    const iconColor = "var(--mantine-color-indigo-4)"
    const navigate = useNavigate()
    const { tabValue } = useParams()

    return (
        <Tabs variant="unstyled"
            classNames={classes}
            value={ tabValue }
            onChange={(value) => navigate(`#${value}`)}
            activateTabWithKeyboard={false}>
            <Tabs.List>
                <Tabs.Tab value="about">
                    About
                </Tabs.Tab>

                <Tabs.Tab value="experience">
                    Experience
                </Tabs.Tab>

                <Tabs.Tab value="projects">
                    Projects
                </Tabs.Tab>

                <Tabs.Tab value="contact">
                    Contact
                </Tabs.Tab>

                <Tabs.Tab value="resume">
                    Resume
                </Tabs.Tab>
            </Tabs.List>
        </Tabs>
    );
}

export default Navigation