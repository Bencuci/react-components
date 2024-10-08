import React from "react"
import classnames from "classnames"
import "/src/styles/testimonialStyle.css"

export default function Testimonial({children, imgPath="/src/images/testimonial.jpeg",  name, title, ...rest}) {
    return (
        <div className={classnames("testimonial", rest.className)}>
            <img src={imgPath}/>
            <article>
                <i className="fa-solid fa-quote-left"></i>
                <p>{children}</p>
                <aside className="name">{name}</aside>
                <aside className="title">{title}</aside>
            </article>
        </div>
    )
}