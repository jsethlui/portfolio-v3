
import { useState } from 'react'
import Typewriter from 'typewriter-effect'

function Response({ data }) {
    return (
        <div class="bg-neutral-300   text-left max-w-md p-3 m-5 rounded-md sm:rounded-lg">
            {import.meta.env.VITE_DEBUG === "true" ? data : <Typewriter options={{ strings: data,
                            cursor: "",
                            autoStart: true,
                            delay: 15,
                            loop: false, }} /> }
        </div>
    )
}

function Assets( {context=""} ) {

    const render = () => {
        if (context.includes("Oma Robotics")) {
            return <p>Oma Robotics</p>
        } else if (context.includes("Juni Learning")) {
            return <p>Juni Learning</p>
        } else if (context.includes("Jeremy")) {
            return <p>Jeremy</p>
        } else {
            return <p>misc</p>
        }
    }

    return (
        <>
            {render()}
        </>
    )
}

function Chatbot() {
    const [value, setValue] = useState("")
    const [disableQuerying, setDisableQuerying] = useState(false)
    const [allResponses, setAllResponses] = useState(["Hi, feel free to ask anything regarding my professional career and I'll do my best to respond! For any questions you might have, I'll do my best to attach some helpful resources on the left."])
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
                console.log(value)

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
                        setAllResponses(allResponses => [...allResponses, data["response"]] )
                        setAssets(<Assets context={data["response"]} />)
                        setDisableQuerying(false)
                    })
                    .catch((error) => console.error(error))
            }
            setValue("")
        }
    }

    return (
        <>
            <div class="bg-neutral-200   flex justify-center items-center">
                <div class="relative flex">
                    <div class="bg-neutral-400   min-w-[35rem] min-h-[35rem] max-h-[35rem] mr-5 flex justify-center items-center">
                        {assets}
                    </div>

                    <div>
                        <div class="bg-neutral-400   min-w-[35rem] min-h-[35rem] max-h-[35rem] ml-5 overflow-y-auto">
                            {allResponses.map(r => (
                                <Response data={r} />
                            ))}
                        </div>

                        <div class="flex justify-end ml-10">
                            <input class="bg-neutral-100   min-w-full m-3 pl-4 pr-4 p-2 outline-none rounded-full"
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
        </>
    )
}

export default Chatbot
