import React from "react";

export default function Output({task, deleteTodo}) {
    return (
        <div className="outputDiv">
            <p className="outputText">{task}</p>
            <button onClick={() => deleteTodo({task})} className="outputButton">Completed</button>
        </div>
    )
}