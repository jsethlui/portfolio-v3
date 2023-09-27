
import { Tabs, rem } from '@mantine/core';
import classes from '/src/components/Navigation/Navigation.module.css'

function Navigation() {

    return (
        <div>
            <Tabs>
                <Tabs.List>

                    <Tabs.Tab value="about">
                        About
                    </Tabs.Tab>

                    <Tabs.Tab value="experience">
                        Experience
                    </Tabs.Tab>

                    <Tabs.Tab value="Contact">
                        Contact
                    </Tabs.Tab>
                </Tabs.List>
            </Tabs>
        </div>
    );
}

export default Navigation