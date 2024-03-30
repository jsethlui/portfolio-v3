
import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import { UilExternalLinkAlt } from '@iconscout/react-unicons'

import omaClinic from '/src/assets/omaClinic.jpeg'
import omaPolaroid from '/src/assets/omaPolaroid.jpeg'
import juniLogo from '/src/assets/juniLogo.png'
import juniFounders from '/src/assets/juniLearningFounders.jpeg'
import avatar from '/src/assets/avatar.jpg'
import github from '/src/assets/github.png'

import styles from '/src/components/Chatbot/Chatbot.module.css'

function Response({ data }) {
    return (
        <div class="bg-blue-300 text-left max-w-md p-3 mt-5 mb-8 ml-8 mr-auto rounded-md sm:rounded-lg   animate-fade-down animate-once animate-duration-500 animate-delay-0 animate-ease-in-out">
            {import.meta.env.VITE_DEBUG === "true" ? data : <Typewriter options={{ strings: data,
                            cursor: "",
                            autoStart: true,
                            delay: 15,
                            loop: false, }} /> }
        </div>
    )
}

function Query({ data }) {
    return (
        <div class="bg-neutral-300 text-right w-max p-3 mt-5 mb-8 ml-auto mr-5 rounded-md sm:rounded-lg   animate-fade-down animate-once animate-duration-500 animate-delay-0 animate-ease-in-out">
            {import.meta.env.VITE_DEBUG === "true" ? data : <Typewriter options={{ strings: data,
                            cursor: "",
                            autoStart: true,
                            delay: 15,
                            loop: false, }} /> }
        </div>
    )
}

function AssetRow({ title, image, hyperlink="", body }) {

    return (
        <div class="bg-neutral-200   relative flex p-5 m-10 rounded-[20px]   shadow-xl text-gray-900   animate-fade-right animate-once animate-duration-500 animate-delay-[500ms] animate-ease-in-out">
            <div class="flex flex-col justify-center   mr-6 ">
                <a href={hyperlink} target = "_blank" class="min-h-[150px] w-[200px]   shadow-xl text-gray-900">
                    <img class="object-cover   rounded-[10px]" src={image} />
                </a>
            </div>

            <div>
                {hyperlink == "" ? <p class="flex   text-[20px] font-semibold text-left">{title}</p> : <a href={hyperlink} target = "_blank"  class="flex   text-[20px] font-semibold text-left hover:text-blue-400">{title}</a>}
                <p class="text-[18px] text-neutral-600 text-left">{body}</p>
            </div>
        </div>
    )
}

function Assets( {context=""} ) {

    const [allAssets, setAllAssets] = useState()

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

function Chatbot() {
    const start = {
        "type": "response",
        "data": "Hi, feel free to ask anything regarding my professional career and I'll do my best to respond! For any questions you might have, I'll do my best to attach some helpful resources on the left."
    }

    const [value, setValue] = useState("")
    const [disableQuerying, setDisableQuerying] = useState(false)
    const [allResponses, setAllResponses] = useState([start])
    const [assets, setAssets] = useState(<Assets context="" />)

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onKeyDown = (event) => {
        if (event.key === "Enter") {
            if (value.trim().length === 0) {
                console.log("Whitespace query foound, will not process")
            } else {
                setDisableQuerying(true)
                setAllResponses(allResponses => [...allResponses, {"type": "query", "data": value}] )

                const options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({"query": value})
                }

                fetch(import.meta.env.VITE_ENDPOINT, options)
                    .then((response) => response.json())
                    .then((data) => {
                        setAllResponses(allResponses => [...allResponses, {"type": "response", "data": data["response"]}] )
                        setAssets(<Assets context={value} />)
                        setDisableQuerying(false)
                    })
                    .catch((error) => console.error(error))
            }
            setValue("")
        }
    }

    return (
        <div class="w-[80rem]">
            <div class="flex">
                <div class="m-5 rounded-[24px] w-[50rem]   flex justify-center items-center">
                    {assets}
                </div>

                <div class="p-5">
                    <div class="bg-neutral-100   min-w-[35rem] min-h-[35rem] max-h-[35rem] ml-5 overflow-y-auto rounded-[24px]">
                        {allResponses.map(r => {
                            if (r["type"] === "response") {
                                return <Response data={r["data"]} />
                            } else {
                                return <Query data={r["data"]} />
                            }
                        })}
                    </div>

                    <div class="w-[95%] ml-auto mr-auto">
                        <input class="bg-neutral-100   min-w-full m-3 pl-5 pr-4 pt-3 pb-3 outline-none rounded-full"
                                type="text"
                                placeholder="Ask me something"
                                disabled={disableQuerying}
                                value={value}
                                onChange={onChange}
                                onKeyDown={onKeyDown} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chatbot
