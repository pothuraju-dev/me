import React from "react"
import profileImg from "../images/sriram.jpg"

export default function About() {
    return (
        <section id="about">
            <div className="container d-flex px-5 py-5 flex-row flex-column align-items-center">

                <div className="d-flex justify-content-between">
                    <div className="flex-grow-0 w-75 flex-column text-lg-start mb-8 text-center">
                    <h1 className="title-font ">
                        Hi. I'm Sri Ram.
                        <br className="hidden" />I love to building amazing apps.
                    </h1>
                    <p className="mb-8 leading-relaxed">I have worked on multiple technologies </p>
                    <div className="flex justify-content-center">
                        <a href="#contact" className="text-white bg-success b-0 mx-1 py-2 px-3 rounded-5">Work With Me</a>
                        <a href="#projects" className="ml-2 text-white bg-secondary b-0 py-2 px-3 rounded-5">See My Past Work</a>
                    </div>
                    </div>
                    <div className="w-70 my-0 align-items-end">
                        <img className="rounded-circle"
                            alt="hero" src={profileImg} />
                    </div>
                </div>
            </div>
        </section>
    )
}