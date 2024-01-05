import React from "react";

export default function Button(props) {
    return (
        <button id='button' onClick={props.onClick}>{props.value}</button>
    )
}