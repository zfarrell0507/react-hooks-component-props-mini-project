import React from "react";

function About({ src="https://via.placeholder.com/215", about }) {
    const alt = "blog logo"
    console.log(src)
    return (
        <aside>
            <img src={src} alt={alt} />
            <p>{about}</p>
        </aside>
    )
}

export default About