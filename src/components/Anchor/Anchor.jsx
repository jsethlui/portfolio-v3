
import classes from '/src/components/Anchor/Anchor.module.css'

function Anchor( { title, href } ) {
    return <a target="_blank" rel="noopener noreferrer" href={href} className={classes.anchor}>{title}</a>
}

export default Anchor