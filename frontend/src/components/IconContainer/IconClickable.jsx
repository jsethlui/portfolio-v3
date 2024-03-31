
import React from 'react'

function IconClickable({ icon, href, size=30, color="var(--mantine-color-indigo-4)" }) {
    return (
        <a target="_blank"
           href={href}>
            {React.cloneElement(icon, { size: size, color: color })}
        </a>
    )
}

export default IconClickable