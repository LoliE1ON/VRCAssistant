// Cynhyrchwyd y ffeil hon yn awtomatig. PEIDIWCH Â MODIWL
// This file is automatically generated. DO NOT EDIT

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore: Unused imports
import {Call as $Call} from "@wailsio/runtime";

export function Greet(name: string): Promise<string> & { cancel(): void } {
    let $resultPromise = $Call.ByID(1411160069, name) as any;
    return $resultPromise;
}
