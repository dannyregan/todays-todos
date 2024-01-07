import React from "react";

export default function Output({task, deleteTodo}) {
    return (
        <div className="outputDiv">
            <p className="outputText">{task}</p>
            <button onClick={() => deleteTodo({task})} className="outputButton">Delete</button>
        </div>
    )
    // return (
    //     <ul>
    //         {
    //             array.map(item => <li key={item}>{item}<button id={item} onClick={() => deleteTodo({item})}>Delete</button></li>)
    //         }
    //     </ul>
    // )
}