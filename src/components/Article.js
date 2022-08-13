import React from "react";

function Article({ title, date, preview, }) {
    const small = "January 1, 1970"
    return (
        <article>
            <h3>{title}</h3>
            {date && date.length > 1 ? <small>{date}</small> : <small>{small}</small>}
            <p>{preview}</p>
        </article>
    )
}

export default Article