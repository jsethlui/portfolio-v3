
import { Group, Stack } from '@mantine/core'
import classes from '/src/components/IconContainer/IconContainer.module.css'

function IconContainer({ icons, isHorizontal=true }) {

    const iconsRendered = icons.map(icon => {
        return (
            // @todo: silence key warning here
            <div className={classes.icon}>
                {icon}
            </div>
        )
    })

    function renderHorizontal() {
        return (
            <Group className={classes.icon_container}>
                {iconsRendered}
            </Group>
        )
    }

    function renderVertical() {
        return (
            <Stack className={classes.icon_container}>
                {iconsRendered}
            </Stack>
        )
    }

    return (
        isHorizontal ? renderHorizontal() : renderVertical()
    )
}

export default IconContainer