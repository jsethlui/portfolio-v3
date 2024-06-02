
import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import { UilExternalLinkAlt } from '@iconscout/react-unicons'

import Assets from '/src/components/Chatbot/Assets.jsx'
import Query from '/src/components/Chatbot/Query.jsx'
import Response from '/src/components/Chatbot/Response.jsx'

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
                console.log("Whitespace query found, will not process")
            } else {
                setDisableQuerying(true)
                setAllResponses(allResponses => [...allResponses, {"type": "query", "data": value}] )

                const options = {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({"query": value})
                }

                fetch(import.meta.env.VITE_ENDPOINT, options)
                    .then((response) => response.json())
                    .then((data) => {
                        setAllResponses(allResponses => [...allResponses, {"type": "response", "data": data["response"]}] )
                        setAssets(<Assets context={value + data["response"]} />)    // Generate assets based on query and response
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
