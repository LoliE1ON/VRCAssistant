import { Events } from "@wailsio/runtime";

export const WindowPanel = () => {
    const closeWindow = () => {
        Events.Emit({name: "closeWindow", data: null});
    }

    return (
        <div className="flex flex-row-reverse bg-white text-black">
            <div className="py-1 px-4 cursor-pointer font-medium hover:text-white hover:bg-black" onClick={closeWindow}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 64 64">
                    <path
                        d="M51.092 15.737L48.263 12.908 32 29.172 15.737 12.908 12.908 15.737 29.172 32 12.908 48.263 15.737 51.092 32 34.828 48.263 51.092 51.092 48.263 34.828 32z"></path>
                </svg>
            </div>
        </div>
    )
}
