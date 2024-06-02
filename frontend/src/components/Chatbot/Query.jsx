
function Query({ data }) {
    return (
        <div class="bg-neutral-300 text-left w-max max-w-sm p-3 mt-5 mb-8 ml-auto mr-5 rounded-md sm:rounded-lg   animate-fade-down animate-once animate-duration-500 animate-delay-0 animate-ease-in-out">
            {import.meta.env.VITE_DEBUG === "true" ? data : <Typewriter options={{ strings: data,
                            cursor: "",
                            autoStart: true,
                            delay: 15,
                            loop: false, }} /> }
        </div>
    )
}

export default Query