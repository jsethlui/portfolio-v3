
import { Tabs, Burger } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';
import { useNavigate, useParams } from 'react-router-dom'
import { useMediaQuery } from 'react-responsive'
import classes from '/src/components/Navigation/Navigation.module.css'

function MobileNavigationTabs() {

    // @todo: add animations for when tabs are opened on mobile
    // @todo: have tabs open on side

    const navigate = useNavigate();
    const { tabValue } = useParams()
    return (
        <Tabs variant="unstyled"
              classNames={classes}
              value={ tabValue }
              onChange={(value) => navigate(`#${value}`)}
              orientation="vertical"
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
    )
}

function MobileNavigation() {
    const [isOpen, { toggle }] = useDisclosure()
    return (
        <div>
            <Burger className={classes.mobile}
                    size="lg"
                    opened={isOpen}
                    onClick={toggle} />
            { isOpen ? <MobileNavigationTabs /> : null }
        </div>
    )
}

function DesktopNavigation() {
    const navigate = useNavigate();
    const { tabValue } = useParams()
    return (
        <Tabs variant="unstyled"
            classNames={classes}
            value={ tabValue }
            onChange={(value) => navigate(`#${value}`)}
            orientation="horizontal"
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
    )
}

function Navigation() {
    const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'})
    const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' })
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
    const isPortrait = useMediaQuery({ query: '(orientation: portrait)' })
    const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' })
    return (
        <div>
            {isDesktopOrLaptop ? <DesktopNavigation /> : <MobileNavigation />}
        </div>
    );
}

export default Navigation