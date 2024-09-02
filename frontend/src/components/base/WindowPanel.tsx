import { ApplicationService } from "../../../bindings/github.com/LoliE1ON/VRCAssistant/service";

export const WindowPanel = () => {
    const closeWindow = async () => {
        await ApplicationService.Quite();
    }

    return (
        <div className="flex items-center justify-between  bg-transparent app__drag-area cursor-pointer">
            <div className="py-4 px-4 font-semibold text-sm">
                VRCAssistant
            </div>
            <div className="py-4 px-4 hover:text-secondary" onClick={closeWindow}>
                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 64 64" fill="currentColor">
                    <path
                        d="M51.092 15.737L48.263 12.908 32 29.172 15.737 12.908 12.908 15.737 29.172 32 12.908 48.263 15.737 51.092 32 34.828 48.263 51.092 51.092 48.263 34.828 32z"></path>
                </svg>
            </div>
        </div>
    )
}
