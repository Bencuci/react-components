import React from "react"
import classnames from "classnames"
import "/src/styles/testimonialStyle.css"

export default function Testimonial({children, imgPath,  name, title, ...rest}) {
    return (
        <div>
            {imgPath ? 
                <div className={classnames("testimonial-i", rest.className)}>
                    <img src={imgPath}/>
                    <article>
                        <i className="fa-solid fa-quote-left"></i>
                        <p>{children}</p>
                        <aside className="name">{name}</aside>
                        <aside className="title">{title}</aside>
                    </article>
                </div>
                :
                <div className={classnames("testimonial", rest.className)}>
                    <article>
                        <img src="/src/images/testimonial-default.png" />
                        <p>{children}</p>
                        <aside className="name">{name}</aside>
                        <aside className="title">{title}</aside>
                    </article>
                </div>
            }
        </div>
    )
}