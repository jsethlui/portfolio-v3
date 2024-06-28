
import { useState } from 'react'
import omaClinic from '/src/assets/omaClinic.jpeg'
import omaPolaroid from '/src/assets/omaPolaroid.jpeg'
import juniLogo from '/src/assets/juniLogo.png'
import juniFounders from '/src/assets/juniLearningFounders.jpeg'
import avatar from '/src/assets/avatar.jpg'
import github from '/src/assets/github.png'

function Assets( {context=""} ) {

    const render = () => {
        if (context.includes("Oma Robotics")) {
            return (
                <div>
                    <AssetRow title="Oma Fertility Opens Three State-of-the-Art Clinics"
                        image={omaClinic}
                        hyperlink="https://finance.yahoo.com/news/oma-fertility-opens-three-state-130000167.html"
                        body="The innovator in fertility care continues to make parenthood possible for more people with new locations in Atlanta, New York, and St. Louis"
                    />

                    <AssetRow title="Dr. Sahil Gupta and Oma Fertility Provide Affordable IVF Procedures"
                        image={omaPolaroid}
                        hyperlink="https://femtechinsider.com/oma-fertility-launch-funding/"
                        body="Oma Fertility, a division of Oma Robotics, was founded in 2020 by a team of engineers, AI experts, and fertility specialists who believe that combining AI and robotics in the lab and human-centered care in the clinic will make parenthood possible for more people."
                    />
                </div>
            )
        } else if (context.includes("Juni Learning")) {
            return (
                <div>
                    <AssetRow title="Juni Learning"
                        image={juniLogo}
                        hyperlink="https://junilearning.com/coding-for-kids/"
                        body="Coding classes for kids with a personalized curriculum. Juni schedules classes based on your schedule, and we’ll use all the details you provide on instructor preferences and your child’s personality and learning style to match them with a great instructor! "
                    />

                    <AssetRow title="Backed By Arielle Zuckerberg, Juni Learning's 20-Something Female Founders Are Teaching Kids To Code"
                        image={juniFounders}
                        hyperlink="https://www.forbes.com/sites/susanadams/2018/10/24/backed-by-arielle-zuckerberg-juni-learnings-20-something-female-founders-are-teaching-kids-to-code/?sh=241afde06bd0"
                        body="Ruby Lee, 26, and Vivian Shen, 25, believe that their one-year-old startup, Juni Learning, can succeed in the crowded field of online coding instruction for kids."
                    />
                </div>
            )
        } else {
            return (
                <div>
                    <AssetRow title="LinkedIn"
                        image={avatar}
                        hyperlink="https://www.linkedin.com/in/jeremylouie98/"
                        body="Software Engineer with a passion for developing and delivering products. Seeking positions where I can continue my industry knowledge in design principles and frameworks. Proven ability to adapt to new environments and produce meaningful results."
                    />

                    <AssetRow title="GitHub"
                        image={github}
                        hyperlink="https://github.com/jsethlui"
                        body="All of my recent Github Projects, and Leetcode grind progression"
                    />
                </div>
            )
        }
    }

    return (
        <div>
            {render()}
        </div>
    )
}

function AssetRow({ title, image, hyperlink="", body }) {

    return (
        <div class="bg-neutral-200   flex p-5 m-10 max-w-[90%] rounded-[16px]   shadow-xl text-gray-900   animate-fade-right animate-once animate-duration-500 animate-delay-[500ms] animate-ease-in-out">
            <div class="bg-transparent   mr-6">
                <a href={hyperlink} target = "_blank" class="flex items-center justify-center min-h-[100px] w-[150px]">
                    <img class="object-cover   rounded-[10px]" src={image} />
                </a>
            </div>

            <div>
                {hyperlink == "" ? <p class="flex   text-lg font-semibold text-left">{title}</p> : <a href={hyperlink} target = "_blank"  class="flex   text-lg font-semibold text-left hover:text-blue-400">{title}</a>}
                <p class="text-md text-neutral-600 text-left">{body}</p>
            </div>
        </div>
    )
}

export default Assets