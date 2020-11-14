import React from "react";
import resetScroll from "./reset";
export default function withScroll(Comp) {
    return class ScrollWrapper extends React.Component{
        componentDidMount() {
            resetScroll();
        }

        render() {
            return <Comp/>
        }
    }
}