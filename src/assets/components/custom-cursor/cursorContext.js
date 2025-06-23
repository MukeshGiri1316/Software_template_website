import { createContext, useContext, useEffect, useState } from "react";

const CursorContext = createContext({
    target: "default",
    mouseEnter: (variant)=>{},
    mouseLeave: (variant)=>{}
})

export const useCursor = () => {
    return useContext(CursorContext);
}

export const CursorProvider = CursorContext.Provider

// export function mouseEnter(variant) {
//     console.log(variant)
// }
// export function mouseLeave() {
//     console.log("ok")
// }