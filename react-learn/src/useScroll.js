import React,{useEffect} from "react";
import resetScroll from "./reset";
export default function useScroll(pathname) {
    useEffect(resetScroll,[pathname])
}