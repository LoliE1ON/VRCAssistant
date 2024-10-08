
import {useEffect, useState} from "react";
import {ApplicationService, Model} from "../../../bindings/github.com/LoliE1ON/VRCAssistant/domain/application/service";

export const WindowPanel = () => {
    const closeWindow = async () => {
        await ApplicationService.Quit();
    }

    const [data, setData] = useState<Model>();

    useEffect(() => {
        const intervalId = setInterval(async () => {
            const model = await ApplicationService.GetModel();
            setData(model);
        }, 5000);

        return () => clearInterval(intervalId);
    }, []);

    const Online = () => {
        if (data?.Vrchat.IsRunning) {
            return <div className="text-green-500 flex flex-row gap-4 bg-base-400 px-4 py-3 rounded">
                <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                    <path
                        d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                    <path
                        d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
                </svg>

                VRChat is running
            </div>;
        }

        return <div className="text-accent flex flex-row gap-4 bg-base-400 px-4 py-3 rounded">
            <svg width="18" height="18" viewBox="0 0 16 16" fill="currentColor">
                <path
                    d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
                <path
                    d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z"/>
            </svg>

            VRChat is not running
        </div>;
    }

    const OscClient = () => {
        if (data?.Osc.ClientIsRunning) {
            return <div className="text-green-500 flex flex-row gap-4 bg-base-400 px-4 py-3 rounded">
                <svg fill="currentColor" height="22" width="22" viewBox="0 0 512 512">
                    <g>
                        <g>
                            <path d="M347.524,266.144c-0.66-1.392-2.072-2.144-3.612-2.144H312v-92.392c0-2.208-2.32-3.608-4.532-3.608H203.572
                                c-2.212,0-3.572,1.4-3.572,3.608V264h-32.364c-1.544,0-2.952,0.752-3.612,2.144c-0.664,1.396-0.46,2.976,0.516,4.176l88.14,107.96
                                c0.756,0.928,1.896,1.452,3.096,1.452s2.34-0.548,3.096-1.476l88.136-107.936C347.984,269.124,348.188,267.54,347.524,266.144z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <polygon points="221.3,340 250.44,376 261.112,376 290.248,340 		"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path d="M476.328,340h-155.1l-29.136,36h44.984C348.1,376,356,384.476,356,395.504v8.336c0,11.028-7.9,20.16-18.924,20.16H120.72
                                c-11.028,0-20.72-9.132-20.72-20.16v-8.336c0-11.028,9.692-19.504,20.72-19.504h98.744l-29.14-36H37.032
                                C17.18,340,0,355.944,0,375.796v47.752C0,443.4,17.18,460,37.032,460h439.296C496.18,460,512,443.4,512,423.548v-47.752
                                C512,355.944,496.18,340,476.328,340z M56.656,423.42c-13.096,0-23.752-10.652-23.752-23.752
                                c0-13.092,10.652-23.752,23.752-23.752s23.752,10.656,23.752,23.752C80.408,412.768,69.752,423.42,56.656,423.42z M384.908,415.88
                                c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208s16.204,7.268,16.204,16.208S393.844,415.88,384.908,415.88z
                                 M424.908,415.88c-8.936,0-16.204-7.268-16.204-16.208s7.264-16.208,16.204-16.208s16.216,7.268,16.216,16.208
                                S433.844,415.88,424.908,415.88z M464.96,415.88c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208
                                s16.212,7.268,16.212,16.208S473.9,415.88,464.96,415.88z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <rect x="200" y="196" width="112" height="36"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path d="M337.076,280H172.572l29.14,36h108.124l29.312-36.064C338.456,280.008,337.784,280,337.076,280z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path d="M120.72,232H176v-36H37.032C17.18,196,0,212.196,0,232.048V279.8C0,299.648,17.18,316,37.032,316h133.704l-24.796-30.524
                                c-1.348-1.656-2.416-5.476-3.34-5.476h-21.88c-11.028,0-20.72-8.884-20.72-19.912v-8.336C100,240.728,109.692,232,120.72,232z
                                 M56.656,279.672c-13.096,0-23.752-10.656-23.752-23.752s10.652-23.752,23.752-23.752s23.752,10.652,23.752,23.752
                                C80.408,269.016,69.752,279.672,56.656,279.672z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path d="M476.328,196H336v36h1.076c7.388,0,13.78,3.952,17.248,9.924c6.18,2.496,11.384,7.06,14.472,13.116
                                c0.5-8.492,7.496-15.3,16.112-15.3c8.936,0,16.204,7.256,16.204,16.196s-7.264,16.2-16.204,16.2
                                c-5.444,0-10.248-2.724-13.188-6.856c0.608,7.144-1.448,14.524-6.116,20.244L340.816,316h135.512
                                C496.18,316,512,299.648,512,279.796v-47.748C512,212.196,496.18,196,476.328,196z M424.908,272.128
                                c-8.936,0-16.204-7.268-16.204-16.208s7.264-16.212,16.204-16.212s16.216,7.272,16.216,16.212S433.844,272.128,424.908,272.128z
                                 M464.96,272.128c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.212,16.208-16.212s16.212,7.272,16.212,16.212
                                S473.9,272.128,464.96,272.128z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path d="M307.468,168H203.572c-2.212,0-3.572,1.4-3.572,3.608V172h112v-0.392C312,169.4,309.68,168,307.468,168z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path d="M476.328,52H37.032C17.18,52,0,68.32,0,88.172v47.748C0,155.772,17.18,172,37.032,172H176v-0.392
                                C176,156.172,188.132,144,203.572,144h103.9C322.908,144,336,156.172,336,171.608V172h140.328C496.18,172,512,155.772,512,135.92
                                V88.172C512,68.32,496.18,52,476.328,52z M56.656,135.796c-13.096,0-23.752-10.652-23.752-23.752
                                c0-13.092,10.652-23.752,23.752-23.752s23.752,10.656,23.752,23.752C80.408,125.144,69.752,135.796,56.656,135.796z M356,116
                                c0,11.048-8.952,20-20,20H120c-11.048,0-20-8.952-20-20v-8c0-11.048,8.952-20,20-20h216c11.048,0,20,8.952,20,20V116z
                                 M384.908,128.252c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208s16.204,7.268,16.204,16.208
                                S393.844,128.252,384.908,128.252z M424.908,128.252c-8.936,0-16.204-7.268-16.204-16.208s7.264-16.208,16.204-16.208
                                s16.216,7.268,16.216,16.208S433.844,128.252,424.908,128.252z M464.96,128.252c-8.936,0-16.208-7.268-16.208-16.208
                                s7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208S473.9,128.252,464.96,128.252z"/>
                        </g>
                    </g>
                    </svg>
            </div>;
        }

        return <div className="text-accent flex flex-row gap-4 bg-base-400 px-4 py-3 rounded">
            <svg fill="currentColor" height="22" width="22" viewBox="0 0 512.004 512.004">
                <g>
                    <g>
                        <path d="M374.72,315.612l-74.788-119.688l-24.328-38.932c-11.084-17.732-29.196-17.732-40.248,0.024l-98.564,158.56
                            C125.748,333.332,133.948,348,155.024,348H356.56C377.632,348,385.808,333.34,374.72,315.612z M255.788,323.568
                            c-8.776,0-15.916-7.14-15.916-15.92c0-8.78,7.14-15.92,15.916-15.92c8.78,0,15.924,7.14,15.924,15.92
                            C271.712,316.428,264.572,323.568,255.788,323.568z M272,267.16c0,9.128-7.16,16.556-16.004,16.556
                            c-8.836,0-15.996-7.428-15.996-16.556v-58.744c0-9.128,7.16-16.556,15.996-16.556c8.844,0,16.004,7.428,16.004,16.556V267.16z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M475.42,196H328.292l40.176,64.22c-0.396-1.4-0.676-2.864-0.676-4.392c0-8.936,7.268-16.216,16.208-16.216
                            s16.208,7.264,16.208,16.204c0,8.936-7.268,16.208-16.208,16.208c-4.132,0-7.868-1.608-10.732-4.16l21.8,35.02
                            c2.672,4.272,4.676,9.116,6.104,13.116h74.248c19.852,0,36.58-16.46,36.58-36.312V231.94C512,212.084,495.272,196,475.42,196z
                             M424.004,272.024c-8.936,0-16.208-7.272-16.208-16.208c0-8.94,7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208
                            C440.216,264.752,432.94,272.024,424.004,272.024z M464.056,272.024c-8.936,0-16.208-7.272-16.208-16.208
                            c0-8.94,7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208C480.264,264.752,472.992,272.024,464.056,272.024z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M119.812,232h40.832l22.22-36H36.124C16.272,196,0,212.084,0,231.94v47.748C0,299.54,16.272,316,36.124,316h74.22
                            c1.42-4,3.412-8.832,6.072-13.104L130.572,280h-10.756C108.784,280,100,271.008,100,259.98v-8.336
                            C100,240.616,108.784,232,119.812,232z M55.752,279.564c-13.1,0-23.752-10.652-23.752-23.748s10.652-23.752,23.752-23.752
                            c13.1,0,23.752,10.656,23.752,23.752S68.848,279.564,55.752,279.564z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M475.42,52H36.124C16.272,52,0,68.216,0,88.068v47.752C0,155.668,16.272,172,36.124,172h161.748l17.112-27.652
                            c1.876-3.016,3.992-4.348,6.212-8.348H119.812C108.784,136,100,127.136,100,116.108v-8.336C100,96.748,108.784,88,119.812,88
                            h216.356C347.196,88,356,96.748,356,107.772v8.336c0,11.028-8.804,19.892-19.832,19.892h-46.376c2.2,4,4.296,5.284,6.16,8.264
                            L313.212,172h162.212c19.852,0,36.58-16.332,36.58-36.184V88.068C512,68.216,495.272,52,475.42,52z M55.752,135.692
                            c-13.1,0-23.752-10.656-23.752-23.752s10.652-23.752,23.752-23.752c13.1,0,23.752,10.652,23.752,23.752
                            C79.5,125.036,68.848,135.692,55.752,135.692z M384,128.152c-8.936,0-16.208-7.272-16.208-16.208
                            c0-8.936,7.268-16.208,16.208-16.208s16.208,7.268,16.208,16.208S392.936,128.152,384,128.152z M424.004,128.152
                            c-8.936,0-16.208-7.272-16.208-16.208c0-8.936,7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208
                            S432.94,128.152,424.004,128.152z M464.056,128.152c-8.936,0-16.208-7.272-16.208-16.208c0-8.936,7.268-16.208,16.208-16.208
                            s16.212,7.268,16.212,16.208S472.992,128.152,464.056,128.152z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M475.42,340h-72.856c-0.816,4-2.052,6.876-3.82,10.072C391.024,364.008,375.648,372,356.56,372H155.024
                            c-19.076,0-34.452-7.988-42.192-21.916c-1.776-3.2-3.02-6.084-3.84-10.084H36.124C16.272,340,0,355.84,0,375.692v47.752
                            c0,19.852,16.272,36.56,36.124,36.56H475.42c19.852,0,36.58-16.708,36.58-36.56v-47.752C512,355.84,495.272,340,475.42,340z
                             M55.752,423.316C42.656,423.316,32,412.66,32,399.564s10.652-23.752,23.752-23.752c13.1,0,23.752,10.656,23.752,23.752
                            C79.5,412.66,68.848,423.316,55.752,423.316z M356,404c0,11.048-8.952,20-20,20H120c-11.048,0-20-8.952-20-20v-8
                            c0-11.048,8.952-20,20-20h216c11.048,0,20,8.952,20,20V404z M384,415.772c-8.936,0-16.208-7.268-16.208-16.208
                            S375.064,383.36,384,383.36c8.936,0,16.208,7.268,16.208,16.208S392.936,415.772,384,415.772z M424.004,415.772
                            c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208S432.94,415.772,424.004,415.772z
                             M464.056,415.772c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208
                            S472.992,415.772,464.056,415.772z"/>
                    </g>
                </g>
            </svg>
        </div>;
    }

    const OscServer = () => {
        if (data?.Osc.ServerIsRunning) {
            return <div className="text-green-500 flex flex-row gap-4 bg-base-400 px-4 py-3 rounded">
                <svg fill="currentColor" height="22" width="22" viewBox="0 0 512.004 512.004" >
                    <g>
                        <g>
                            <path d="M346.8,252.726L259.08,145.23c-0.756-0.928-1.896-1.472-3.096-1.472s-2.34,0.544-3.096,1.472l-88.14,108
                                c-0.976,1.196-1.18,2.968-0.516,4.368c0.656,1.396,2.064,2.404,3.608,2.404H200v91.252c0,2.208,1.564,4.748,3.772,4.748h103.9
                                c2.212,0,4.328-2.54,4.328-4.748v-91.252h32.112c0.024,0,0.056,0,0.08,0c2.212,0,4-1.916,4-4.124
                                C348.192,254.666,347.652,253.454,346.8,252.726z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path
                                d="M200,340.002v11.252c0,2.208,1.564,4.748,3.772,4.748h103.9c2.212,0,4.328-2.54,4.328-4.748v-11.252H200z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path d="M475.664,340.002H336v11.252c0,10.288-5.916,20.748-14.204,24.748h14.612c11.028,0,19.592,8.364,19.592,19.392v8.336
                                c0,11.028-8.564,20.272-19.588,20.272H120.056c-11.028,0-20.056-9.248-20.056-20.272v-8.336c0-11.028,9.028-19.392,20.056-19.392
                                h69.592c-8.284-4-13.648-14.46-13.648-24.748v-11.252H36.368C16.516,340.002,0,355.834,0,375.686v47.752
                                c0,19.848,16.516,36.564,36.368,36.564h439.296c19.852,0,36.336-16.716,36.336-36.568v-47.748
                                C512,355.834,495.516,340.002,475.664,340.002z M55.992,423.31c-13.096,0-23.752-10.652-23.752-23.752
                                c0-13.1,10.652-23.752,23.752-23.752s23.752,10.652,23.752,23.752C79.744,412.658,69.088,423.31,55.992,423.31z M384.244,415.766
                                c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208s16.208,7.268,16.208,16.208S393.18,415.766,384.244,415.766z
                                 M424.248,415.766c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208
                                S433.184,415.766,424.248,415.766z M464.296,415.766c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208
                                s16.212,7.268,16.212,16.208S473.236,415.766,464.296,415.766z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <rect x="200" y="280.002" width="112" height="36"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <polygon points="300.456,196.002 211.5,196.002 182.36,232.002 329.592,232.002 		"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path d="M475.664,196.002H331.432l33.224,40.676c2.76,2.956,4.804,6.448,6.072,10.24c2.904-4.392,7.868-7.308,13.516-7.308
                                c8.936,0,16.208,7.268,16.208,16.208s-7.268,16.204-16.208,16.204c-5.664,0-10.636-2.928-13.54-7.34
                                c-3.616,10.728-13.544,18.696-25.356,19.176l-0.3,0.144h-0.932H336v32h139.664c19.852,0,36.336-16.468,36.336-36.32V231.93
                                C512,212.082,495.516,196.002,475.664,196.002z M424.248,272.018c-8.936,0-16.208-7.272-16.208-16.212s7.268-16.208,16.208-16.208
                                s16.212,7.268,16.212,16.208S433.184,272.018,424.248,272.018z M464.296,272.018c-8.936,0-16.208-7.272-16.208-16.212
                                s7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208S473.236,272.018,464.296,272.018z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path d="M153.936,280.002h-33.884c-11.024,0-20.052-9-20.052-20.024v-8.336c0-11.032,9.028-19.64,20.056-19.64h31.328l29.14-36
                                H36.368C16.516,196.002,0,212.082,0,231.93v47.752c0,19.852,16.516,36.32,36.368,36.32H176v-32h-8.16
                                C162.872,284.002,158.108,284.002,153.936,280.002z M55.992,279.558c-13.096,0-23.752-10.652-23.752-23.752
                                c0-13.092,10.652-23.752,23.752-23.752s23.752,10.656,23.752,23.752C79.744,268.906,69.088,279.558,55.992,279.558z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path
                                d="M259.076,145.322c-0.756-0.928-1.896-1.52-3.096-1.52s-2.34,0.612-3.096,1.544l-21.696,26.656h49.58L259.076,145.322z"/>
                        </g>
                    </g>
                                        <g>
                        <g>
                            <path d="M475.664,52.002H36.368C16.516,52.002,0,68.21,0,88.062v47.752c0,19.848,16.516,36.188,36.368,36.188h163.844l29.14-36
                                H120.056c-11.028,0-20.056-8.872-20.056-19.9v-8.336c0-11.024,9.028-19.764,20.056-19.764h216.356
                                c11.024,0,19.588,8.74,19.588,19.764v8.336c0,11.028-8.564,19.9-19.588,19.9h-53.8l29.14,36h163.916
                                c19.852,0,36.336-16.34,36.336-36.192V88.062C512,68.21,495.516,52.002,475.664,52.002z M55.992,135.686
                                c-13.096,0-23.752-10.652-23.752-23.752s10.652-23.752,23.752-23.752s23.752,10.652,23.752,23.752S69.088,135.686,55.992,135.686z
                                 M384.244,128.142c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208s16.208,7.268,16.208,16.208
                                S393.18,128.142,384.244,128.142z M424.248,128.142c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208
                                s16.212,7.268,16.212,16.208S433.184,128.142,424.248,128.142z M464.296,128.142c-8.936,0-16.208-7.268-16.208-16.208
                                s7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208S473.236,128.142,464.296,128.142z"/>
                        </g>
                    </g>
                </svg>
            </div>;
        }

        return <div className="text-accent flex flex-row gap-4 bg-base-400 px-4 py-3 rounded">
            <svg fill="currentColor" height="22" width="22" viewBox="0 0 512.004 512.004">
                <g>
                    <g>
                        <path d="M374.72,315.612l-74.788-119.688l-24.328-38.932c-11.084-17.732-29.196-17.732-40.248,0.024l-98.564,158.56
                            C125.748,333.332,133.948,348,155.024,348H356.56C377.632,348,385.808,333.34,374.72,315.612z M255.788,323.568
                            c-8.776,0-15.916-7.14-15.916-15.92c0-8.78,7.14-15.92,15.916-15.92c8.78,0,15.924,7.14,15.924,15.92
                            C271.712,316.428,264.572,323.568,255.788,323.568z M272,267.16c0,9.128-7.16,16.556-16.004,16.556
                            c-8.836,0-15.996-7.428-15.996-16.556v-58.744c0-9.128,7.16-16.556,15.996-16.556c8.844,0,16.004,7.428,16.004,16.556V267.16z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M475.42,196H328.292l40.176,64.22c-0.396-1.4-0.676-2.864-0.676-4.392c0-8.936,7.268-16.216,16.208-16.216
                            s16.208,7.264,16.208,16.204c0,8.936-7.268,16.208-16.208,16.208c-4.132,0-7.868-1.608-10.732-4.16l21.8,35.02
                            c2.672,4.272,4.676,9.116,6.104,13.116h74.248c19.852,0,36.58-16.46,36.58-36.312V231.94C512,212.084,495.272,196,475.42,196z
                             M424.004,272.024c-8.936,0-16.208-7.272-16.208-16.208c0-8.94,7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208
                            C440.216,264.752,432.94,272.024,424.004,272.024z M464.056,272.024c-8.936,0-16.208-7.272-16.208-16.208
                            c0-8.94,7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208C480.264,264.752,472.992,272.024,464.056,272.024z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M119.812,232h40.832l22.22-36H36.124C16.272,196,0,212.084,0,231.94v47.748C0,299.54,16.272,316,36.124,316h74.22
                            c1.42-4,3.412-8.832,6.072-13.104L130.572,280h-10.756C108.784,280,100,271.008,100,259.98v-8.336
                            C100,240.616,108.784,232,119.812,232z M55.752,279.564c-13.1,0-23.752-10.652-23.752-23.748s10.652-23.752,23.752-23.752
                            c13.1,0,23.752,10.656,23.752,23.752S68.848,279.564,55.752,279.564z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M475.42,52H36.124C16.272,52,0,68.216,0,88.068v47.752C0,155.668,16.272,172,36.124,172h161.748l17.112-27.652
                            c1.876-3.016,3.992-4.348,6.212-8.348H119.812C108.784,136,100,127.136,100,116.108v-8.336C100,96.748,108.784,88,119.812,88
                            h216.356C347.196,88,356,96.748,356,107.772v8.336c0,11.028-8.804,19.892-19.832,19.892h-46.376c2.2,4,4.296,5.284,6.16,8.264
                            L313.212,172h162.212c19.852,0,36.58-16.332,36.58-36.184V88.068C512,68.216,495.272,52,475.42,52z M55.752,135.692
                            c-13.1,0-23.752-10.656-23.752-23.752s10.652-23.752,23.752-23.752c13.1,0,23.752,10.652,23.752,23.752
                            C79.5,125.036,68.848,135.692,55.752,135.692z M384,128.152c-8.936,0-16.208-7.272-16.208-16.208
                            c0-8.936,7.268-16.208,16.208-16.208s16.208,7.268,16.208,16.208S392.936,128.152,384,128.152z M424.004,128.152
                            c-8.936,0-16.208-7.272-16.208-16.208c0-8.936,7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208
                            S432.94,128.152,424.004,128.152z M464.056,128.152c-8.936,0-16.208-7.272-16.208-16.208c0-8.936,7.268-16.208,16.208-16.208
                            s16.212,7.268,16.212,16.208S472.992,128.152,464.056,128.152z"/>
                    </g>
                </g>
                <g>
                    <g>
                        <path d="M475.42,340h-72.856c-0.816,4-2.052,6.876-3.82,10.072C391.024,364.008,375.648,372,356.56,372H155.024
                            c-19.076,0-34.452-7.988-42.192-21.916c-1.776-3.2-3.02-6.084-3.84-10.084H36.124C16.272,340,0,355.84,0,375.692v47.752
                            c0,19.852,16.272,36.56,36.124,36.56H475.42c19.852,0,36.58-16.708,36.58-36.56v-47.752C512,355.84,495.272,340,475.42,340z
                             M55.752,423.316C42.656,423.316,32,412.66,32,399.564s10.652-23.752,23.752-23.752c13.1,0,23.752,10.656,23.752,23.752
                            C79.5,412.66,68.848,423.316,55.752,423.316z M356,404c0,11.048-8.952,20-20,20H120c-11.048,0-20-8.952-20-20v-8
                            c0-11.048,8.952-20,20-20h216c11.048,0,20,8.952,20,20V404z M384,415.772c-8.936,0-16.208-7.268-16.208-16.208
                            S375.064,383.36,384,383.36c8.936,0,16.208,7.268,16.208,16.208S392.936,415.772,384,415.772z M424.004,415.772
                            c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208S432.94,415.772,424.004,415.772z
                             M464.056,415.772c-8.936,0-16.208-7.268-16.208-16.208s7.268-16.208,16.208-16.208s16.212,7.268,16.212,16.208
                            S472.992,415.772,464.056,415.772z"/>
                    </g>
                </g>
            </svg>
        </div>;
    }

    const SteamVr = () => {
        if (data?.Steamvr.IsRunning) {
            return <div className="text-green-500 flex flex-row gap-4 bg-base-400 px-4 py-3 rounded">
                <svg fill="currentColor" width="22" height="22" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 10.891494 27 6.5985638 23.494211 5.3671875 18.765625 L 9.0332031 20.335938 C 9.2019466 21.832895 10.457908 23 12 23 C 13.657 23 15 21.657 15 20 C 15 19.968 14.991234 19.93725 14.990234 19.90625 L 19.167969 16.984375 C 21.297969 16.894375 23 15.152 23 13 C 23 10.791 21.209 9 19 9 C 16.848 9 15.106578 10.702031 15.017578 12.832031 L 12.09375 17.009766 C 12.06175 17.008766 12.032 17 12 17 C 11.336696 17 10.729087 17.22153 10.232422 17.585938 L 5.0332031 15.357422 C 5.3688686 9.5919516 10.151903 5 16 5 z M 19 10 C 20.657 10 22 11.343 22 13 C 22 14.657 20.657 16 19 16 C 17.343 16 16 14.657 16 13 C 16 11.343 17.343 10 19 10 z M 19 11 A 2 2 0 0 0 19 15 A 2 2 0 0 0 19 11 z M 12 18 C 13.105 18 14 18.895 14 20 C 14 21.105 13.105 22 12 22 C 11.191213 22 10.498775 21.518477 10.183594 20.828125 L 10.966797 21.164062 C 11.158797 21.247062 11.359641 21.287109 11.556641 21.287109 C 12.138641 21.287109 12.6935 20.945953 12.9375 20.376953 C 13.2635 19.615953 12.910438 18.734203 12.148438 18.408203 L 11.419922 18.095703 C 11.604729 18.039385 11.796712 18 12 18 z"/>
                </svg>
            </div>;
        }

        return <div className="text-accent flex flex-row gap-4 bg-base-400 px-4 py-3 rounded">
            <svg fill="currentColor" width="22" height="22" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M 16 3 C 8.832 3 3 8.832 3 16 C 3 23.168 8.832 29 16 29 C 23.168 29 29 23.168 29 16 C 29 8.832 23.168 3 16 3 z M 16 5 C 22.065 5 27 9.935 27 16 C 27 22.065 22.065 27 16 27 C 10.891494 27 6.5985638 23.494211 5.3671875 18.765625 L 9.0332031 20.335938 C 9.2019466 21.832895 10.457908 23 12 23 C 13.657 23 15 21.657 15 20 C 15 19.968 14.991234 19.93725 14.990234 19.90625 L 19.167969 16.984375 C 21.297969 16.894375 23 15.152 23 13 C 23 10.791 21.209 9 19 9 C 16.848 9 15.106578 10.702031 15.017578 12.832031 L 12.09375 17.009766 C 12.06175 17.008766 12.032 17 12 17 C 11.336696 17 10.729087 17.22153 10.232422 17.585938 L 5.0332031 15.357422 C 5.3688686 9.5919516 10.151903 5 16 5 z M 19 10 C 20.657 10 22 11.343 22 13 C 22 14.657 20.657 16 19 16 C 17.343 16 16 14.657 16 13 C 16 11.343 17.343 10 19 10 z M 19 11 A 2 2 0 0 0 19 15 A 2 2 0 0 0 19 11 z M 12 18 C 13.105 18 14 18.895 14 20 C 14 21.105 13.105 22 12 22 C 11.191213 22 10.498775 21.518477 10.183594 20.828125 L 10.966797 21.164062 C 11.158797 21.247062 11.359641 21.287109 11.556641 21.287109 C 12.138641 21.287109 12.6935 20.945953 12.9375 20.376953 C 13.2635 19.615953 12.910438 18.734203 12.148438 18.408203 L 11.419922 18.095703 C 11.604729 18.039385 11.796712 18 12 18 z"/></svg>
        </div>;
    }

    return (
        <div className="bg-base-300 absolute w-full text-green-500">
            <div className="flex justify-between items-center bg-transparent app__drag-area cursor-default w-full">
                <div className="font-semibold text-sm ml-4">
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

                        <div className="text-xl font-semibold">VRCAssistant</div>
                    </div>
                </div>
                <div className="py-4 px-4 text-sm flex flex-row gap-4">
                    <Online/>
                    <SteamVr/>
                    <OscClient/>
                    <OscServer/>
                </div>
                <div className="hover:text-secondary cursor-pointer" onClick={closeWindow}>
                    <div className="p-6">
                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="20" height="20"
                             viewBox="0 0 64 64"
                             fill="currentColor">
                            <path
                                d="M51.092 15.737L48.263 12.908 32 29.172 15.737 12.908 12.908 15.737 29.172 32 12.908 48.263 15.737 51.092 32 34.828 48.263 51.092 51.092 48.263 34.828 32z"></path>
                        </svg>
                    </div>

                </div>
            </div>
        </div>
    )
}
