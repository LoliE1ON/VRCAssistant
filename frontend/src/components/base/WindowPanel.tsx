import { ApplicationService } from "../../../bindings/github.com/LoliE1ON/VRCAssistant/service";

export const WindowPanel = () => {
    const closeWindow = async () => {
        await ApplicationService.Quit();
    }

    return (
        <div className="bg-base-300 absolute w-full text-green-500">
            <div className="flex items-center justify-between  bg-transparent app__drag-area cursor-default">
                <div className="py-4 px-4 font-semibold text-sm">
                    <div className="flex flex-row items-center gap-2">
                        <div>
                            <svg fill="none" width="24" height="24" viewBox="0 0 24 24"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 6C12 4.11438 12 3.17157 12.5858 2.58579C13.1716 2 14.1144 2 16 2H18C19.8856 2 20.8284 2 21.4142 2.58579C22 3.17157 22 4.11438 22 6V8C22 9.88562 22 10.8284 21.4142 11.4142C20.8284 12 19.8856 12 18 12H16C14.1144 12 13.1716 12 12.5858 11.4142C12 10.8284 12 9.88562 12 8V6Z"
                                    fill="currentColor"/>
                                <path
                                    d="M10.5 7.00048C8.94286 7.00504 8.11735 7.05425 7.5858 7.5858C7.00001 8.17159 7.00001 9.1144 7.00001 11V13C7.00001 14.4372 7.00001 15.3267 7.2594 15.9279C7.32969 16.0908 7.41903 16.2325 7.53258 16.3582C7.54976 16.3773 7.56749 16.3959 7.58579 16.4142C8.17157 17 9.11438 17 11 17H13C14.8856 17 15.8284 17 16.4142 16.4142C16.9458 15.8827 16.995 15.0572 16.9995 13.5L15.9105 13.5C15.0449 13.5001 14.2512 13.5002 13.6056 13.4134C12.8946 13.3178 12.1432 13.0929 11.5251 12.4749C10.9071 11.8568 10.6822 11.1054 10.5866 10.3944C10.4998 9.74881 10.4999 8.95514 10.5 8.08951L10.5 7.00048Z"
                                    fill="currentColor"/>
                                <path
                                    d="M5.50001 12.0005C3.94285 12.005 3.11733 12.0542 2.58579 12.5858C2 13.1716 2 14.1144 2 16V18C2 19.8856 2 20.8284 2.58579 21.4142C3.17157 22 4.11438 22 6 22H8C9.88562 22 10.8284 22 11.4142 21.4142C11.9458 20.8827 11.995 20.0572 11.9995 18.5L10.9105 18.5C10.0449 18.5001 9.25122 18.5002 8.6056 18.4134C7.89464 18.3178 7.14319 18.0929 6.52514 17.4749C5.90709 16.8568 5.6822 16.1054 5.58661 15.3944C5.49981 14.7488 5.4999 13.9551 5.50001 13.0895L5.50001 12.0005Z"
                                    fill="currentColor"/>
                            </svg>
                        </div>

                        <div>VRCAssistant</div>
                    </div>

                </div>
                <div className="py-4 px-4 hover:text-secondary cursor-pointer" onClick={closeWindow}>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20" viewBox="0 0 64 64"
                         fill="currentColor">
                        <path
                            d="M51.092 15.737L48.263 12.908 32 29.172 15.737 12.908 12.908 15.737 29.172 32 12.908 48.263 15.737 51.092 32 34.828 48.263 51.092 51.092 48.263 34.828 32z"></path>
                    </svg>
                </div>
            </div>
        </div>
)
}
