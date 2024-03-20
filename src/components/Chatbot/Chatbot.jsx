
import { useState } from 'react'
import Typewriter from 'typewriter-effect'
import whiteBlob from '/src/assets/blob.svg'
import blubBlob from '/src/assets/blueBlob.svg'
import avatar from '/src/assets/avatar_backgroundRemoved.png'

function Chatbot() {
    const [value, setValue] = useState("")
    const startQuery = "Hi, my name is Jeremy! I'm a Software Engineer"

    const onChange = (event) => {
        setValue(event.target.value)
    }

    const onKeyDown = (event) => {
        if (event.key === "Enter") {
            console.log(value)
            setValue("")
        }
    }

    return (
        <div class="bg-neutral-200 flex justify-center items-center min-h-screen">
            <div class="relative">
                <img class="w-full" src={blubBlob} />
                <img class="w-full absolute top-0 left-0" src={avatar} />
            </div>

            <div>
                <div>
                    <div class="text-left w-80 bg-neutral-300 p-3 rounded-md sm:rounded-lg">
                        <Typewriter options={{ strings: startQuery,
                                                autoStart: true,
                                                delay: 50,
                                                loop: false, }} />
                    </div>

                    <div class="flex justify-end">
                        <input class="bg-neutral-100 m-3 p-2 rounded-lg"
                                type="text"
                                id="myInput"
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