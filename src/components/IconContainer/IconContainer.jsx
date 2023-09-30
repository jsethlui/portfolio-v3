
import { Group } from '@mantine/core'
import classes from '/src/components/IconContainer/IconContainer.module.css'

function IconContainer({ icons }) {

    const iconsRendered = icons.map(icon => {
        return (
            // @todo: silence key warning here
            <div className={classes.icon}>
                {icon}
            </div>
        )
    })

    return (
        <Group className={classes.icon_container}>
            {iconsRendered}
        </Group>
    )
}

export default IconContainer