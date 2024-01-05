import React from "react";

export default function Output({array}) {
    const handleClick = (props) => {
        console.log(props.key)
    }

    return (
        <ul>
            {
                array.map(item => <li key={item}>{item}<button key={item} onClick={handleClick}>Delete</button></li>)
            }
        </ul>
    )
}